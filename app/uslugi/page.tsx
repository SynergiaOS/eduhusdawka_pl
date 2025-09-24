import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import AnimatedSection from "@/components/animations/animated-section"
import { Brain, Hand, BookOpen, Headphones, Users, ArrowRight, Target } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Usługi Terapeutyczne | EduHustawka",
  description: "Kompleksowe usługi terapeutyczne dla dzieci: terapia ręki, terapia pedagogiczna, Forbrain, trening słuchowy Johansena i więcej.",
  keywords: "terapia ręki, terapia pedagogiczna, Forbrain, trening słuchowy, integracja sensoryczna, Pomigacze, dzieci",
}

const services = [
  {
    id: "terapia-reki",
    title: "Terapia Ręki",
    description: "Specjalistyczna terapia poprawiająca funkcjonowanie górnych kończyn, motorykę małą i sprawność manualną.",
    icon: Hand,
    color: "bg-blue-500",
    href: "/uslugi/terapia-reki"
  },
  {
    id: "terapia-pedagogiczna",
    title: "Terapia Pedagogiczna",
    description: "Wsparcie w nauce, rozwoju umiejętności poznawczych i przygotowaniu do szkoły.",
    icon: BookOpen,
    color: "bg-green-500",
    href: "/uslugi/terapia-pedagogiczna"
  },
  {
    id: "forbrain",
    title: "Forbrain - Trening Słuchowo-Głosowy",
    description: "Innowacyjne urządzenie poprawiające percepcję własnego głosu i wspierające rozwój mowy.",
    icon: Headphones,
    color: "bg-purple-500",
    href: "/uslugi/forbrain"
  },
  {
    id: "johansen",
    title: "Indywidualna Stymulacja Słuchu Johansena",
    description: "Specjalistyczny trening słuchowy wspierający integrację sensoryczną i rozwój poznawczy.",
    icon: Brain,
    color: "bg-orange-500",
    href: "/uslugi/indywidualna-stymulacja-sluchu-johansena"
  },
  {
    id: "trening-umiejetnosci-spolecznych",
    title: "Trening Umiejętności Społecznych",
    description: "Rozwój kompetencji społecznych, komunikacyjnych i umiejętności interpersonalnych.",
    icon: Users,
    color: "bg-teal-500",
    href: "/uslugi/trening-umiejetnosci-spolecznych"
  },
  {
    id: "terapia-dla-dzieci-z-autyzmem",
    title: "Terapia dla Dzieci z Autyzmem",
    description: "Specjalistyczne wsparcie dla dzieci ze spektrum autyzmu z podejściem evidence-based.",
    icon: Brain,
    color: "bg-indigo-500",
    href: "/uslugi/terapia-dla-dzieci-z-autyzmem"
  },
  {
    id: "trening-sluchowy-johansena",
    title: "Trening Słuchowy Johansena",
    description: "Indywidualny program treningu słuchowego wspierający integrację sensoryczną.",
    icon: Headphones,
    color: "bg-pink-500",
    href: "/uslugi/trening-sluchowy-johansena"
  },
  {
    id: "wczesna-nauka-czytania",
    title: "Wczesna Nauka Czytania",
    description: "Przygotowanie do nauki czytania metodą globalną dla najmłodszych dzieci.",
    icon: BookOpen,
    color: "bg-emerald-500",
    href: "/uslugi/wczesna-nauka-czytania"
  },
  {
    id: "korp",
    title: "KORP - Diagnostyka Rozwoju",
    description: "Karty Oceny Rozwoju Psychoruchowego - kompleksowa diagnoza dzieci od 1 m.ż. do 9 r.ż.",
    icon: Target,
    color: "bg-red-500",
    href: "/uslugi/korp"
  }
]

export default function UslugiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nasze Usługi Terapeutyczne
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Oferujemy kompleksowe wsparcie terapeutyczne dla dzieci, dostosowane do indywidualnych potrzeb każdego małego pacjenta.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <Link 
                    key={service.id}
                    href={service.href}
                    className="group block"
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-1">
                      <div className="flex items-start gap-6">
                        <div className={`${service.color} p-4 rounded-lg text-white flex-shrink-0`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex items-center text-teal-600 font-medium group-hover:text-teal-700">
                            Dowiedz się więcej
                            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </AnimatedSection>



        {/* CTA Section */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Potrzebujesz Konsultacji?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Skontaktuj się z nami, aby omówić potrzeby Twojego dziecka i wybrać odpowiednią terapię.
            </p>
            <Link 
              href="/rezerwacja"
              className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Umów Konsultację
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}
