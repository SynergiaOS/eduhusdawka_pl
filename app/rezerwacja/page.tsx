"use client"

import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Calendar, Phone, Mail, MessageSquare, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

// Note: metadata export removed due to "use client" directive
// Metadata should be handled by parent layout or moved to separate metadata file

export default function RezerwacjaPage() {
  const services = [
    {
      name: "Trening Umiejętności Społecznych (TUS)",
      price: "80 zł",
      duration: "50 min",
      description: "Zajęcia grupowe dla dzieci z trudnościami społecznymi"
    },
    {
      name: "Terapia Pedagogiczna",
      price: "120 zł / 150 zł",
      duration: "50 min",
      description: "Wsparcie w nauce (gabinet/dojazd)"
    },
    {
      name: "Terapia Ręki",
      price: "120 zł / 150 zł",
      duration: "50 min",
      description: "Rozwój motoryki małej (gabinet/dojazd)"
    },
    {
      name: "Diagnoza KORP",
      price: "350 zł",
      duration: "120 min",
      description: "Kompleksowa ocena rozwoju psychomotorycznego"
    },
    {
      name: "IAS Johansena - Diagnoza",
      price: "350 zł",
      duration: "120 min",
      description: "Diagnoza przed treningiem słuchowym"
    },
    {
      name: "Neuroflow - Diagnoza",
      price: "350 zł",
      duration: "60 min",
      description: "Diagnoza przed treningiem Neuroflow"
    },
    {
      name: "Czytanie z Forbrain",
      price: "150 zł / 180 zł",
      duration: "50 min",
      description: "Nauka czytania z Forbrain (gabinet/dojazd)"
    }
  ]

  const handlePhoneCall = () => {
    window.location.href = "tel:+48531509008"
  }

  const handleWhatsApp = () => {
    const message = "Dzień dobry! Chciałbym umówić wizytę w EduHustawka. Proszę o kontakt w sprawie dostępnych terminów."
    window.open(`https://wa.me/48531509008?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleEmail = () => {
    const subject = "Prośba o umówienie wizyty - EduHustawka"
    const body = `Dzień dobry!

Chciałbym umówić wizytę w EduHustawka.

Dane kontaktowe:
- Imię i nazwisko: 
- Telefon: 
- Email: 

Preferowana usługa:
- 

Preferowany termin:
- Data: 
- Godzina: 

Dodatkowe informacje:


Z poważaniem`

    window.location.href = `mailto:rezerwacja@eduhustawka.pl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="h-12 w-12 text-teal-600" />
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Rezerwacja wizyty
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Umów się na konsultację lub terapię. Skontaktuj się ze mną, aby wybrać najlepszy termin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-teal-600" />
                <span className="text-teal-700">Indywidualne podejście</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700">Elastyczne terminy</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Dostępne usługi */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={200}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Dostępne usługi
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-teal-600">{service.price}</span>
                    <span className="text-gray-500">{service.duration}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Sposoby kontaktu */}
        <AnimatedSection className="py-16 px-4" delay={300}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Jak umówić wizytę?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Zadzwoń</h3>
                <p className="text-gray-600 mb-6">
                  Najszybszy sposób umówienia wizyty. Omówimy dostępne terminy i dobierzemy odpowiednią usługę.
                </p>
                <Button 
                  onClick={handlePhoneCall}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  531 509 008
                </Button>
                <p className="text-sm text-gray-500 mt-2">Pon-Pt: 8:00-16:00</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">WhatsApp</h3>
                <p className="text-gray-600 mb-6">
                  Napisz wiadomość na WhatsApp. Odpowiem tak szybko, jak to możliwe.
                </p>
                <Button 
                  onClick={handleWhatsApp}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Napisz na WhatsApp
                </Button>
                <p className="text-sm text-gray-500 mt-2">Szybka odpowiedź</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Email</h3>
                <p className="text-gray-600 mb-6">
                  Wyślij email z prośbą o umówienie wizyty. Szablon zostanie przygotowany automatycznie.
                </p>
                <Button 
                  onClick={handleEmail}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Wyślij email
                </Button>
                <p className="text-sm text-gray-500 mt-2">Odpowiedź w 24h</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Informacje dodatkowe */}
        <AnimatedSection className="py-16 px-4 bg-gray-50" delay={400}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Ważne informacje
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-700 mb-4">Lokalizacja</h3>
                <p className="text-gray-600 mb-2">
                  <strong>Adres:</strong> ul. Polna 17, 18-106 Pomigacze
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Dojazd:</strong> Możliwość terapii w domu klienta
                </p>
                <p className="text-gray-600">
                  <strong>Parking:</strong> Dostępny przy gabinecie
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Płatność</h3>
                <p className="text-gray-600 mb-2">
                  <strong>Gotówka:</strong> Płatność po wizycie
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Przelew:</strong> Możliwość płatności przelewem
                </p>
                <p className="text-gray-600">
                  <strong>Anulowanie:</strong> Proszę o informację 24h wcześniej
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      
      <Footer />
    </div>
  )
}
