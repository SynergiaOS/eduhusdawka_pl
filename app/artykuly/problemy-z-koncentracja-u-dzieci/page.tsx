import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import AnimatedSection from "@/components/animations/animated-section"
import { Brain, CheckCircle, AlertTriangle, ArrowRight, Clock, User, Target } from "lucide-react"
import Link from "next/link"
import UnifiedImage from "@/components/media/unified-image"

export const metadata: Metadata = {
  title: "Jak rozpoznać problemy z koncentracją u dzieci? | EduHustawka",
  description: "Poznaj różnicę między normalnymi zachowaniami dziecka a sygnałami wskazującymi na trudności z uwagą i koncentracją. Praktyczne porady od pedagoga specjalnego.",
  keywords: "problemy z koncentracją, ADHD, uwaga, terapia pedagogiczna, trudności w nauce, rozwój dziecka",
}

export default function ProblemowyKoncentracjaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-eduhus-secondary via-white to-eduhus-bg-light">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-eduhus-bg-light px-4 py-2 rounded-full mb-6">
                <Brain className="w-5 h-5 text-eduhus-accent" />
                <span className="text-eduhus-accent font-medium">Terapia pedagogiczna</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Jak rozpoznać <span className="text-eduhus-accent">problemy z koncentracją?</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-900 mb-8 max-w-3xl mx-auto leading-relaxed">
                Dowiedz się, jak odróżnić normalne zachowania dziecka od sygnałów wskazujących na trudności z uwagą
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-900">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  4 min czytania
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
                <UnifiedImage
                  src="/images/hero-children.png"
                  alt="Dziecko podczas nauki - problemy z koncentracją"
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover rounded-xl mb-8"
                />
                
                <p className="text-lg text-gray-900 leading-relaxed mb-6">
                  Problemy z koncentracją u dzieci to jeden z najczęstszych powodów zgłaszania się rodziców 
                  do pedagoga specjalnego. Nie każde rozproszenie czy trudność z skupieniem oznacza jednak 
                  poważny problem. Ważne jest, aby umieć odróżnić normalne zachowania rozwojowe od sygnałów 
                  wymagających interwencji.
                </p>
              </div>

              {/* Normal vs Concerning */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Normalne zachowania vs sygnały ostrzegawcze
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Normal behaviors */}
                  <div className="bg-eduhus-bg-light rounded-xl p-6">
                    <h3 className="text-xl font-bold text-eduhus-accent mb-4 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6" />
                      Normalne zachowania
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Krótkie okresy nieuwagi (5-10 min)",
                        "Rozproszenie w hałaśliwym otoczeniu",
                        "Trudności po długim dniu",
                        "Większa uwaga przy ulubionych zajęciach",
                        "Czasowe zapominanie instrukcji"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-eduhus-accent">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Warning signs */}
                  <div className="bg-eduhus-bg-light rounded-xl p-6">
                    <h3 className="text-xl font-bold text-eduhus-accent mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-6 h-6" />
                      Sygnały ostrzegawcze
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Stałe trudności z koncentracją (>6 miesięcy)",
                        "Niemożność dokończenia zadań",
                        "Częste gubienie rzeczy",
                        "Problemy w różnych środowiskach",
                        "Wpływ na wyniki w nauce"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-eduhus-accent">
                          <AlertTriangle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Age-specific expectations */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Oczekiwania według wieku
                </h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-eduhus-accent pl-6 py-4 bg-eduhus-bg-light rounded-r-lg">
                    <h3 className="text-xl font-semibold text-eduhus-accent mb-2">3-4 lata</h3>
                    <p className="text-gray-900">
                      Koncentracja: 3-5 minut na zadaniu. Normalne jest częste przechodzenie między aktywnościami.
                    </p>
                  </div>

                  <div className="border-l-4 border-eduhus-accent-500 pl-6 py-4 bg-eduhus-accent-50 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-eduhus-accent mb-2">5-6 lat</h3>
                    <p className="text-gray-900">
                      Koncentracja: 10-15 minut. Dziecko powinno móc słuchać prostych instrukcji i je wykonywać.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6 py-4 bg-eduhus-bg-light rounded-r-lg">
                    <h3 className="text-xl font-semibold text-eduhus-secondary mb-2">7+ lat</h3>
                    <p className="text-gray-900">
                      Koncentracja: 20-30 minut. Umiejętność planowania i organizacji prostych zadań.
                    </p>
                  </div>
                </div>
              </div>

              {/* How therapy helps */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <Target className="w-8 h-8 text-eduhus-accent" />
                  Jak pomaga terapia pedagogiczna?
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Trening uwagi i koncentracji",
                    "Nauka technik organizacji czasu",
                    "Ćwiczenia pamięci roboczej",
                    "Strategie radzenia sobie z rozproszeniem",
                    "Budowanie motywacji do nauki",
                    "Wsparcie w wykonywaniu zadań domowych"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-eduhus-accent-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-eduhus-accent-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-900">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips for parents */}
              <div className="mb-12 bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Praktyczne wskazówki dla rodziców
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-eduhus-bg-light0 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">1</div>
                    <p className="text-gray-900"><strong>Stwórz spokojne miejsce do nauki</strong> - bez rozpraszających elementów</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-eduhus-bg-light0 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">2</div>
                    <p className="text-gray-900"><strong>Podziel zadania na mniejsze części</strong> - łatwiej je ukończyć</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-eduhus-bg-light0 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">3</div>
                    <p className="text-gray-900"><strong>Używaj timerów</strong> - pomogą w organizacji czasu</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-eduhus-bg-light0 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">4</div>
                    <p className="text-gray-900"><strong>Chwal za wysiłek</strong> - nie tylko za wyniki</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-eduhus-bg-light rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-eduhus-accent mb-4">
                  Martwisz się o koncentrację swojego dziecka?
                </h3>
                <p className="text-eduhus-accent mb-6 max-w-2xl mx-auto">
                  Umów się na bezpłatną konsultację. Wspólnie ocenimy sytuację i zaplanujemy 
                  odpowiednie wsparcie dla Twojego dziecka.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+48531509008">
                    <button className="bg-eduhus-accent hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                      Zadzwoń: 531 509 008
                    </button>
                  </a>
                  <Link href="/uslugi/terapia-pedagogiczna">
                    <button className="bg-white text-eduhus-accent border-2 border-eduhus-accent hover:bg-eduhus-bg-light px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                      Dowiedz się więcej o terapii
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
