import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import AnimatedSection from "@/components/animations/animated-section"
import { Headphones, Volume2, Brain, CheckCircle, Star, Target, Music } from "lucide-react"
import UnifiedImage from "@/components/media/unified-image"

export const metadata: Metadata = {
  title: "Trening Słuchowy Johansena - Terapia Słuchowa | EduHustawka",
  description: "Indywidualna Stymulacja Słuchu Johansena w Białymstoku. Nowoczesna metoda terapii słuchowej wspierająca rozwój mowy i koncentracji.",
  keywords: "trening słuchowy Johansena, IAS, terapia słuchowa, rozwój mowy, koncentracja, Białystok, Pomigacze",
}

export default function TreningSluchowyJohansenaPage() {
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
                  <Headphones className="h-12 w-12 text-indigo-600" />
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                      Trening Słuchowy Johansena
                    </h1>
                    <p className="text-xl text-indigo-600">Indywidualna Stymulacja Słuchu (IAS)</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nowoczesna metoda terapii słuchowej opracowana przez dr. Kjeld Johansena,
                  wspierająca rozwój mowy, koncentracji i przetwarzania słuchowego.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                    <span className="text-indigo-700">Indywidualne podejście</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-purple-700">Skuteczna metoda</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <UnifiedImage
                  src="/johansen-sound-training.png"
                  alt="Trening Słuchowy Johansena - terapia słuchowa"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Czym jest trening */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={200}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Czym jest Trening Słuchowy Johansena?
            </h2>
            <div className="bg-indigo-50 p-8 rounded-2xl mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Trening Słuchowy Johansena (IAS) to metoda terapii słuchowej opracowana przez dr. Kjeld Johansena.
                Polega na słuchaniu specjalnie zmodyfikowanej muzyki przez słuchawki, indywidualnie dostosowanej
                do potrzeb każdego dziecka na podstawie przeprowadzonej diagnozy.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Jak przebiega */}
        <AnimatedSection className="py-16 px-4" delay={300}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Jak przebiega trening?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Diagnoza</h3>
                <p className="text-gray-600">
                  Kompleksowa diagnoza słuchowa lub uproszczona na podstawie obserwacji i wywiadu
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Program</h3>
                <p className="text-gray-600">
                  Przygotowanie indywidualnego programu muzycznego przez Instytut Johansena
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Volume2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Trening</h3>
                <p className="text-gray-600">
                  Słuchanie muzyki w domu 10-15 minut dziennie z kontrolą co 8-10 tygodni
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Dla kogo */}
        <AnimatedSection className="py-16 px-4 bg-gray-50" delay={400}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Dla kogo jest trening?
            </h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-700 mb-6 flex items-center">
                <Target className="w-6 h-6 mr-2" />
                Trudności, z którymi pomaga trening:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Zaburzenia przetwarzania słuchowego</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Opóźnienia rozwoju mowy</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Trudności w nauce czytania</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Problemy z koncentracją</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Spektrum autyzmu</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Nadwrażliwość słuchowa</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Cennik */}
        <AnimatedSection className="py-16 px-4 bg-eduhus-bg-white" delay={500}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold eduhus-text-dark mb-12">Cennik</h2>

            <div className="bg-eduhus-bg-light p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 eduhus-text-dark">Trening Słuchowy Johansena</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="eduhus-text-main">Diagnoza pełna</span>
                  <span className="text-2xl font-bold text-eduhus-accent">350 zł</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="eduhus-text-main">Diagnoza uproszczona</span>
                  <span className="text-2xl font-bold text-eduhus-accent">350 zł</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="eduhus-text-main">Program indywidualny</span>
                  <span className="text-2xl font-bold text-eduhus-accent">280–300 zł</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="eduhus-text-main">Diagnoza kontrolna pełna</span>
                  <span className="text-2xl font-bold text-eduhus-accent">350 zł</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="eduhus-text-main">Diagnoza kontrolna uproszczona</span>
                  <span className="text-2xl font-bold text-eduhus-accent">200 zł</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm eduhus-text-light mb-4">
                  💡 Terapia prowadzona w warunkach domowych
                </p>
                <a href="tel:+48531509008" className="inline-block">
                  <button className="bg-eduhus-accent hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
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
