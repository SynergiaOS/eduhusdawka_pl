import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import AnimatedSection from "@/components/animations/animated-section"
import { Headphones, BookOpen, Brain, CheckCircle, Star, Volume2, Zap } from "lucide-react"
import UnifiedImage from "@/components/media/unified-image"

export const metadata: Metadata = {
  title: "Czytanie Sylabowe z Forbrain | EduHustawka",
  description: "Czytanie sylabowe z wykorzystaniem słuchawek Forbrain® - skuteczna metoda nauki czytania i poprawy koncentracji. Połączenie metody krakowskiej i technologii Forbrain.",
  keywords: "forbrain, czytanie sylabowe, metoda krakowska, nauka czytania, słuchawki forbrain, dysleksja, percepcja słuchowa",
}

export default function CzytanieSylaboweForbrain() {
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
                  <Headphones className="h-12 w-12 text-indigo-600" />
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                      Czytanie Sylabowe z Forbrain
                    </h1>
                    <p className="text-xl text-indigo-600">Metoda krakowska + technologia Forbrain</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  📚 Czytanie sylabowe z wykorzystaniem słuchawek Forbrain® – skuteczna metoda nauki czytania i poprawy koncentracji.
                  Zapraszam dzieci w wieku przedszkolnym i wczesnoszkolnym na indywidualne zajęcia czytania metodą sylabową 
                  z wykorzystaniem innowacyjnych słuchawek Forbrain®. To połączenie skutecznej metody Krakowskiej 
                  z technologią wspierającą przetwarzanie słuchowe.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                    <span className="text-indigo-700">Skuteczna metoda</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-700">Technologia Forbrain</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <UnifiedImage
                  src="/placeholder.jpg"
                  alt="Czytanie sylabowe z Forbrain - nauka czytania dla dzieci"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Dlaczego warto */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={200}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Dlaczego warto?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center">
                  <BookOpen className="w-6 h-6 mr-2" />
                  Metoda sylabowa
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ułatwia naukę czytania nawet dzieciom z trudnościami (dysleksja, opóźniony rozwój mowy, zaburzenia koncentracji).
                  Metoda krakowska jest sprawdzoną i efektywną metodą nauczania czytania.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                  <Headphones className="w-6 h-6 mr-2" />
                  Słuchawki Forbrain®
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Wzmacniają odbiór własnego głosu, poprawiają percepcję słuchową, rytm i płynność czytania.
                  Łączą się z nauką czytania tworząc bardzo efektywne połączenie.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Jak przebiega */}
        <AnimatedSection className="py-16 px-4" delay={300}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Charakterystyka zajęć
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-6">Zajęcia są:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Dostosowane indywidualnie do możliwości i tempa dziecka</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Prowadzone w przyjaznej atmosferze i ćwiczeniach w formie zabawy</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Wspierane przez innowacyjną technologię Forbrain</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Łączące naukę czytania z rozwojem percepcji słuchowej</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Efekty */}
        <AnimatedSection className="py-16 px-4 bg-gray-50" delay={400}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Efekty terapii
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-indigo-600">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Poprawa płynności czytania</h3>
                <p className="text-gray-600">
                  Dziecko uczy się czytać płynnie i naturalnie, bez zatrzymań i błędów
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-blue-600">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lepsze rozumienie tekstu</h3>
                <p className="text-gray-600">
                  Dziecko lepiej rozumie i zapamiętuje czytane treści
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-purple-600">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Wzrost koncentracji i uwagi</h3>
                <p className="text-gray-600">
                  Forbrain wspomaga zmysł słuchowy, co poprawia zdolność do skupienia
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-green-600">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Volume2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Rozwój mowy i komunikacji</h3>
                <p className="text-gray-600">
                  Forbrain wzmacnia odbiór własnego głosu, co wspiera mowę i wymowę
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-pink-600">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Rozwój pamięci i języka</h3>
                <p className="text-gray-600">
                  Wspieranie rozwoju umiejętności językowych i pamięci
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-orange-600">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pewność siebie</h3>
                <p className="text-gray-600">
                  Dziecko zyskuje pewność siebie i motywację do dalszej nauki
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Jak działają słuchawki */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={500}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Jak działają słuchawki Forbrain?
            </h2>
            
            <div className="bg-indigo-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Słuchawki Forbrain wykorzystują nasz własny głos zamiast dźwięków docierających z otoczenia. 
                Dźwięk własnego głosu odbieramy nie drogą powietrzną ale poprzez przewodnictwo kostne, za pośrednictwem kości czaszki. 
                Gdy kości drgają, przekazują dźwięk, który dociera do ślimaka, nie przechodzi jednak przez błonę bębenkową. 
                Podobnie jak w drodze powietrznej, drgania przekształcane są na impuls elektryczny i przekazywane do mózgu.
              </p>
              
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">Działanie słuchawek Forbrain opiera się na:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span><strong>Wzmocnieniu przewodnictwa kostnego</strong> – ale jednoczesnym nie blokowaniu przewodnictwa powietrznego. Wpływa to na znaczne poprawienie percepcji dźwięku.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span><strong>Treningu mózgu</strong> – umożliwiając znaczącą poprawę w wielu obszarach funkcjonowania dziecka</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Benefity Forbrain */}
        <AnimatedSection className="py-16 px-4 bg-gray-50" delay={600}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Forbrain wspomaga rozwój w obszarach:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">🗣️ Mowie i komunikacji</h3>
                <p className="text-gray-600 text-sm">Słuchawki Forbrain zwiększają świadomość mowy, co prowadzi do lepszego, wyraźniejszego sposobu mówienia</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">🎯 Uwadze i koncentracji</h3>
                <p className="text-gray-600 text-sm">Słuchawki Forbrain pomagają skupiać się dłużej na danej czynności, co pozwala osiągać lepsze wyniki w nauce</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">📚 Uczeniu się</h3>
                <p className="text-gray-600 text-sm">Forbrain poprawia działanie dróg słuchowych w mózgu, co umożliwia lepsze przyswajanie informacji</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">📖 Czytaniu i pisaniu</h3>
                <p className="text-gray-600 text-sm">Forbrain poprawia umiejętność czytania ze zrozumieniem, uczenia się słów i płynność czytania</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">⚙️ Autoregulacji</h3>
                <p className="text-gray-600 text-sm">Przewodzenie kostne reguluje pracę układu autonomicznego i wpływa na poziom pobudzenia</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">👥 Umiejętnościach społecznych</h3>
                <p className="text-gray-600 text-sm">Pewności siebie, umiejętności komunikacji społecznej i interakcji z innymi</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Cennik */}
        <AnimatedSection className="py-16 px-4 bg-eduhus-bg-white" delay={700}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold eduhus-text-dark mb-12">Cennik</h2>

            <div className="bg-eduhus-bg-light p-8 rounded-2xl max-w-md mx-auto shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 eduhus-text-dark">Czytanie sylabowe z Forbrain</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="eduhus-text-main">Sesja (50 min)</span>
                  <span className="text-2xl font-bold text-eduhus-accent">150 zł</span>
                </div>
              </div>
              <div className="mt-6 text-center text-sm eduhus-text-light">
                <p>💡 Możliwość wykorzystywania Forbrain w środowisku rodzinnym dziecka po instruktażu</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="py-16 px-4 bg-eduhus-bg-white border-t border-gray-200" delay={800}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 eduhus-text-dark">Zainteresowany czytaniem sylabowym z Forbrain?</h2>
            <p className="text-xl mb-8 eduhus-text-main">
              Umów konsultację i dowiedz się, jak połączenie metody krakowskiej z technologią Forbrain może wspomóc naukę czytania Twojego dziecka
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
