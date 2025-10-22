import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import AnimatedSection from "@/components/animations/animated-section"
import { Brain, CheckCircle, AlertCircle, Zap, ListChecks, Target, Headphones } from "lucide-react"

export const metadata: Metadata = {
  title: "Diagnoza ADHD | Test MOXO | EduHustawka",
  description: "Kompleksowa diagnoza ADHD z testem MOXO w Warszawie. Diagnoza przeprowadzana przez pedagoga specjalnego. Gwarancja spełnienia wymogów diagnostycznych.",
  keywords: "diagnoza ADHD, test MOXO, ADHD Warszawa, diagnoza deficytu uwagi, test impulsywności, zaburzenia uwagi",
}

export default function DiagnosisPage() {
  return (
    <div className="min-h-screen bg-eduhus-bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-full w-fit">
                    <Brain className="h-12 w-12 text-eduhus-icon-adhd" />
                  </div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">
                      Diagnoza ADHD <span className="text-eduhus-icon-adhd block sm:inline">+ Test MOXO</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-eduhus-icon-adhd font-medium">Kompleksowa ocena zaburzenia deficytu uwagi i nadpobudliwości</p>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                  Profesjonalna diagnoza ADHD przeprowadzana przez pedagoga specjalnego z wieloletnim doświadczeniem. 
                  Test MOXO - obiektywne badanie funkcji wykonawczych, uwagi i impulsywności.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-eduhus-icon-adhd" />
                    <span className="text-eduhus-icon-adhd font-medium">Objektywne wyniki</span>
                  </div>
                  <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-eduhus-accent" />
                    <span className="text-eduhus-accent font-medium">Opinia diagnostyczna</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl shadow-lg">
                  <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center">
                    <Zap className="w-20 h-20 text-purple-400 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Czym jest ADHD */}
        <AnimatedSection className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
              Czym jest ADHD?
            </h2>
            <div className="bg-purple-50 p-8 rounded-xl shadow-md border-l-4 border-purple-600">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ADHD (Attention Deficit/Hyperactivity Disorder) - zaburzenie deficytu uwagi z nadpobudliwością to neurobihawioralny 
                problem rozwojowy, który dotyka około 5-7% populacji dzieci i młodzieży. Charakteryzuje się trudnościami w koncentracji, 
                kontrolowaniu impulsów i regulacji poziomu aktywności.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-bold text-purple-700 mb-2">Nieuwaga</h3>
                  <p className="text-sm text-gray-700">Trudności w skupianiu uwagi, łatwa rozpraszalność, problemy z organizacją</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-bold text-purple-700 mb-2">Nadpobudliwość</h3>
                  <p className="text-sm text-gray-700">Bezustanne ruchy, trudności w pozostaniu w bezruchu, niecierpliwość</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-bold text-purple-700 mb-2">Impulsywność</h3>
                  <p className="text-sm text-gray-700">Podejmowanie decyzji bez zastanowienia, przerywanie, trudności z czekaniem</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Objawy ADHD */}
        <AnimatedSection className="py-16 px-4 bg-eduhus-bg-light">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
              Objawy ADHD - Czy twoje dziecko może mieć ADHD?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-500">
                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Objawy nieuwagi:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Trudności w skupianiu się na zadaniach (szczególnie nudnych)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Łatwa rozpraszalność nawet małymi bodźcami</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Zapominanie instrukcji lub codziennych obowiązków</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Problemy z organizacją i planowaniem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Częste gubienie przedmiotów</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Opóźnianie się z pracami domowymi i projektami</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Objawy nadpobudliwości i impulsywności:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Nieustanne ruchy nóg i rąk, "drżenie"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Trudności w pozostaniu siedząco podczas lekcji</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Odpowiadanie zanim skończą się pytania</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Trudności w czekaniu na swoją kolej</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Bycie "dzikim" i brawurowym</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Mówienie zbyt wiele, głośno lub w nieodpowiednich momentach</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Cztery etapy diagnozy */}
        <AnimatedSection className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
              4-etapowy proces diagnostyczny ADHD
            </h2>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-start bg-purple-50 p-6 rounded-xl">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Etap 1: Wywiad z rodzicami/opiekunami</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Szczegółowy bezpośredni wywiad na temat historii rozwojowej dziecka, rodziny, poprzednich diagnoz, 
                    oraz obserwacji w domu. Zbieramy informacje od najmłodszych lat dziecka.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start bg-orange-50 p-6 rounded-xl">
                <div className="w-16 h-16 bg-eduhus-accent text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Etap 2: Obserwacja behawioralna i testy psychologiczne</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Bezpośrednia obserwacja dziecka w gabinecie, zastosowanie testów i skal diagnostycznych 
                    (np. KOZE, KORP), ocena funkcjonowania poznawczego.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start bg-orange-50 p-6 rounded-xl">
                <div className="w-16 h-16 bg-eduhus-accent text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Etap 3: Test MOXO - Obiektywne badanie ADHD</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Zaawansowany test komputerowy, który zmierza funkcje wykonawcze, uwagę, impulsywność oraz odpowiedzi 
                    na bodźce. Trwa ok. 15 minut. Test jest uznawany przez specjalistów do obiektywnej oceny objawów ADHD.
                  </p>
                  <div className="bg-white p-4 rounded-lg mt-3 border-l-4 border-eduhus-accent">
                    <p className="text-sm text-gray-700">
                      <strong>Co mierzy Test MOXO:</strong> czas reakcji, wariancję czasu reakcji, błędy pominięcia, 
                      błędy alarmu alarmowego, zaburzenia w czytaniu wzorców - wszystko to wskaźniki potencjalnego ADHD.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start bg-yellow-50 p-6 rounded-xl">
                <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Etap 4: Opinia diagnostyczna i rekomendacje</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Na podstawie wszystkich zebranych informacji, wyników testów i obserwacji wystawiana jest opinia diagnostyczna 
                    zawierająca postawienie diagnozy (lub jej odrzucenie), a także rekomendacje dotyczące dalszych działań 
                    i wsparcia dla dziecka.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Co zawiera diagnoza */}
        <AnimatedSection className="py-16 px-4 bg-eduhus-bg-light">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
              Co zawiera pełna diagnoza ADHD?
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                  <ListChecks className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Opinia diagnostyczna napisana na papierze firmowym</h3>
                    <p className="text-sm text-gray-600">Z pełnym opisem wyników i rekomendacji</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                  <ListChecks className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Wyniki testu MOXO</h3>
                    <p className="text-sm text-gray-600">Raport z parametrów uwagi, impulsywności i funkcji wykonawczych</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                  <ListChecks className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Wyniki testów psychologicznych</h3>
                    <p className="text-sm text-gray-600">Testy behawioralne i skalowe (KOZE, KORP, itd.)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                  <ListChecks className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Rekomendacje i sugestie terapeutyczne</h3>
                    <p className="text-sm text-gray-600">Propozycje wsparcia, ćwiczeń i dalszych kroków terapeutycznych</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <ListChecks className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Rzetelne rekomendacje dla szkoły (jeśli potrzebne)</h3>
                    <p className="text-sm text-gray-600">Sugestje dotyczące dostosowania warunków nauki</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Dla kogo */}
        <AnimatedSection className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
              Dla kogo przeznaczona jest diagnoza ADHD?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Dzieci, u których podejrzewa się ADHD:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Z trudnościami w skupianiu uwagi w domu i szkole</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Z problemami behawioralnymi i impulsywnością</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Z niskimi wynikami w szkole mimo inteligencji</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Kierowane do poradni psychologiczno-pedagogicznej</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Wymagające oceny do leczenia farmakologicznego</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-eduhus-accent mb-4 flex items-center gap-2">
                  <Headphones className="w-5 h-5" />
                  Diagnoza może być przydatna również dla:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-eduhus-accent font-bold">✓</span>
                    <span>Dzieci z opóźnieniem w mowie/zaburzeniami językowymi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-eduhus-accent font-bold">✓</span>
                    <span>Dzieci ze spektrum autyzmu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-eduhus-accent font-bold">✓</span>
                    <span>Dzieci z zaburzeniami procesów poznawczych</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-eduhus-accent font-bold">✓</span>
                    <span>Dla różnicowania diagnozy zaburzenia ADHD</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Cennik */}
        <AnimatedSection className="py-16 px-4 bg-eduhus-bg-light">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
              Cennik diagnozy ADHD z testem MOXO
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-purple-600">
                <h3 className="text-2xl font-bold text-purple-700 mb-6">Diagnoza pełna ADHD</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                    <span className="text-gray-700 text-lg">Cena</span>
                    <span className="text-4xl font-bold text-purple-600">350 zł</span>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-3">Zawiera:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Wywiad diagnostyczny (60 min)</li>
                      <li>✓ Test MOXO (15 min)</li>
                      <li>✓ Testy psychologiczne</li>
                      <li>✓ Obserwacja behawioralna</li>
                      <li>✓ Opinia diagnostyczna pisana</li>
                      <li>✓ Rekomendacje i sugestie</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-eduhus-accent">
                <h3 className="text-2xl font-bold text-eduhus-accent mb-6">Test MOXO (samodzielnie)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                    <span className="text-gray-700 text-lg">Cena</span>
                    <span className="text-4xl font-bold text-eduhus-accent">350 zł</span>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-3">Zawiera:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Przeprowadzenie testu MOXO</li>
                      <li>✓ Raport z wynikami</li>
                      <li>✓ Wyjaśnienie wyniku</li>
                      <li>✓ Rekomendacje</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-orange-50 p-6 rounded-xl border-l-4 border-eduhus-accent max-w-3xl mx-auto">
              <h4 className="font-bold text-eduhus-accent mb-2">ℹ️ Ważna informacja:</h4>
              <p className="text-gray-700">
                Diagnoza ADHD wymaga kompleksowej oceny. Jeśli posiadasz już częściowe wyniki (np. opinię szkoły lub badania u psychiatry), 
                możemy przeprowadzić diagnozę uzupełniającą. Skontaktuj się bezpośrednio, aby ustalić optymalny plan diagnostyczny dla Twojego dziecka.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="py-16 px-4 bg-eduhus-bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-eduhus-text-dark">Chcesz zbadać dziecko pod kątem ADHD?</h2>
            <p className="text-xl mb-8 text-eduhus-text-main opacity-90">
              Zarezerwuj kompleksową diagnozę ADHD z testem MOXO. Wyniki otrzymasz w postaci pisanej opinii diagnostycznej.
            </p>
            <a href="/rezerwacja" className="inline-block bg-eduhus-accent text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition shadow-lg">
              Umów diagnozę ADHD
            </a>
          </div>
        </AnimatedSection>
      </main>
      
      <Footer />
    </div>
  )
}
