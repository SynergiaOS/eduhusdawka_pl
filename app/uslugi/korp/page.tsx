import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import AnimatedSection from "@/components/animations/animated-section"
import { Target, CheckCircle, User, ArrowRight, Brain, Heart, Eye, MessageCircle, Zap, BookOpen } from "lucide-react"
import Link from "next/link"
import UnifiedImage from "@/components/media/unified-image"

export const metadata: Metadata = {
  title: "KORP - Karty Oceny Rozwoju Psychoruchowego | EduHustawka",
  description: "Kompleksowa diagnostyka rozwoju dzieci od 1 miesiąca do 9 lat życia. Profesjonalna ocena rozwoju psychoruchowego z wykorzystaniem KORP.",
  keywords: "KORP, diagnostyka rozwoju, ocena psychoruchowa, rozwój dziecka, badanie rozwoju, diagnoza dzieci",
}

export default function KORPPage() {
  return (
    <div className="min-h-screen bg-eduhus-bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-6">
              <Target className="w-5 h-5 text-red-600" />
              <span className="text-red-700 font-medium">Diagnostyka KORP</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-red-600">KORP</span> - Karty Oceny Rozwoju Psychoruchowego
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Sprawdź rozwój swojego dziecka z testem KORP! Kompleksowa diagnoza rozwoju dzieci od 1 miesiąca życia do 9 lat i 11 miesięcy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+48531509008">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  📞 Umów badanie: 531 509 008
                </button>
              </a>
              <Link href="/rezerwacja">
                <button className="bg-white text-red-600 border-2 border-red-600 hover:bg-red-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Rezerwacja online
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Czym jest KORP */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={200}>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Czym jest KORP?
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  To nowoczesne, wystandaryzowane narzędzie diagnostyczne, które pozwala ocenić rozwój dziecka 
                  już od 1. miesiąca życia do 9. roku życia. Test dokładnie analizuje kluczowe sfery rozwojowe.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Wczesne wykrycie trudności</h3>
                      <p className="text-gray-600">Szybka interwencja to większa szansa na skuteczne wsparcie</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Indywidualne podejście</h3>
                      <p className="text-gray-600">Diagnoza uzupełniona szczegółowym wywiadem z opiekunem</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Precyzyjna analiza</h3>
                      <p className="text-gray-600">Rzetelna ocena rozwoju już w okresie niemowlęcym</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <UnifiedImage
                  src="/images/korp-diagnostic.png"
                  alt="Badanie KORP - diagnostyka rozwoju dziecka"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Obszary badania */}
        <AnimatedSection className="py-16 px-4" delay={300}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Obszary objęte badaniem KORP
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Rozwój ruchowy</h3>
                <p className="text-gray-600">
                  Sprawność fizyczna i koordynacja ruchowa dziecka
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Motoryka precyzyjna</h3>
                <p className="text-gray-600">
                  Zdolności manualne i dominacja ręki, lateralizacja
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Spostrzeganie wzrokowe</h3>
                <p className="text-gray-600">
                  Koordynacja wzrokowo-ruchowa, umiejętności do nauki pisania
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Komunikacja i mowa</h3>
                <p className="text-gray-600">
                  Zdolności językowe i komunikacyjne dziecka
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Rozwój emocjonalny</h3>
                <p className="text-gray-600">
                  Relacje z innymi oraz regulacja emocji
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Funkcje behawioralne</h3>
                <p className="text-gray-600">
                  Koncentracja, kontrola impulsów, samoregulacja
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Jak przebiega badanie */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={400}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Jak przebiega badanie KORP?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Wywiad z rodzicem</h3>
                <p className="text-gray-600">
                  Szczegółowa rozmowa o rozwoju dziecka, trudnościach i obserwacjach rodziców
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Badanie dziecka</h3>
                <p className="text-gray-600">
                  Ocena wszystkich sfer rozwoju przy użyciu wystandaryzowanych narzędzi KORP
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Opinia i zalecenia</h3>
                <p className="text-gray-600">
                  Szczegółowa pisemna opinia z wynikami i rekomendacjami dalszego postępowania
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Dla kogo */}
        <AnimatedSection className="py-16 px-4" delay={500}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Dla kogo jest badanie KORP?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Wiek dziecka</h3>
                <p className="text-gray-700 mb-4">
                  Badanie KORP jest przeznaczone dla dzieci w wieku:
                </p>
                <div className="text-2xl font-bold text-red-600">
                  1 miesiąc życia - 9 lat i 11 miesięcy
                </div>
              </div>
              
              <div className="bg-red-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Wskazania</h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Opóźnienia rozwojowe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Trudności w nauce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Problemy behawioralne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Kontrola rozwoju</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Cennik */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={600}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Cennik</h2>

            <div className="bg-red-50 p-8 rounded-2xl max-w-md mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-red-700">KORP - Badanie rozwoju</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-red-200">
                  <span className="text-gray-700">Badanie + szczegółowa opinia</span>
                  <span className="text-3xl font-bold text-red-600">350 zł</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Czas trwania</span>
                  <span className="text-lg font-semibold text-red-600">ok. 120 min</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-red-600 mb-4">
                  💡 Kompleksowa ocena wszystkich sfer rozwoju
                </p>
                <a href="tel:+48531509008" className="inline-block">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    📞 Zadzwoń: 531 509 008
                  </button>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="py-16 px-4 bg-eduhus-bg-white border-t border-gray-200" delay={700}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-eduhus-bg-white rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 eduhus-text-dark">
                Chcesz sprawdzić rozwój swojego dziecka?
              </h2>
              <p className="text-xl mb-8 eduhus-text-main">
                Umów się na badanie KORP i otrzymaj profesjonalną ocenę rozwoju psychoruchowego
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+48531509008">
                  <button className="bg-white text-eduhus-accent px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg border border-eduhus-accent">
                    📞 Zadzwoń: 531 509 008
                  </button>
                </a>
                <Link href="/rezerwacja">
                  <button className="bg-eduhus-accent text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-colors shadow-lg flex items-center gap-2 justify-center">
                    Rezerwacja online
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}
