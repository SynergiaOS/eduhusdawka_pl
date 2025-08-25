import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { BookOpen, Target, Heart, Users, CheckCircle } from "lucide-react"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Terapia Pedagogiczna - 120 zł gabinet, 150 zł dojazd | EduHustawka",
  description: "Skuteczne wsparcie dla dzieci z trudnościami w nauce. Terapia pedagogiczna 120 zł (gabinet), 150 zł (dojazd). Indywidualne podejście, nowoczesne metody.",
  keywords: "terapia pedagogiczna, trudności w nauce, czytanie, pisanie, liczenie, dysleksja, ADHD, koncentracja, 120 zł, Pomigacze",
}

export default function TerapiaPedagogicznaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Terapia <span className="text-teal-600">Pedagogiczna</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Skuteczne wsparcie dla dzieci z trudnościami w nauce i rozwoju
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
                <OptimizedImage
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
            <p className="text-lg text-gray-600 leading-relaxed">
              Terapia pedagogiczna to specjalistyczne wsparcie dla dzieci, które mają trudności w nauce i rozwoju. 
              Pomaga przezwyciężać trudności w czytaniu, pisaniu, liczeniu oraz innych czynnościach szkolnych, 
              a także wspiera rozwój emocjonalny i społeczny.
            </p>
          </div>
        </AnimatedSection>

        {/* Dla kogo */}
        <AnimatedSection className="py-16 px-4" delay={300}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Dla kogo jest terapia pedagogiczna?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Trudności w nauce (czytanie, pisanie, liczenie)",
                "Inteligencja przeciętna lub niższa niż przeciętna", 
                "Problemy w funkcjach wzrokowych i słuchowych",
                "Opóźniony rozwój ruchowy i trudności z lateralizacją",
                "Zaburzenia mowy",
                "Trudności w koncentracji i pamięci",
                "Zaburzenia emocjonalne i trudności społeczne",
                "Trudności matematyczne i logiczne myślenie",
                "Problemy wychowawcze i obniżona motywacja"
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Cele terapii */}
        <AnimatedSection className="py-16 px-4 bg-teal-50" delay={400}>
          <div className="max-w-4xl mx-auto">
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
      </main>
      
      <Footer />
    </div>
  )
}