import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import AnimatedSection from "@/components/animations/animated-section"
import { BookOpen, Eye, Brain, CheckCircle, Star, Target, Lightbulb } from "lucide-react"
import UnifiedImage from "@/components/media/unified-image"

export const metadata: Metadata = {
  title: "Wczesna Nauka Czytania - Wsparcie Rozwoju | EduHustawka",
  description: "Wczesna nauka czytania w Białymstoku. Zajęcia wspierające rozwój umiejętności czytania u dzieci w wieku przedszkolnym i wczesnoszkolnym.",
  keywords: "wczesna nauka czytania, czytanie dzieci, przedszkole, Białystok, Pomigacze, rozwój czytania",
}

export default function WczesnaNaukaCzytaniaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="h-12 w-12 text-green-600" />
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                      Wczesna Nauka Czytania
                    </h1>
                    <p className="text-xl text-green-600">Wsparcie rozwoju umiejętności czytania</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Specjalistyczne zajęcia wspierające rozwój umiejętności czytania u dzieci
                  w wieku przedszkolnym i wczesnoszkolnym. Indywidualne podejście do każdego dziecka.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-700">Metody sprawdzone</span>
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="text-emerald-700">Indywidualne tempo</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <UnifiedImage
                  src="/images/early-reading.png"
                  alt="Dziecko podczas nauki czytania"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
        {/* Czym jest wczesna nauka czytania */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={200}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Czym jest wczesna nauka czytania?
            </h2>
            <div className="bg-green-50 p-8 rounded-2xl mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Wczesna nauka czytania to specjalistyczne zajęcia wspierające rozwój umiejętności czytania
                u dzieci w wieku przedszkolnym i wczesnoszkolnym. Wykorzystujemy różnorodne metody dostosowane
                do indywidualnych potrzeb i możliwości każdego dziecka.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Jak przebiega nauka */}
        <AnimatedSection className="py-16 px-4" delay={300}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Jak przebiega nauka czytania?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Rozpoznawanie</h3>
                <p className="text-gray-600">
                  Nauka rozpoznawania liter, ich kształtów i brzmień w formie zabawy
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Łączenie</h3>
                <p className="text-gray-600">
                  Łączenie liter w sylaby i proste wyrazy z wykorzystaniem gier edukacyjnych
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Rozumienie</h3>
                <p className="text-gray-600">
                  Rozwój czytania ze zrozumieniem i płynności czytania
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Dla kogo */}
        <AnimatedSection className="py-16 px-4 bg-gray-50" delay={400}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Dla kogo są zajęcia?
            </h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-6 flex items-center">
                <Target className="w-6 h-6 mr-2" />
                Zajęcia są przeznaczone dla dzieci, które:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Rozpoczynają naukę czytania (4-6 lat)</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mają trudności z opanowaniem czytania</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Potrzebują wsparcia przed szkołą</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mają problemy z koncentracją</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Potrzebują indywidualnego tempa</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Chcą rozwijać umiejętności czytania</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Cennik */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={500}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Cennik</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-green-700">Wczesna Nauka Czytania</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-green-200">
                    <span className="text-gray-700">W gabinecie (50 min)</span>
                    <span className="text-2xl font-bold text-green-600">120 zł</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Z dojazdem do klienta (50 min)</span>
                    <span className="text-2xl font-bold text-green-600">150 zł</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-green-600 mb-4">
                    💡 Metoda symultaniczno-sekwencyjna
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-blue-700">Czytanie Sylabowe</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-blue-200">
                    <span className="text-gray-700">W gabinecie (50 min)</span>
                    <span className="text-2xl font-bold text-blue-600">120 zł</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Z dojazdem do ucznia (50 min)</span>
                    <span className="text-2xl font-bold text-blue-600">150 zł</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-blue-600 mb-4">
                    💡 Nauka czytania metodą sylabową
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-6">
                Indywidualne podejście do każdego dziecka
              </p>
              <a href="tel:+48531509008" className="inline-block">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  📞 Zadzwoń: 531 509 008
                </button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}
