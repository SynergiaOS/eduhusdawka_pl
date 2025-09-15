import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Brain, Headphones, Users, CheckCircle, Star, Target, Volume2, Mic } from "lucide-react"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Forbrain - Trening Słuchowo-Głosowy | EduHustawka",
  description: "Forbrain to innowacyjne urządzenie do treningu słuchowo-głosowego. Poprawia percepcję własnego głosu i wspiera rozwój mowy, czytania i koncentracji.",
  keywords: "Forbrain, trening słuchowy, terapia mowy, percepcja głosu, rozwój mowy, czytanie, koncentracja, integracja sensoryczna, Pomigacze, logopedia",
}

export default function ForbrainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Headphones className="h-12 w-12 text-blue-600" />
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                      Forbrain
                    </h1>
                    <p className="text-xl text-blue-600">Trening słuchowo-głosowy nowej generacji</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Forbrain to urządzenie poddane ocenie klinicznej, wspierające rozwój mowy, 
                  czytania i koncentracji poprzez trening słuchowo-głosowy.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-700">Bezpieczne i łatwe w obsłudze</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-700">Ocena kliniczna</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <OptimizedImage
                  src="/forbrain-device.jpg"
                  alt="Urządzenie Forbrain - słuchawki do treningu słuchowo-głosowego"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Czym jest Forbrain */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={200}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Czym jest Forbrain?
            </h2>
            <div className="bg-blue-50 p-8 rounded-2xl mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Słuchawki Forbrain służą do treningu słuchowo-głosowego. Mają na celu poprawić percepcję 
                naszego własnego głosu, co z kolei pomaga mózgowi w lepszym przetwarzaniu informacji zmysłowych. 
                Urządzenie jest wszechstronne i łatwe w obsłudze – do ćwiczeń wystarczy własny głos.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Jak działa */}
        <AnimatedSection className="py-16 px-4" delay={300}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Jak działa Forbrain?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Nagrywanie</h3>
                <p className="text-gray-600">
                  Mikrofon rejestruje Twój głos podczas mówienia, czytania lub śpiewania
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Filtrowanie</h3>
                <p className="text-gray-600">
                  Specjalne filtry wzmacniają ważne częstotliwości i eliminują zakłócenia
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Volume2 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Przekazywanie</h3>
                <p className="text-gray-600">
                  Przefiltrowany głos jest przekazywany do uszu przez przewodnictwo kostne
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Dla kogo */}
        <AnimatedSection className="py-16 px-4 bg-gray-50" delay={400}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Dla kogo jest Forbrain?
            </h2>
            
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2" />
                  Trudności, z którymi pomaga
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Trudności w uczeniu się</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Problemy z przetwarzaniem słuchowym</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Zaburzenia komunikacji</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Problemy z uwagą i zapamiętywaniem</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      
      <Footer />
    </div>
  )
}
