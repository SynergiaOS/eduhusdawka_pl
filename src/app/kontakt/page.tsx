import Link from "next/link";
import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { PageShell } from "../_components/page-shell";
import ContactForm from "./contact-form.client";

export const metadata: Metadata = {
  title: "Kontakt | EduHuśtawka",
  description:
    "Skontaktuj się z EduHuśtawką i umów konsultację w 24 godziny. Wspieram dzieci i rodziców w Białymstoku i online.",
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Adres",
    value: "ul. Ludwika Zamenhofa 4/U2, Białystok",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+48 531 509 008",
    href: "tel:+48531509008",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "kontakt@eduhustawka.pl",
    href: "mailto:kontakt@eduhustawka.pl",
  },
  {
    icon: Clock,
    label: "Godziny otwarcia",
    value: "Poniedziałek–Piątek: 9:00–18:00, Sobota (online): 9:00–12:00",
  },
];

export default function ContactPage() {
  return (
    <PageShell maxWidthClass="max-w-6xl" mainClassName="gap-16">
      <header className="space-y-3">
        <p className="inline-block rounded-full bg-[#fbeac2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#e5563c]">
          Kontakt
        </p>
        <h1 className="font-display text-4xl text-[#17140f] sm:text-5xl">Umów wizytę w 24 godziny</h1>
        <p className="max-w-2xl text-base text-[#5a5346] sm:text-lg">
          Wypełnij formularz lub skontaktuj się telefonicznie. Odpowiem w ciągu jednego dnia roboczego i zaproponuję
          najlepszą formę wsparcia dla Twojego dziecka.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="space-y-8 rounded-[32px] border border-[#e6dec5] bg-white/85 p-6 shadow-[0_20px_50px_rgba(205,192,166,0.35)] sm:p-8">
          <dl className="grid grid-cols-1 gap-6">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 rounded-2xl bg-[#faf6ed] p-4">
                <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-[#e5563c] shadow-[0_10px_24px_rgba(229,129,92,0.25)]">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex flex-col gap-1 text-sm text-[#433d32]">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[#837659]">{label}</dt>
                  <dd>
                    {href ? (
                      <Link href={href} className="transition hover:text-[#e5563c]">
                        {value}
                      </Link>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
          <div className="flex flex-col gap-3 rounded-[28px] border border-[#efe4c9] bg-white p-6">
            <h2 className="text-lg font-semibold text-[#17140f]">Potrzebujesz odpowiedzi szybciej?</h2>
            <p className="text-sm text-[#5a5346]">
              Napisz wiadomość na WhatsApp lub poproś o kontakt poprzez formularz.
            </p>
            <Link
              href="https://wa.me/48531509008"
              className="inline-flex items-center gap-2 rounded-full bg-[#3a7a5a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2f6247]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp: +48 531 509 008
            </Link>
          </div>
          <div
            className="aspect-video w-full overflow-hidden rounded-[28px] border border-[#efe4c9] bg-cover bg-center"
            aria-hidden
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFOYMfEp1TfYbXkxV0BE4lcSxuug02FP9UDSGmVyjeXYroCGP5oVvr9LPO6bwIF_CzMiU7UIZKloD5CmJUtbjqvUWGFZYfgiysvlGp9tq5gHkWMek21HdI2ww-CeadOBT1gjgFtW38Iat3l4zl1XkXk7KEU1PqcD0bqLpLmGFqxmiLCDvXY6XkiDqFuSgVgipxqdn_Yd5K4QgmtROC04NpK_SHr9FAuS-Tu7htF1QYMTHmciivJ-zr0najVcZZY_pa8y-Goptjb4kX')",
            }}
          />
        </section>

        <section className="rounded-[32px] border border-[#e6dec5] bg-white p-6 shadow-[0_20px_50px_rgba(205,192,166,0.35)] sm:p-8">
          <h2 className="font-display text-2xl text-[#17140f]">Napisz do mnie</h2>
          <p className="mt-2 text-sm text-[#5a5346]">
            Opisz krótko sytuację, a przygotuję dla Ciebie indywidualną propozycję współpracy.
          </p>
          <ContactForm />
        </section>
      </div>
    </PageShell>
  );
}

