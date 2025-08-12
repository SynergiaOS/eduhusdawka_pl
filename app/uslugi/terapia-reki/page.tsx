import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Hand, CheckCircle, ArrowRight, AlertTriangle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terapia Ręki - 120 zł gabinet, 150 zł dojazd | EduHustawka",
  description:
    "Profesjonalna terapia ręki w Pomigaczach. 120 zł (gabinet), 150 zł (dojazd). Rozwój motoryki małej, grafomotoryki i umiejętności pisania u dzieci. Indywidualne podejście.",
  keywords: "terapia ręki, motoryka mała, grafomotoryka, pisanie, Pomigacze, 120 zł, koordynacja wzrokowo-ruchowa",
}

export default function TerapiaRekiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <AnimatedSection>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                  <Hand className="h-8 w-8 text-purple-600" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 font-heading heading-fancy pb-4">Terapia Ręki</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
                  Rozwój motoryki małej i umiejętności grafomotorycznych
                </p>
                <blockquote className="text-lg italic text-purple-700 border-l-4 border-purple-300 pl-4 max-w-2xl mx-auto">
                  "To dzięki ręce człowiek zarabia na życie, rodzice pieszczą swoje dzieci, muzyk gra sonaty, ociemniały
                  czyta a głuchy mówi." - Sir Charles Bell
                </blockquote>
              </div>
            </AnimatedSection>

            {/* Image and Pricing */}
            <AnimatedSection delay={200}>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden group">
                    <img
                      src="/images/hand-therapy.png"
                      alt="Terapia ręki - ćwiczenia motoryczne"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h2 className="text-xl font-semibold mb-4 text-purple-700">Cennik</h2>
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-800">W gabinecie (50 min)</h3>
                          <p className="text-sm text-gray-600">Indywidualna terapia ręki</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-purple-600">120 zł</p>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            Popularne
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-800">Z dojazdem do klienta (50 min)</h3>
                          <p className="text-sm text-gray-600">Terapia w domu dziecka</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-purple-600">150 zł</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm text-purple-700 text-center">
                      💡 Zajęcia mogą odbywać się indywidualnie lub w małych grupach
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Main Content */}
            <AnimatedSection delay={300}>
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
            <AnimatedSection delay={400}>
              <div className="bg-purple-50 p-6 md:p-8 rounded-lg text-center">
                <h2 className="text-2xl font-semibold mb-4 text-purple-700 font-heading">Umów się na terapię ręki</h2>
                <p className="text-gray-600 mb-6">
                  Chcesz pomóc swojemu dziecku rozwinąć umiejętności motoryczne? Skontaktuj się ze mną.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="tel:+48531509008">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      Zadzwoń: 531 509 008
                    </Button>
                  </a>
                  <Link href="/kontakt">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-purple-600 border-purple-600 hover:bg-purple-50 bg-transparent"
                    >
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Formularz kontaktowy
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
