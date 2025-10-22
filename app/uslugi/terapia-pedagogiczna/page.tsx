import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import AnimatedSection from "@/components/animations/animated-section"
import { BookOpen, Target, Heart, Users, CheckCircle, Star, GraduationCap, Brain, Lightbulb } from "lucide-react"
import UnifiedImage from "@/components/media/unified-image"

export const metadata: Metadata = {
  title: "Terapia Pedagogiczna | EduHustawka",
  description: "Skuteczne wsparcie dla dzieci z trudnościami w nauce. Terapia pedagogiczna w Pomigaczach. Indywidualne podejście, nowoczesne metody.",
  keywords: "terapia pedagogiczna, trudności w nauce, czytanie, pisanie, liczenie, dysleksja, ADHD, koncentracja, 120 zł, Pomigacze",
}

export default function TerapiaPedagogicznaPage() {
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
                  <BookOpen className="h-12 w-12 text-teal-600" />
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                      Terapia Pedagogiczna
                    </h1>
                    <p className="text-xl text-teal-600">Skuteczne wsparcie dla dzieci z trudnościami w nauce</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Specjalistyczne wsparcie dla dzieci, które mają trudności w nauce i rozwoju.
                  Pomaga przezwyciężać trudności w czytaniu, pisaniu, liczeniu oraz wspiera rozwój emocjonalny i społeczny.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-teal-700">Indywidualne podejście</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-700">Nowoczesne metody</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <UnifiedImage
                  src="/child-learning-support.jpg"
                  alt="Dziecko podczas terapii pedagogicznej"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Czym jest terapia */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={200}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Czym jest terapia pedagogiczna?
            </h2>
            <div className="bg-teal-50 p-8 rounded-2xl mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Terapia pedagogiczna to specjalistyczne wsparcie dla dzieci, które mają trudności w nauce i rozwoju.
                Pomaga przezwyciężać trudności w czytaniu, pisaniu, liczeniu oraz innych czynnościach szkolnych,
                a także wspiera rozwój emocjonalny i społeczny.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Jak przebiega terapia */}
        <AnimatedSection className="py-16 px-4" delay={300}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Jak przebiega terapia pedagogiczna?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Diagnoza</h3>
                <p className="text-gray-600">
                  Szczegółowa ocena poziomu rozwoju i identyfikacja obszarów wymagających wsparcia
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Plan terapii</h3>
                <p className="text-gray-600">
                  Opracowanie indywidualnego programu terapeutycznego dostosowanego do potrzeb dziecka
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Realizacja</h3>
                <p className="text-gray-600">
                  Systematyczna praca nad rozwojem umiejętności i eliminowaniem trudności
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Dla kogo */}
        <AnimatedSection className="py-16 px-4 bg-gray-50" delay={400}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Dla kogo jest terapia pedagogiczna?
            </h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-teal-700 mb-6 flex items-center">
                <Target className="w-6 h-6 mr-2" />
                Trudności, z którymi pomaga terapia:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Trudności w nauce (czytanie, pisanie, liczenie)</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Problemy w funkcjach wzrokowych i słuchowych</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Opóźniony rozwój ruchowy i trudności z lateralizacją</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Zaburzenia mowy</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Trudności w koncentracji i pamięci</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Zaburzenia emocjonalne i trudności społeczne</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Trudności matematyczne i logiczne myślenie</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Problemy wychowawcze i obniżona motywacja</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Inteligencja przeciętna lub niższa niż przeciętna</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Cele terapii */}
        <AnimatedSection className="py-16 px-4 bg-teal-50" delay={500}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Cele terapii pedagogicznej
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Target className="w-8 h-8 text-teal-600" />,
                  title: "Wspieranie rozwoju",
                  description: "Rozwój funkcji poznawczych i motorycznych"
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-teal-600" />,
                  title: "Wyrównywanie braków",
                  description: "Uzupełnianie wiadomości i umiejętności"
                },
                {
                  icon: <Heart className="w-8 h-8 text-teal-600" />,
                  title: "Eliminowanie niepowodzeń",
                  description: "Redukcja niepowodzeń szkolnych i ich konsekwencji"
                },
                {
                  icon: <Users className="w-8 h-8 text-teal-600" />,
                  title: "Budowanie pewności siebie",
                  description: "Wzmacnianie motywacji i rozwijanie talentów"
                }
              ].map((goal, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    {goal.icon}
                    <h3 className="text-xl font-semibold text-gray-900">{goal.title}</h3>
                  </div>
                  <p className="text-gray-600">{goal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Cennik */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={600}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Cennik</h2>

            <div className="bg-teal-50 p-8 rounded-2xl max-w-md mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-teal-700">Terapia Pedagogiczna</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-teal-200">
                  <span className="text-gray-700">W gabinecie (50 min)</span>
                  <span className="text-2xl font-bold text-teal-600">120 zł</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Z dojazdem do klienta (50 min)</span>
                  <span className="text-2xl font-bold text-teal-600">150 zł</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-teal-600 mb-4">
                  💡 Indywidualne podejście dostosowane do potrzeb dziecka
                </p>
                <a href="tel:+48531509008" className="inline-block">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
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