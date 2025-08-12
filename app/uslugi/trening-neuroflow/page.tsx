import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Brain, Monitor, Headphones, CheckCircle, Star, Target, Clock, Users, AlertCircle } from "lucide-react"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Aktywny Trening Słuchowy Neuroflow | EduHustawka",
  description: "Neuroflow® to nowoczesny trening słuchowy wspierający rozwój słuchu, mowy i zdolności poznawczych. Skuteczna terapia online dla dzieci z APD, dysleksją i ADHD.",
  keywords: "Neuroflow, trening słuchowy, APD, zaburzenia przetwarzania słuchowego, dysleksja, ADHD, terapia online, rozwój mowy, 350 zł, 470 zł, Pomigacze, koncentracja",
}

export default function NeuroflowPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="h-12 w-12 text-green-600" />
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                      Aktywny Trening Słuchowy <span className="text-green-600">Neuroflow</span>
                    </h1>
                    <p className="text-xl text-green-600">Nowoczesna terapia słuchowa online</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Czy Twoje dziecko ma trudności z koncentracją, nauką czy rozumieniem mowy w hałasie? 
                  Neuroflow® to nowoczesny i skuteczny trening słuchowy, który wspiera rozwój słuchu, 
                  mowy i zdolności poznawczych.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-700">Terapia online</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-700">Adaptacyjny program</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <OptimizedImage
                  src="/neuroflow-training.jpg"
                  alt="Dziecko podczas treningu Neuroflow na komputerze"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Dla kogo */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={200}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Dla kogo jest Neuroflow?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  Dzieci od 4. roku życia z APD
                </h3>
                <p className="text-gray-700 mb-4">
                  Trening jest przeznaczony dla dzieci z zaburzeniami przetwarzania słuchowego (APD) 
                  oraz dzieci w grupie ryzyka.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2" />
                  Szczególnie zalecane dla
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Dysleksji, trudności w nauce</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>SLI, ADHD</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Opóźnionym rozwoju mowy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Nadwrażliwości na dźwięki</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Objawy APD */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 mr-2" />
                Częste objawy APD
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Prosi często o powtórzenie pytania</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Wydaje się "nieobecne" podczas rozmowy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Szybko męczy się podczas słuchania</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Ma trudności z odróżnianiem podobnych wyrazów</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Mówi monotonnym głosem</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Trudności w komunikacji społecznej</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Jak działa */}
        <AnimatedSection className="py-16 px-4 bg-gray-50" delay={300}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Jak działa trening Neuroflow?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Terapia online</h3>
                <p className="text-gray-600">
                  Dziecko ćwiczy w domu na komputerze w komfortowych warunkach
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Program adaptacyjny</h3>
                <p className="text-gray-600">
                  Poziom trudności dostosowuje się automatycznie do dziecka
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Wsparcie rodziców</h3>
                <p className="text-gray-600">
                  Wskazówki, jak wspomagać dziecko w terapii
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Przebieg terapii */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={400}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Przebieg terapii
            </h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  Sesje treningowe
                </h3>
                <p className="text-gray-700">
                  <strong>3 razy w tygodniu</strong>, każda trwa <strong>20-25 minut</strong>. 
                  Cały program trwa około <strong>8 miesięcy</strong> i składa się z trzech etapów ćwiczeń słuchowych.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  Ćwiczenia wspomagające
                </h3>
                <p className="text-gray-700 mb-3">W dniach bez treningu dziecko wykonuje ćwiczenia:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Schemat ciała i orientację w przestrzeni</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Koordynację słuchowo-wzrokowo-ruchową</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ćwiczenia równoważne i motoryczne</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Efekty terapii */}
        <AnimatedSection className="py-16 px-4 bg-gray-50" delay={500}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Efekty Aktywnego Treningu Słuchowego Neuroflow®
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2" />
                  Umiejętności językowe
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Lepsze rozumienie złożonych zdań</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Poprawa pamięci słuchowej</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Płynniejsze wypowiedzi</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-2" />
                  Wyniki w nauce
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Poprawa czytania i pisania</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Lepsza nauka słuchowa</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Skuteczniejsze języki obce</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
                  <Brain className="w-6 h-6 mr-2" />
                  Koncentracja i pewność
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Łatwiejsze skupienie uwagi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Lepsze rozumienie w hałasie</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Wzrost samooceny</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Wymagania techniczne */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={600}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Wymagania techniczne do terapii w domu
            </h2>

            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                    <Monitor className="w-6 h-6 mr-2" />
                    Sprzęt
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Komputer stacjonarny lub laptop (min. 1024x768)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Słuchawki nauszne, stereofoniczne</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Stabilne połączenie z internetem</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">
                    Oprogramowanie
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Przeglądarka Chrome lub Firefox</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Włączona obsługa JavaScript i cookies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Bez AdBlocka</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-100 rounded-lg border-l-4 border-yellow-400">
                <p className="text-yellow-800">
                  <strong>Uwaga:</strong> Neuroflow działa tylko na komputerach – tablety i telefony mogą nie obsługiwać platformy.
                  Jeśli nie masz odpowiedniego sprzętu, trening można przeprowadzić w gabinecie diagnostycznym.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Cennik */}
        <AnimatedSection className="py-16 px-4 bg-gray-50" delay={700}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Cennik</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Diagnoza wstępna</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">350 zł</div>
                <p className="text-gray-600 text-sm">Wstępna diagnoza przed rozpoczęciem terapii</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Badanie przed etapem</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">350 zł</div>
                <p className="text-gray-600 text-sm">Badanie kontrolne przed kolejnym etapem</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-green-200">
                <h3 className="text-xl font-semibold text-green-700 mb-4">I etap terapii</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">470 zł</div>
                <p className="text-gray-600 text-sm">Pierwszy etap treningu Neuroflow</p>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mt-2">
                  Popularne
                </span>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">II etap terapii</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">460 zł</div>
                <p className="text-gray-600 text-sm">Drugi etap treningu - kontynuacja</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">III etap i kolejne</h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">450 zł</div>
                <p className="text-gray-600 text-sm">Trzeci i kolejne etapy terapii</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-green-50 rounded-lg">
              <p className="text-green-700 text-center">
                💡 <strong>Pomóż swojemu dziecku lepiej słyszeć, rozumieć i uczyć się!</strong>
                Zapisy na konsultacje i terapię już trwają!
              </p>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}
