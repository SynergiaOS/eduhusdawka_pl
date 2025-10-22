import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import AnimatedSection from "@/components/animations/animated-section"
import { Hand, Paintbrush, CheckCircle, Star, Target, Users, Puzzle } from "lucide-react"
import UnifiedImage from "@/components/media/unified-image"

export const metadata: Metadata = {
  title: "Terapia Ręki - 120 zł gabinet, 150 zł dojazd | EduHustawka",
  description: "Profesjonalna terapia ręki w Pomigaczach. 120 zł (gabinet), 150 zł (dojazd). Rozwój motoryki małej, grafomotoryki i umiejętności pisania u dzieci.",
  keywords: "terapia ręki, motoryka mała, grafomotoryka, pisanie, Pomigacze, 120 zł",
}

export default function TerapiaRekiPage() {
  return (
    <div className="min-h-screen bg-eduhus-bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Hand className="h-12 w-12 text-purple-600" />
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                      Terapia Ręki
                    </h1>
                    <p className="text-xl text-purple-600">Rozwój motoryki małej i umiejętności grafomotorycznych</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Specjalistyczna terapia wspierająca rozwój motoryki małej, koordynacji wzrokowo-ruchowej
                  i umiejętności grafomotorycznych u dzieci.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-purple-700">Indywidualne podejście</span>
                  </div>
                  <div className="flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-pink-600" />
                    <span className="text-pink-700">Nowoczesne metody</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <UnifiedImage
                  src="/placeholder.jpg"
                  alt="Dziecko podczas terapii ręki - ćwiczenia motoryki małej"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Czym jest terapia ręki */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={200}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Czym jest terapia ręki?
            </h2>
            <div className="bg-purple-50 p-8 rounded-2xl mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Terapia ręki to specjalistyczne wsparcie dla dzieci z trudnościami w zakresie motoryki małej.
                Pomaga rozwijać sprawność rąk, koordynację wzrokowo-ruchową oraz umiejętności grafomotoryczne
                niezbędne do pisania, rysowania i codziennych czynności.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Jak przebiega terapia */}
        <AnimatedSection className="py-16 px-4" delay={300}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Jak przebiega terapia ręki?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Diagnoza</h3>
                <p className="text-gray-600">
                  Ocena poziomu rozwoju motoryki małej i identyfikacja obszarów wymagających wsparcia
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Puzzle className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Ćwiczenia</h3>
                <p className="text-gray-600">
                  Indywidualnie dobrane ćwiczenia wzmacniające mięśnie rąk i poprawiające koordynację
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Paintbrush className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Praktyka</h3>
                <p className="text-gray-600">
                  Zastosowanie nabytych umiejętności w praktycznych zadaniach pisania i rysowania
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Dla kogo */}
        <AnimatedSection className="py-16 px-4 bg-gray-50" delay={400}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Dla kogo jest terapia ręki?
            </h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-700 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Rodzicu, jeśli Twoje dziecko:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>niechętnie pisze, rysuje, lepi z plasteliny</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>ma trudności z ubieraniem się, zapinaniem guzików</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>zaciska dłonie zbyt mocno na przedmiotach</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>unika dotykania nowych faktur i powierzchni</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>ma trudności z używaniem nożyczek</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>słabo trzyma kredkę lub długopis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Cennik */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={500}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Cennik</h2>

            <div className="bg-purple-50 p-8 rounded-2xl max-w-md mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-purple-700">Terapia Ręki</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-purple-200">
                  <span className="text-gray-700">W gabinecie (50 min)</span>
                  <span className="text-2xl font-bold text-purple-600">120 zł</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Z dojazdem do klienta (50 min)</span>
                  <span className="text-2xl font-bold text-purple-600">150 zł</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-purple-600 mb-4">
                  💡 Możliwość pracy w środowisku domowym dziecka
                </p>
                <a href="tel:+48531509008" className="inline-block">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    📞 Zadzwoń: 531 509 008
                  </button>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}
