import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Hand, CheckCircle, AlertTriangle, ArrowRight, Clock, User } from "lucide-react"
import Link from "next/link"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Kiedy dziecko potrzebuje terapii ręki? | EduHustawka",
  description: "Poznaj sygnały wskazujące na potrzebę terapii ręki u dziecka. Praktyczne porady od pedagoga specjalnego z 15-letnim doświadczeniem.",
  keywords: "terapia ręki, motoryka mała, grafomotoryka, problemy z pisaniem, rozwój dziecka, sygnały ostrzegawcze",
}

export default function KiedyDzieckoTerapiaRekiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
                <Hand className="w-5 h-5 text-purple-600" />
                <span className="text-purple-700 font-medium">Terapia ręki</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Kiedy dziecko potrzebuje <span className="text-purple-600">terapii ręki?</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Poznaj kluczowe sygnały, które mogą wskazywać na potrzebę wsparcia w rozwoju motoryki małej u Twojego dziecka
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  5 min czytania
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Joanna Świrydowicz
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection className="py-8 px-4" delay={200}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              
              {/* Introduction */}
              <div className="mb-12">
                <OptimizedImage
                  src="/images/hand-therapy.png"
                  alt="Dziecko podczas ćwiczeń motoryki małej"
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover rounded-xl mb-8"
                />
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Rozwój motoryki małej to kluczowy element przygotowania dziecka do nauki pisania, rysowania 
                  i wykonywania codziennych czynności. Jako pedagog specjalny z 15-letnim doświadczeniem, 
                  często spotykam się z pytaniami rodziców o to, kiedy ich dziecko może potrzebować wsparcia 
                  w tym obszarze.
                </p>
              </div>

              {/* Warning Signs */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-orange-500" />
                  Sygnały ostrzegawcze
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Trudności z trzymaniem kredki lub ołówka",
                    "Słaby nacisk podczas rysowania lub pisania",
                    "Problemy z zapinaniem guzików, zamków",
                    "Unikanie zadań wymagających precyzji",
                    "Szybkie męczenie się podczas pisania",
                    "Nieczytelne pismo mimo ćwiczeń",
                    "Trudności z wycinaniem nożyczkami",
                    "Problemy z manipulowaniem drobnymi przedmiotami"
                  ].map((symptom, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Age Guidelines */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Rozwój motoryki w różnym wieku
                </h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6 py-4">
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">3-4 lata</h3>
                    <p className="text-gray-700">
                      Dziecko powinno umieć trzymać kredkę, rysować proste linie, budować wieże z klocków
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6 py-4">
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">5-6 lat</h3>
                    <p className="text-gray-700">
                      Prawidłowy chwyt kredki, rysowanie kształtów, wycinanie nożyczkami po linii
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6 py-4">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">7+ lat</h3>
                    <p className="text-gray-700">
                      Płynne pisanie, precyzyjne ruchy, wykonywanie złożonych zadań manualnych
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Korzyści z terapii ręki
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Poprawa chwytu i kontroli narzędzi",
                    "Zwiększenie siły i wytrzymałości ręki",
                    "Lepsze wyniki w nauce pisania",
                    "Większa pewność siebie dziecka",
                    "Przygotowanie do zadań szkolnych",
                    "Rozwój koordynacji wzrokowo-ruchowej"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-purple-50 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                  Masz wątpliwości co do rozwoju motoryki Twojego dziecka?
                </h3>
                <p className="text-purple-600 mb-6 max-w-2xl mx-auto">
                  Umów się na bezpłatną konsultację. Wspólnie ocenimy potrzeby Twojego dziecka 
                  i zaplanujemy odpowiednie wsparcie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+48531509008">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                      Zadzwoń: 531 509 008
                    </button>
                  </a>
                  <Link href="/uslugi/terapia-reki">
                    <button className="bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                      Dowiedz się więcej o terapii ręki
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}
