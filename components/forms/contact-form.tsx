"use client"

import type React from "react"

import { useState, useCallback, useMemo, memo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import AnimatedSection from "@/components/animations/animated-section"
import { useAnalytics } from "@/hooks/use-analytics"

const ContactForm = memo(() => {
  const { trackEvent } = useAnalytics()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    childAge: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Memoized form reset data
  const initialFormData = useMemo(() => ({
    name: "",
    email: "",
    phone: "",
    service: "",
    childAge: "",
    message: "",
  }), [])

  // Optimized submit handler with useCallback
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Track form submission
    trackEvent("contact_form_submit", "Contact", "Contact form submitted")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form
    setFormData(initialFormData)
    setIsSubmitting(false)

    alert("Dziękuję za wiadomość! Skontaktuję się z Tobą w ciągu 24 godzin.")
  }, [trackEvent, initialFormData])

  // Optimized change handler with useCallback
  const handleChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  // Memoized services data
  const services = useMemo(() => [
    { value: "terapia-pedagogiczna", label: "Terapia pedagogiczna" },
    { value: "terapia-reki", label: "Terapia ręki" },
    { value: "wsparcie-autyzm", label: "Wsparcie dzieci ze spektrum autyzmu" },
    { value: "trening-sluchowy", label: "Trening słuchowy Johansena" },
    { value: "integracja-sensoryczna", label: "Terapia integracji sensorycznej" },
    { value: "trening-spoleczny", label: "Trening Umiejętności Społecznych" },
    { value: "wsparcie-emocjonalne", label: "Wsparcie emocjonalne" },
    { value: "wczesne-wspomaganie", label: "Wczesne wspomaganie rozwoju" },
    { value: "konsultacje", label: "Konsultacje dla rodziców" }
  ], [])

  // Memoized contact info
  const contactInfo = useMemo(() => [
    {
      icon: Phone,
      title: "Telefon",
      content: "531 509 008",
      subtitle: "Pon-Pt: 8:00-16:00"
    },
    {
      icon: Mail,
      title: "Email",
      content: "kontakt@eduhustawka.pl",
      subtitle: "Odpowiem w ciągu 24h"
    },
    {
      icon: MapPin,
      title: "Adres",
      content: "Polna 17",
      subtitle: "Pomigacze"
    },
    {
      icon: Clock,
      title: "Godziny pracy",
      content: "Pon-Pt: 8:00-16:00",
      subtitle: "Sob: na umówienie"
    }
  ], [])

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <AnimatedSection animation="slide" direction="left">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Informacje kontaktowe</h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                    <p className={`text-gray-600 ${info.title === 'Email' ? 'break-all' : ''}`}>
                      {info.content}
                    </p>
                    {info.subtitle && (
                      <p className="text-sm text-gray-500">{info.subtitle}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 text-teal-50 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-2">Szybki kontakt</h4>
              <p className="text-teal-700 text-sm mb-4">Potrzebujesz pilnej konsultacji? Zadzwoń bezpośrednio!</p>
              <Button
                className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                onClick={() => {
                  trackEvent("call_click", "CTA", "contact_form");
                  window.location.href = "tel:+48531509008";
                }}
              >
                <Phone className="mr-2 h-4 w-4" />
                Zadzwoń teraz
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Form */}
        <AnimatedSection animation="slide" direction="right" delay={200}>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Napisz do mnie</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Imię i nazwisko *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="service">Interesująca usługa</Label>
                  <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Wybierz usługę" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="childAge">Wiek dziecka</Label>
                  <Input
                    id="childAge"
                    type="text"
                    value={formData.childAge}
                    onChange={(e) => handleChange("childAge", e.target.value)}
                    placeholder="np. 5 lat"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Wiadomość *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                  rows={5}
                  placeholder="Opisz potrzeby swojego dziecka i pytania, które chciałbyś/chciałabyś zadać..."
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Wysyłanie...
                  </div>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Wyślij wiadomość
                  </>
                )}
              </Button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
})

ContactForm.displayName = "ContactForm"

export default ContactForm
