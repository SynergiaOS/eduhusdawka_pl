import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Hand } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Terapia Ręki | EduHustawka",
  description:
    "Profesjonalna terapia ręki w Pomigaczach. Rozwój motoryki małej, grafomotoryki i umiejętności pisania u dzieci. Indywidualne podejście.",
  keywords: "terapia ręki, motoryka mała, grafomotoryka, pisanie, Pomigacze, koordynacja wzrokowo-ruchowa",
=======
  title: "Terapia Ręki - 120 zł gabinet, 150 zł dojazd | EduHustawka",
  description: "Profesjonalna terapia ręki w Pomigaczach. 120 zł (gabinet), 150 zł (dojazd). Rozwój motoryki małej, grafomotoryki i umiejętności pisania u dzieci.",
  keywords: "terapia ręki, motoryka mała, grafomotoryka, pisanie, Pomigacze, 120 zł",
>>>>>>> 6315968e45f9c31c7849f5ffac10195e30caa8dc
}

export default function TerapiaRekiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-4">
<<<<<<< HEAD
            {/* Hero Section */}
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="bg-purple-100 p-4 rounded-full w-fit">
                      <Hand className="h-12 w-12 text-purple-600" />
                    </div>
                    <div>
                      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">
                        Terapia <span className="text-purple-600">Ręki</span>
                      </h1>
                      <p className="text-lg sm:text-xl text-purple-600 font-medium">Rozwój motoryki małej i umiejętności grafomotorycznych</p>
                    </div>
                  </div>

                  <blockquote className="text-base sm:text-lg italic text-gray-700 border-l-4 border-purple-300 pl-4 mb-8 leading-relaxed">
                    "To dzięki ręce człowiek zarabia na życie, rodzice pieszczą swoje dzieci, muzyk gra sonaty, ociemniały
                    czyta a głuchy mówi." - Sir Charles Bell
                  </blockquote>

                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                      <span className="text-purple-700 font-medium">Indywidualne podejście</span>
                    </div>
                    <div className="flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full">
                      <CheckCircle className="w-5 h-5 text-pink-600" />
                      <span className="text-pink-700 font-medium">Nowoczesne metody</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:+48531509008">
                      <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        Zadzwoń: 531 509 008
                      </button>
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl shadow-2xl">
                    <img
                      src="/images/hand-therapy.png"
                      alt="Terapia ręki - ćwiczenia motoryczne"
                      className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                    />
                    <div className="text-center mt-4">
                      <div className="inline-flex items-center bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        <Hand className="w-4 h-4 mr-2" />
                        Profesjonalna terapia ręki
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Image and Pricing */}
            
            {/* Main Content */}
            <AnimatedSection>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-12">
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-yellow-800 mb-2">
                        Bez umiejętności grafomotorycznych dziecku trudniej jest... mówić!
                      </h3>
                      <p className="text-yellow-700 text-sm">
                        Obszary ruchowe ręki i mowy znajdują się w mózgu człowieka bardzo blisko siebie.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold mb-6 text-purple-700 font-heading">
                  Dla kogo jest terapia ręki?
                </h2>

                <div className="prose prose-purple max-w-none">
                  <p className="mb-6 text-lg">
                    <strong>Rodzicu, jeśli Twoje dziecko:</strong>
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-3">Sygnały ostrzegawcze:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>niechętnie pisze, rysuje, lepi z plasteliny</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>ma trudności z ubieraniem się, zapinaniem guzików</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>zaciska dłonie zbyt mocno na przedmiotach</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>unika dotykania nowych faktur i powierzchni</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>ma trudności z używaniem nożyczek</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>słabo trzyma kredkę lub długopis</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-3">Cele terapii ręki:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Poprawa sprawności ruchowej rąk</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Doskonalenie precyzji ruchów palców</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Rozwój umiejętności chwytu i manipulacji</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Nauka płynnego i estetycznego pisania</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Wzmocnienie mięśni dłoni</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Poprawa koordynacji wzrokowo-ruchowej</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mt-8 mb-4 text-purple-700">Metody terapii</h3>
                  <div className="bg-purple-50 p-6 rounded-lg mb-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-3">Techniki używane w terapii:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Ćwiczenia wzmacniające mięśnie dłoni</li>
                          <li>• Masaż i stymulacja dotykowa</li>
                          <li>• Ćwiczenia koordynacji wzrokowo-ruchowej</li>
                          <li>• Zabawy z różnymi fakturami</li>
                          <li>• Ćwiczenia grafomotoryczne</li>
                          <li>• Nauka prawidłowego chwytu narzędzi</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-3">Materiały terapeutyczne:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Plastelina i masa solna</li>
                          <li>• Piłeczki antystresowe</li>
                          <li>• Szczypce i pęsety</li>
                          <li>• Koraliki i guziki</li>
                          <li>• Kartki z różnymi fakturami</li>
                          <li>• Nożyczki terapeutyczne</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mt-6 mb-4 text-purple-700">Przebieg terapii</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ol className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <strong className="text-purple-700">Ocena wstępna</strong>
                          <p className="text-gray-600 text-sm mt-1">
                            Sprawdzenie sprawności manualnej, siły chwytu i koordynacji
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <strong className="text-purple-700">Rozgrzewka</strong>
                          <p className="text-gray-600 text-sm mt-1">
                            Ćwiczenia przygotowujące dłonie do pracy (5-10 min)
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <strong className="text-purple-700">Ćwiczenia główne</strong>
                          <p className="text-gray-600 text-sm mt-1">
                            Zabawy i ćwiczenia dostosowane do potrzeb dziecka (25-30 min)
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <strong className="text-purple-700">Ćwiczenia domowe</strong>
                          <p className="text-gray-600 text-sm mt-1">
                            Zalecenia dla rodziców i zadania do wykonania w domu
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>

                  <h3 className="text-xl font-semibold mt-6 mb-4 text-purple-700">Oczekiwane efekty</h3>
                  <p className="mb-4">Regularna terapia ręki przynosi wymierne korzyści już po kilku sesjach:</p>
                  <ul className="list-disc list-inside mb-6 space-y-1">
                    <li>Poprawa siły i wytrzymałości mięśni dłoni</li>
                    <li>Zwiększenie precyzji ruchów palców</li>
                    <li>Lepsza koordynacja wzrokowo-ruchowa</li>
                    <li>Wzrost pewności siebie przy wykonywaniu zadań manualnych</li>
                    <li>Poprawa jakości pisma</li>
                    <li>Większa samodzielność w czynnościach codziennych</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection>
              <div className="bg-purple-50 p-6 md:p-8 rounded-lg text-center">
                <h2 className="text-2xl font-semibold mb-4 text-purple-700 font-heading">Umów się na terapię ręki</h2>
                <p className="text-gray-600 mb-6">
                  Chcesz pomóc swojemu dziecku rozwinąć umiejętności motoryczne? Skontaktuj się ze mną.
=======
          <div className="py-16">
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Hand className="h-12 w-12 text-purple-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Terapia <span className="text-purple-600">Ręki</span>
              </h1>
              <p className="text-xl text-purple-600 mb-8">
                Rozwój motoryki małej i umiejętności grafomotorycznych
              </p>
              
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-purple-700">
                  Dla kogo jest terapia ręki?
                </h2>
                
                <p className="text-lg mb-6">
                  <strong>Rodzicu, jeśli Twoje dziecko:</strong>
>>>>>>> 6315968e45f9c31c7849f5ffac10195e30caa8dc
                </p>
                
                <ul className="text-left space-y-3 mb-8">
                  <li>• niechętnie pisze, rysuje, lepi z plasteliny</li>
                  <li>• ma trudności z ubieraniem się, zapinaniem guzików</li>
                  <li>• zaciska dłonie zbyt mocno na przedmiotach</li>
                  <li>• unika dotykania nowych faktur i powierzchni</li>
                  <li>• ma trudności z używaniem nożyczek</li>
                  <li>• słabo trzyma kredkę lub długopis</li>
                </ul>
                

                <div className="text-center">
                  <a href="tel:+48531509008">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      Zadzwoń: 531 509 008
                    </Button>
                  </a>
                </div>
              </div>
<<<<<<< HEAD
            </AnimatedSection>
=======
            </div>
          </div>
>>>>>>> 6315968e45f9c31c7849f5ffac10195e30caa8dc
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
