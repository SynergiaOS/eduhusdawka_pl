import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import AnimatedSection from "@/components/animations/animated-section"
import { Brain, Ear, CheckCircle, Star, Target, Zap, MessageCircle } from "lucide-react"
import UnifiedImage from "@/components/media/unified-image"

export const metadata: Metadata = {
  title: "Terapia Metoda Johansena | EduHustawka",
  description: "Terapia metoda Johansena - innowacyjne podejście wspierające integrację sensoryczną i rozwój słuchu. Efektywna metoda dla dzieci z trudnościami rozwojowymi.",
  keywords: "metoda Johansena, terapia sensoryczna, integracja sensoryczna, rozwój słuchu, stymulacja słuchowa, dziecko, logopedia, pedagogika",
}

export default function TerapiaMetodaJohansenPage() {
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
                  <Ear className="h-12 w-12 text-eduhus-icon-johansen" />
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                      Metoda Johansena
                    </h1>
                    <p className="text-xl text-eduhus-icon-johansen">Nowoczesna terapia słuchowa dla dzieci</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Metoda Johansena to innowacyjne podejście wspierające integrację sensoryczną i rozwój 
                  słuchu u dzieci z różnymi trudnościami rozwojowymi. Terapia opiera się na zasadzie 
                  stymulacji słuchowej i neuronalnego uczenia się.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-eduhus-icon-johansen" />
                    <span className="text-eduhus-icon-johansen">Sprawdzona metoda</span>
                  </div>
                  <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-eduhus-accent" />
                    <span className="text-eduhus-accent">Indywidualna terapia</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <UnifiedImage
                  src="/placeholder.jpg"
                  alt="Terapia metoda Johansena - stymulacja słuchowa dla dzieci"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Czym jest metoda Johansena */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={200}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Czym jest Metoda Johansena?
            </h2>
            <div className="bg-purple-50 p-8 rounded-2xl mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Metoda Johansena to zintegrowany system terapeutyczny łączący stymulację słuchową z 
                ćwiczeniami ruchowymi i zmysłowymi. Metoda wspiera naturalny proces rozwojowy dziecka, 
                aktywując i wzmacniając funkcje słuchowe oraz integracyjne ośrodkowego systemu nerwowego.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Terapia jest dostosowywana indywidualnie do potrzeb każdego dziecka, uwzględniając jego 
                aktualny poziom funkcjonowania i tempo rozwojowe.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Dla kogo */}
        <AnimatedSection className="py-16 px-4" delay={300}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Dla kogo jest ta metoda?
            </h2>
            
            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2" />
                  Wskazania do terapii
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Opóźniony rozwój mowy i komunikacji</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Problemy z przetwarzaniem słuchowym</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Zaburzenia integracji sensorycznej</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Autyzm i zaburzenia ze spektrum</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">ADHD i problemy z koncentracją</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Zaburzenia motoryki i koordynacji</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Zaburzenia emocjonalne i behawioralne</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Efekty terapii */}
        <AnimatedSection className="py-16 px-4 bg-gray-50" delay={400}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Efekty terapii
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mowa i komunikacja</h3>
                <p className="text-gray-600">
                  Poprawa artykulacji, wzbogacanie słownictwa, rozwinięcie umiejętności komunikacyjnych
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-eduhus-accent" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Funkcje poznawcze</h3>
                <p className="text-gray-600">
                  Wspieranie koncentracji, poprawianie pamięci, wspomaganie procesów uczenia się
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-eduhus-accent" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Integracja sensoryczna</h3>
                <p className="text-gray-600">
                  Wspomaganie przetwarzania informacji zmysłowych, poprawa koordynacji i motoryki
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Ear className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Słuch i percepcja</h3>
                <p className="text-gray-600">
                  Wzmocnienie słuchu, lepsza percepcja dźwięków, rozwój świadomości słuchowej
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Jak przebiega sesja */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={500}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Jak przebiega sesja terapeutyczna?
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ocena i diagnoza</h3>
                  <p className="text-gray-600">Przeprowadzenie szczegółowej obserwacji i oceny poziomu funkcjonowania dziecka</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Stymulacja słuchowa</h3>
                  <p className="text-gray-600">Zastosowanie specjalistycznych sekwencji dźwiękowych w zabawie i ćwiczeniach</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ćwiczenia ruchowe</h3>
                  <p className="text-gray-600">Połączenie stymulacji słuchowej z ćwiczeniami wspomagającymi motorykę i koordynację</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Utrwalanie i transfer</h3>
                  <p className="text-gray-600">Zabawy i ćwiczenia wspierające przenoszenie umiejętności do życia codziennego</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Cennik */}
        <AnimatedSection className="py-16 px-4 bg-eduhus-bg-white" delay={600}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold eduhus-text-dark mb-12">Cennik</h2>

            <div className="bg-eduhus-bg-light p-8 rounded-2xl max-w-md mx-auto shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 eduhus-text-dark">Sesja terapeutyczna</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="eduhus-text-main">Sesja (50 min)</span>
                  <span className="text-2xl font-bold text-eduhus-accent">150 zł</span>
                </div>
              </div>
              <div className="mt-6 text-center text-sm text-gray-600">
                <p>💡 Możliwość dostosowania liczby sesji i harmonogramu do potrzeb dziecka</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="py-16 px-4 bg-eduhus-bg-white border-t border-gray-200" delay={700}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 eduhus-text-dark">Chcesz wiedzieć więcej?</h2>
            <p className="text-xl mb-8 eduhus-text-main">
              Skontaktuj się z nami, aby umówić konsultację i dowieć się, jak metoda Johansena może wspomóc rozwój Twojego dziecka
            </p>
            <a href="/rezerwacja" className="inline-block bg-eduhus-accent text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Umów konsultację
            </a>
          </div>
        </AnimatedSection>
      </main>
      
      <Footer />
    </div>
  )
}
