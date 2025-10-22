import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import AnimatedSection from "@/components/animations/animated-section"
import { Headphones, Target, CheckCircle, Star, Brain, Volume2, Zap } from "lucide-react"
import UnifiedImage from "@/components/media/unified-image"

export const metadata: Metadata = {
  title: "Interaktywna Terapia Przetwarzania Słuchowego | EduHustawka",
  description: "Interaktywna terapia przetwarzania słuchowego z programem mTalent. Certyfikowany wyrób medyczny wspierający percepcję słuchową, uwagę i pamięć u dzieci.",
  keywords: "mTalent, terapia przetwarzania słuchowego, percepcja słuchowa, zaburzenia słuchu, ćwiczenia interaktywne, logopedia",
}

export default function TerapiaPrztwarzaniaSluchowegoPage() {
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
                  <Headphones className="h-12 w-12 text-teal-600" />
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                      Interaktywna Terapia Przetwarzania Słuchowego
                    </h1>
                    <p className="text-xl text-teal-600">Program mTalent - certyfikowany wyrób medyczny</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Podczas zajęć wykorzystuję profesjonalny program terapeutyczny mTalent Zaburzenia przetwarzania słuchowego, 
                  będący certyfikowanym wyrobem medycznym. To nowoczesny zestaw interaktywnych ćwiczeń opracowany przez 
                  specjalistów z zakresu pedagogiki, logopedii i neuropsychologii.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-teal-700">Certyfikowany wyrób medyczny</span>
                  </div>
                  <div className="flex items-center gap-2 bg-cyan-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    <span className="text-cyan-700">Profesjonalny program</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <UnifiedImage
                  src="/placeholder.jpg"
                  alt="mTalent - interaktywna terapia przetwarzania słuchowego"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Czym jest program */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={200}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Czym jest program mTalent?
            </h2>
            <div className="bg-teal-50 p-8 rounded-2xl mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Program mTalent to nowoczesny system interaktywnych ćwiczeń terapeutycznych wspierających rozwój wyższych 
                funkcji słuchowych, uwagi i pamięci opartej na analizatorze słuchowym. Zawiera ponad 700 interaktywnych 
                ekranów oraz 150 kart pracy, które w atrakcyjny i angażujący sposób wspomagają dziecko w procesie terapii.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ćwiczenia pomagają usprawniać percepcję i przetwarzanie bodźców słuchowych, co przekłada się na lepsze 
                rozumienie mowy, konkurowanie z hałasem i generalnie lepsze funkcjonowanie słuchowe.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Cechy mTalent */}
        <AnimatedSection className="py-16 px-4" delay={300}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Cechy programu mTalent
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-600">
                <h3 className="text-lg font-semibold text-teal-700 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  700+ interaktywnych ekranów
                </h3>
                <p className="text-gray-700">
                  Bogata biblioteka ćwiczeń dostosowanych do różnych poziomów trudności, z których każde wspiera 
                  inny aspekt przetwarzania słuchowego
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-600">
                <h3 className="text-lg font-semibold text-cyan-700 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  150 kart pracy
                </h3>
                <p className="text-gray-700">
                  Dodatkowy materiał pracy wspierający uczenie się i utrwalanie umiejętności zarówno w terapii 
                  jak i w domu
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-600">
                <h3 className="text-lg font-semibold text-teal-700 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Angażująca forma zabawy
                </h3>
                <p className="text-gray-700">
                  Gry i ćwiczenia są prezentowane w atrakcyjnej, motywującej formie, co sprzyja zaangażowaniu 
                  dziecka w proces terapii
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-600">
                <h3 className="text-lg font-semibold text-cyan-700 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Opracowany przez specjalistów
                </h3>
                <p className="text-gray-700">
                  Program stworzony przez profesjonalistów z zakresu pedagogiki, logopedii i neuropsychologii, 
                  gwarantujący wysoką jakość terapii
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Dla kogo */}
        <AnimatedSection className="py-16 px-4 bg-gray-50" delay={400}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Dla kogo jest ta terapia?
            </h2>
            
            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-600">
                <h3 className="text-xl font-semibold text-teal-700 mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2" />
                  Wskazania do terapii
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Zaburzenia przetwarzania słuchowego (Auditory Processing Disorder)</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Trudności w rozumieniu mowy, szczególnie w hałaśliwym środowisku</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Opóźniony rozwój mowy i zaburzenia komunikacyjne</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Problemy z percepcją i dyskryminacją dźwięków</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Trudności w lokalizacji źródła dźwięku</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">ADHD i problemy z koncentracją (związane z percepcją słuchową)</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Zaburzenia memorii słuchowej</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Problemy nauki czytania (dysleksja)</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Autyzm i zaburzenia ze spektrum</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Jak przebiega */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={500}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Jak przebiega sesja terapeutyczna?
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Diagnoza i ocena</h3>
                  <p className="text-gray-600">Wstępna ocena umiejętności słuchowych dziecka i identyfikacja obszarów wymagających wsparcia</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Dostosowanie programu</h3>
                  <p className="text-gray-600">Wybranie odpowiednich ćwiczeń z programu mTalent dostosowanych do poziomu i potrzeb dziecka</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ćwiczenia interaktywne</h3>
                  <p className="text-gray-600">Wykonywanie ćwiczeń z programu w angażującej formie zabawy i gier</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Monitoring postępów</h3>
                  <p className="text-gray-600">Obserwacja postępów dziecka i dostosowanie ćwiczeń do rosnących umiejętności</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Karty pracy i zadania domowe</h3>
                  <p className="text-gray-600">Wykorzystanie kart pracy oraz rekomendacje ćwiczeń do utrwalania umiejętności w domu</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Efekty */}
        <AnimatedSection className="py-16 px-4 bg-teal-50" delay={600}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Efekty terapii
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-teal-600">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Volume2 className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Poprawa percepcji słuchowej</h3>
                <p className="text-gray-600">
                  Dziecko lepiej odbiera i analizuje bodźce słuchowe
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-cyan-600">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lepsza pamięć słuchowa</h3>
                <p className="text-gray-600">
                  Zwiększenie zdolności do zapamiętywania informacji słuchowych
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-purple-600">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Poprawa uwagi i koncentracji</h3>
                <p className="text-gray-600">
                  Lepsze skupianie się na zadaniach wymagających słuchu
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-green-600">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Poprawa rozumienia mowy</h3>
                <p className="text-gray-600">
                  Lepsze rozumienie słów i instrukcji, szczególnie w hałasie
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-pink-600">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Poprawa nauki czytania</h3>
                <p className="text-gray-600">
                  Lepsza dyskryminacja dźwięków wspiera naukę czytania
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-orange-600">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Wsparcie rozwoju mowy</h3>
                <p className="text-gray-600">
                  Lepsza percepcja słuchowa wspomaga naturalny rozwój mowy
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Cennik */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={700}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Cennik</h2>

            <div className="bg-teal-50 p-8 rounded-2xl max-w-md mx-auto shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-teal-700">Sesja terapeutyczna</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-teal-200">
                  <span className="text-gray-700">W gabinecie (50 min)</span>
                  <span className="text-2xl font-bold text-teal-600">150 zł</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700">Z dojazdem do klienta (50 min)</span>
                  <span className="text-2xl font-bold text-teal-600">180 zł</span>
                </div>
              </div>
              <div className="mt-6 text-center text-sm text-gray-600">
                <p>💡 Rekomendowana częstotliwość: 1-2 sesje tygodniowo. Możliwość dostosowania harmonogramu do potrzeb.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="py-16 px-4 bg-eduhus-bg-white border-t border-gray-200" delay={800}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 eduhus-text-dark">Problemy ze słuchem lub przetwarzaniem słuchowym?</h2>
            <p className="text-xl mb-8 eduhus-text-main">
              Umów konsultację diagnostyczną, aby poznać szczegóły programu mTalent i sprawdzić, czy jest właściwy dla Twojego dziecka
            </p>
                        <a href="/rezerwacja" className="inline-block bg-eduhus-accent text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Umów wizytę
            </a>
          </div>
        </AnimatedSection>
      </main>
      
      <Footer />
    </div>
  )
}
