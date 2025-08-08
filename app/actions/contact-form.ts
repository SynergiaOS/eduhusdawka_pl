"use server"

import { z } from "zod"
import { isLikelySpam } from "@/lib/spam-protection"
import { getSMSQueue } from "@/lib/sms-queue"
import { Resend } from "resend"

// Define validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Imię musi zawierać co najmniej 2 znaki" }),
  email: z.string().email({ message: "Proszę podać prawidłowy adres email" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Wiadomość musi zawierać co najmniej 10 znaków" }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Zgoda na przetwarzanie danych jest wymagana" }),
  }),
  // Honeypot field - should be empty
  website: z.string().max(0, { message: "Wykryto spam" }).optional(),
})

export type ContactFormState = {
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    message?: string[]
    consent?: string[]
    website?: string[]
    _form?: string[]
  }
  message?: string
  success?: boolean
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Check honeypot field first
  const honeypot = formData.get("website")
  if (honeypot && honeypot.toString().length > 0) {
    // This is likely a bot - return success but don't process
    console.log("Spam submission detected via honeypot")
    return {
      message: "Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.",
      success: true,
    }
  }

  // Check submission timing
  const formStartTime = formData.get("formStartTime")
  if (formStartTime) {
    const startTime = Number.parseInt(formStartTime.toString(), 10)
    if (isLikelySpam(startTime)) {
      console.log("Spam submission detected via timing")
      // We could block here, but for demonstration we'll just log it
    }
  }

  // Validate form data
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || "",
    message: formData.get("message"),
    consent: formData.get("consent") === "on",
    website: formData.get("website") || "",
  })

  // Return errors if validation fails
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Proszę poprawić błędy w formularzu.",
      success: false,
    }
  }

  const { name, email, phone, message } = validatedFields.data

  try {
    // In a real application, you would send an email or store the data in a database
    // For demonstration purposes, we'll simulate a delay and return success
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Log the form data (in a real app, you'd send this data somewhere)
    console.log("Form submission:", { name, email, phone, message })

    // Enqueue SMS notification to admin (high priority)
    try {
      const adminPhone = process.env.ADMIN_PHONE || ""
      if (adminPhone) {
        const queue = getSMSQueue()
        const preview = message.length > 120 ? message.slice(0, 117) + "..." : message
        const sms = `Nowe zapytanie (EduHustawka)\nImię: ${name}\nEmail: ${email}${phone ? `\nTel: ${phone}` : ""}\nWiadomość: ${preview}`
        queue.enqueue(adminPhone, sms, { priority: 1 })
      }
    } catch (e) {
      console.error("Błąd podczas dodawania SMS do kolejki:", e)
    }

    // Send email via Resend (if configured)
    try {
      const RESEND_API_KEY = process.env.RESEND_API_KEY
      const ADMIN_EMAIL_TO = process.env.ADMIN_EMAIL_TO
      const EMAIL_FROM = process.env.EMAIL_FROM || "onboarding@resend.dev"

      if (RESEND_API_KEY && ADMIN_EMAIL_TO) {
        const resend = new Resend(RESEND_API_KEY)
        await resend.emails.send({
          from: EMAIL_FROM,
          to: ADMIN_EMAIL_TO,
          subject: "Nowe zapytanie ze strony – EduHustawka",
          html: `<p><strong>Imię:</strong> ${name}</p>
                 <p><strong>Email:</strong> ${email}</p>
                 ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
                 <p><strong>Wiadomość:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`,
        })
      }
    } catch (e) {
      console.error("Błąd podczas wysyłania e-mail przez Resend:", e)
    }

    // Return success state
    return {
      message: "Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.",
      success: true,
    }
  } catch (error) {
    // Handle any errors
    console.error("Form submission error:", error)
    return {
      errors: {
        _form: ["Wystąpił błąd podczas wysyłania formularza. Proszę spróbować ponownie."],
      },
      success: false,
    }
  }
}
