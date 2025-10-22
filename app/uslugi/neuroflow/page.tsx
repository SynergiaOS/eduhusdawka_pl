import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import AnimatedSection from "@/components/animations/animated-section"
import { Headphones, CheckCircle, Volume2, Wifi, Brain, AlertCircle, Music } from "lucide-react"
import YouTubeEmbed from "@/components/media/youtube-embed"

export const metadata: Metadata = {
  title: "Neuroflow - Aktywny Trening Słuchowy | EduHustawka",
  description: "Neuroflow to aktywny trening słuchowy wspierający rozwój słuchu, mowy i zdolności poznawczych. Terapia online z indywidualnym programem.",
  keywords: "neuroflow, trening słuchowy, APD, zaburzenia przetwarzania słuchowego, terapia mowy, koncentracja, ADHD, dysleksja, terapia online",
}

export default function NeuroflowPage() {
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
                  <div className="bg-cyan-50 p-4 rounded-full w-fit">
                    <Headphones className="h-12 w-12 text-eduhus-icon-neuroflow" />
                  </div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">
                      Aktywny Trening Słuchowy <span className="text-eduhus-icon-neuroflow block sm:inline">NEUROFLOW</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-eduhus-icon-neuroflow font-medium">Nowoczesna terapia wspierająca rozwój słuchu i zdolności poznawczych</p>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                  NEUROFLOW to nowoczesny, aktywny trening słuchowy realizowany online w formie zabawy interaktywnej. 
                  Program wspiera rozwój słuchu, mowy i zdolności poznawczych dziecka.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="flex items-center gap-2 bg-cyan-50 px-4 py-2 rounded-full">
                    <Wifi className="w-5 h-5 text-eduhus-icon-neuroflow" />
                    <span className="text-eduhus-icon-neuroflow font-medium">Terapia online</span>
                  </div>
                  <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-eduhus-accent" />
                    <span className="text-eduhus-accent font-medium">Indywidualny program</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-8 rounded-2xl shadow-lg">
                  <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center">
                    <Brain className="w-20 h-20 text-cyan-400 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Dla kogo section */}
        <AnimatedSection className="py-16 px-4 bg-eduhus-bg-light">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
              Dla kogo przeznaczony jest Aktywny Trening Słuchowy?
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-eduhus-icon-neuroflow">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-eduhus-icon-neuroflow flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Dla dzieci z zaburzeniami przetwarzania słuchowego (APD)</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    NEUROFLOW to zaawansowany trening słuchowy dedykowany dzieciom od 4. roku życia z diagnozą 
                    lub podejrzeniem zaburzenia przetwarzania słuchowego (Auditory Processing Disorder - APD).
                  </p>
                  <div className="bg-cyan-50 p-6 rounded-lg mt-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Volume2 className="w-5 h-5 text-eduhus-icon-neuroflow" />
                      Program wspiera:
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-eduhus-icon-neuroflow rounded-full"></div>
                        Lokalizację źródła dźwięku w przestrzeni
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-eduhus-icon-neuroflow rounded-full"></div>
                        Dyskryminację (rozróżnianie) różnych dźwięków
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-eduhus-icon-neuroflow rounded-full"></div>
                        Sekwencjonowanie dźwięków (rozumienie kolejności)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-eduhus-icon-neuroflow rounded-full"></div>
                        Figurę-tło (wyodrębnianie ważnych dźwięków)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-eduhus-icon-neuroflow rounded-full"></div>
                        Integrację słuchowo-motoryczną
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Częste objawy APD */}
        <AnimatedSection className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
              Częste objawy zaburzenia przetwarzania słuchowego (APD)
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="font-bold text-red-700 mb-2">Trudności w zrozumieniu mowy</h3>
                <p className="text-gray-600 text-sm">Szczególnie w hałaśliwym otoczeniu lub gdy mówi kilka osób jednocześnie</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-700 mb-2">Problemy z rozróżnianiem dźwięków</h3>
                <p className="text-gray-600 text-sm">Mieszanie podobnie brzmiących wyrazów lub sylab (np. "d" i "t")</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-700 mb-2">Opóźnienie mowy</h3>
                <p className="text-gray-600 text-sm">Wolniejszy rozwój umiejętności mówienia niż rówieśnicy</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-eduhus-accent">
                <h3 className="font-bold text-eduhus-accent mb-2">Trudności w czytaniu i pisaniu</h3>
                <p className="text-gray-600 text-sm">Problemy fonologiczne, błędy w zamienianiu głosek</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-eduhus-accent">
                <h3 className="font-bold text-eduhus-accent mb-2">Niska tolerancja na hałas</h3>
                <p className="text-gray-600 text-sm">Wrażliwość na głośne dźwięki, nieprzyjemne uczucie w uszu</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-700 mb-2">Problemy z równowagą i koordynacją</h3>
                <p className="text-gray-600 text-sm">Nieporadność motoryczna, trudności sportowe</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Jak działa */}
        <AnimatedSection className="py-16 px-4 bg-eduhus-bg-light">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
              Jak działa Aktywny Trening Słuchowy?
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-cyan-600">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                NEUROFLOW to interaktywny program treningowy, który systematycznie i zabawie poprawia zdolności 
                przetwarzania słuchowego dziecka. Trening odbywa się w formie nagrody i gier, dzięki czemu 
                dziecko nie odczuwa go jako terapię medyczną.
              </p>
              <div className="bg-cyan-50 p-6 rounded-lg">
                <h3 className="font-bold text-cyan-700 mb-4">Kluczowe elementy programu:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Music className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                    <span><strong>Ćwiczenia słuchowe:</strong> Trenowanie specyficznych umiejętności przetwarzania (lokalizacja, dyskryminacja, sekwencjonowanie)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Music className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                    <span><strong>Gry interaktywne:</strong> Angażujące zabawy z natychmiast widocznym postępem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Music className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                    <span><strong>Dostosowalny poziom trudności:</strong> Program automatycznie dopasowuje się do możliwości dziecka</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Music className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                    <span><strong>Ćwiczenia dla mózgu:</strong> Poprawiają plastyczność neuronalną i wydolność przetwarzania słuchowego</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Przebieg terapii */}
        <AnimatedSection className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
              Przebieg terapii - Trening w 3 etapach
            </h2>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                    <span className="text-3xl font-bold">1</span>
                  </div>
                </div>
                <div className="flex-1 bg-cyan-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Faza wstępna - Adaptacja (2-3 sesje)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Zapoznanie dziecka z platformą, poznanie interfejsu gier, określenie indywidualnego progu słuchu 
                    i preferencji. Budowanie zaufania i pozytywnego nastawienia do treningu.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white">
                    <span className="text-3xl font-bold">2</span>
                  </div>
                </div>
                <div className="flex-1 bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Faza główna - Intensywny trening (8-12 tygodni)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Systematyczne ćwiczenia 3 razy w tygodniu po 20-25 minut. Stopniowe podwyższanie poziomu trudności. 
                    Systematyczne poprawianie umiejętności przetwarzania słuchowego.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white">
                    <span className="text-3xl font-bold">3</span>
                  </div>
                </div>
                <div className="flex-1 bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Faza konsolidacji - Utrwalenie umiejętności</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Zmniejszanie częstości ćwiczeń, przejście na formę bardziej zaawansowaną. Utrwalanie nabytych umiejętności.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-orange-50 p-6 rounded-xl border-l-4 border-eduhus-accent">
                <h4 className="font-bold text-eduhus-accent mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Typowy przebieg:
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                  <div>
                    <p className="font-semibold">Liczba sesji:</p>
                    <p>Minimum 24-36 sesji</p>
                  </div>
                  <div>
                    <p className="font-semibold">Częstość:</p>
                    <p>3x tygodniowo</p>
                  </div>
                  <div>
                    <p className="font-semibold">Czas trwania:</p>
                    <p>Około 8 miesięcy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Efekty terapii */}
        <AnimatedSection className="py-16 px-4 bg-eduhus-bg-light">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
              Efekty i rezultaty terapii
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-500">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Volume2 className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Poprawa słuchu</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Lepsze rozumienie mowy</li>
                  <li>✓ Rozróżnianie dźwięków</li>
                  <li>✓ Lokalizacja źródła dźwięku</li>
                  <li>✓ Tolerancja na hałas</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-eduhus-accent">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-eduhus-accent" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rozwój poznawczy</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Lepsza koncentracja</li>
                  <li>✓ Улучшена pamięć słuchowa</li>
                  <li>✓ Szybsza przetwarzanie informacji</li>
                  <li>✓ Lepsze funkcje wykonawcze</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-eduhus-accent">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-eduhus-accent" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rozwój mowy i szkoły</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Wyraźniejsza mowa</li>
                  <li>✓ Lepsze czytanie i pisanie</li>
                  <li>✓ Wyniki w szkole</li>
                  <li>✓ Pewność siebie</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-xl border-l-4 border-cyan-600">
              <h3 className="font-bold text-gray-900 mb-3">Pierwsze efekty obserwujemy już po 4-6 tygodniach!</h3>
              <p className="text-gray-700">
                Rodzice zwracają uwagę na poprawę zainteresowania dziecka szkołą, lepszą koncentrację, wyraźniejszą mowę 
                i zmniejszoną wrażliwość na hałas. Nauczyciele notują poprawę wyników i zaangażowania na lekcjach.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Wymagania techniczne */}
        <AnimatedSection className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
              Wymagania techniczne
            </h2>
            <div className="bg-orange-50 p-8 rounded-xl border-l-4 border-eduhus-accent">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                NEUROFLOW to terapia całkowicie online, realizowana z dowolnego miejsca. 
                Wymagania techniczne są minimalne:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-eduhus-accent" />
                    Sprzęt:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Komputer lub tablet</li>
                    <li>✓ Słuchawki (dobrze, jeśli z mikrofonem)</li>
                    <li>✓ Kamera internetowa (opcjonalnie)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Połączenie:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Stabilne połączenie internetowe</li>
                    <li>✓ Prędkość minimum 5 Mbps</li>
                    <li>✓ Spokojne miejsce bez rozpraszaczy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Video */}
        <AnimatedSection className="py-16 px-4 bg-eduhus-bg-light">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
              Poznan Neuroflow - Jak wygląda sesja?
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <YouTubeEmbed videoId="uxCj7pgGD7M" title="Neuroflow - Aktywny Trening Słuchowy" />
            </div>
          </div>
        </AnimatedSection>

        {/* Cennik */}
        <AnimatedSection className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
              Cennik Neuroflow
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl shadow-md border-2 border-cyan-600">
                <h3 className="text-2xl font-bold text-cyan-700 mb-6">Sesja indywidualna</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-cyan-300">
                    <span className="text-gray-700">Sesja 50 minut</span>
                    <span className="text-3xl font-bold text-cyan-600">350 zł</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-cyan-300">
                    <span className="text-gray-700">Pakiet 5 sesji</span>
                    <span className="text-3xl font-bold text-eduhus-accent">350 zł*</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Pakiet 10 sesji</span>
                    <span className="text-3xl font-bold text-eduhus-accent">470 zł*</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    * Za sesję w pakiecie
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-md border-2 border-eduhus-accent">
                <h3 className="text-2xl font-bold text-eduhus-accent mb-6">Pakiet terapeutyczny</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-green-300">
                    <span className="text-gray-700">Program podstawowy (24 sesje)</span>
                    <span className="text-3xl font-bold text-eduhus-accent">460 zł*</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Program intensywny (36 sesji)</span>
                    <span className="text-3xl font-bold text-eduhus-accent">450 zł*</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    * Za sesję w pakiecie - zalecane dla osiągnięcia optymalnych rezultatów
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-600">
              <h3 className="font-bold text-yellow-900 mb-2">💡 Rekomendacja:</h3>
              <p className="text-gray-700">
                Dla najlepszych rezultatów zalecamy program intensywny z sesją 3x tygodniowo przez około 8-12 tygodni. 
                Dzięki pakietom oszczędzasz aż 35% w stosunku do ceny sesji einzelnych!
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="py-16 px-4 bg-eduhus-bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-eduhus-text-dark">Zainteresowany Neuroflow?</h2>
            <p className="text-xl mb-8 text-eduhus-text-main opacity-90">
              Zarezerwuj konsultację i dowiedz się, czy Aktywny Trening Słuchowy to odpowiednie rozwiązanie dla Twojego dziecka.
            </p>
            <a href="/rezerwacja" className="inline-block bg-eduhus-accent text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition shadow-lg">
              Umów konsultację
            </a>
          </div>
        </AnimatedSection>
      </main>
      
      <Footer />
    </div>
  )
}
