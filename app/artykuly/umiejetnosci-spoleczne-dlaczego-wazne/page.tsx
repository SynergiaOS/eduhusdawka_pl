import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Users, CheckCircle, AlertTriangle, ArrowRight, Clock, User, Heart } from "lucide-react"
import Link from "next/link"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Dlaczego umiejętności społeczne są kluczowe? | EduHustawka",
  description: "Poznaj znaczenie TUS w rozwoju dziecka. Dowiedz się, kiedy warto rozważyć trening umiejętności społecznych i jak pomaga dzieciom w codziennym funkcjonowaniu.",
  keywords: "TUS, trening umiejętności społecznych, rozwój społeczny, komunikacja, relacje rówieśnicze, autyzm, zespół Aspergera",
}

export default function UmiejetnosciSpolecznePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-6">
                <Users className="w-5 h-5 text-green-600" />
                <span className="text-green-700 font-medium">TUS</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Dlaczego umiejętności społeczne <span className="text-green-600">są kluczowe?</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Poznaj znaczenie TUS w rozwoju dziecka i dowiedz się, kiedy warto rozważyć trening umiejętności społecznych
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  6 min czytania
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Joanna Świrydowicz
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection className="py-8 px-4" delay={200}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              
              {/* Introduction */}
              <div className="mb-12">
                <OptimizedImage
                  src="/images/hero-children.png"
                  alt="Dzieci podczas zabawy społecznej"
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover rounded-xl mb-8"
                />
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Umiejętności społeczne to fundament udanych relacji międzyludzkich. Dla dzieci są one 
                  równie ważne jak umiejętności akademickie. Trening Umiejętności Społecznych (TUS) 
                  pomaga dzieciom nauczyć się skutecznej komunikacji, budowania przyjaźni i radzenia 
                  sobie w różnych sytuacjach społecznych.
                </p>
              </div>

              {/* What are social skills */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Czym są umiejętności społeczne?
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Komunikacja werbalna",
                      description: "Umiejętność wyrażania myśli, potrzeb i emocji słowami"
                    },
                    {
                      title: "Komunikacja niewerbalna",
                      description: "Rozumienie i używanie mowy ciała, mimiki, gestów"
                    },
                    {
                      title: "Empatia",
                      description: "Zdolność do rozumienia i odczuwania emocji innych"
                    },
                    {
                      title: "Współpraca",
                      description: "Umiejętność pracy w grupie i dzielenia się"
                    },
                    {
                      title: "Rozwiązywanie konfliktów",
                      description: "Radzenie sobie z nieporozumieniami w sposób konstruktywny"
                    },
                    {
                      title: "Asertywność",
                      description: "Wyrażanie własnych potrzeb z poszanowaniem innych"
                    }
                  ].map((skill, index) => (
                    <div key={index} className="bg-green-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-green-700 mb-3">{skill.title}</h3>
                      <p className="text-gray-600 text-sm">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warning signs */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-orange-500" />
                  Kiedy dziecko może potrzebować TUS?
                </h2>

                <div className="space-y-4">
                  {[
                    "Ma trudności z nawiązywaniem przyjaźni",
                    "Unika kontaktów społecznych lub zabaw grupowych",
                    "Nie rozumie żartów lub ironii",
                    "Ma problemy z czytaniem emocji innych",
                    "Reaguje agresywnie w sytuacjach konfliktowych",
                    "Nie potrafi poczekać na swoją kolej",
                    "Ma trudności z wyrażaniem własnych potrzeb",
                    "Nie rozumie niepisanych reguł społecznych"
                  ].map((sign, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits of TUS */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-pink-500" />
                  Korzyści z treningu umiejętności społecznych
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Lepsze relacje z rówieśnikami",
                    "Większa pewność siebie w kontaktach",
                    "Umiejętność wyrażania emocji",
                    "Lepsze funkcjonowanie w szkole",
                    "Redukcja lęków społecznych",
                    "Rozwój empatii i zrozumienia innych",
                    "Umiejętność rozwiązywania konfliktów",
                    "Przygotowanie do dorosłego życia"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-pink-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How TUS works */}
              <div className="mb-12 bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Jak przebiega trening umiejętności społecznych?
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Diagnoza i ocena potrzeb</h3>
                      <p className="text-gray-600 text-sm">Szczegółowa analiza umiejętności społecznych dziecka i obszarów wymagających wsparcia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Trening w małych grupach</h3>
                      <p className="text-gray-600 text-sm">Ćwiczenia praktyczne w bezpiecznym środowisku z innymi dziećmi</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Gry i zabawy edukacyjne</h3>
                      <p className="text-gray-600 text-sm">Nauka przez zabawę - najskuteczniejsza metoda dla dzieci</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Praca z rodzicami</h3>
                      <p className="text-gray-600 text-sm">Wskazówki dla rodziców, jak wspierać dziecko w domu</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Age groups */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  TUS dla różnych grup wiekowych
                </h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">4-6 lat</h3>
                    <p className="text-gray-700">
                      Podstawy komunikacji, dzielenie się, nauka czekania na swoją kolej, rozpoznawanie emocji
                    </p>
                  </div>

                  <div className="border-l-4 border-teal-500 pl-6 py-4 bg-teal-50 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-teal-700 mb-2">7-10 lat</h3>
                    <p className="text-gray-700">
                      Budowanie przyjaźni, rozwiązywanie konfliktów, praca w grupie, asertywność
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">11+ lat</h3>
                    <p className="text-gray-700">
                      Zaawansowane umiejętności komunikacyjne, radzenie sobie ze stresem społecznym, budowanie samooceny
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-green-50 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-green-700 mb-4">
                  Chcesz pomóc swojemu dziecku w rozwoju społecznym?
                </h3>
                <p className="text-green-600 mb-6 max-w-2xl mx-auto">
                  Umów się na bezpłatną konsultację. Wspólnie ocenimy potrzeby Twojego dziecka 
                  i zaplanujemy odpowiedni trening umiejętności społecznych.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+48531509008">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                      Zadzwoń: 531 509 008
                    </button>
                  </a>
                  <Link href="/trening-umiejetnosci-spolecznych">
                    <button className="bg-white text-green-600 border-2 border-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                      Dowiedz się więcej o TUS
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}
