"use client"

import AnimatedSection from "@/components/animated-section"
import UnifiedImage from "@/components/unified-image"
import TestimonialsSection from "@/components/testimonials-section"
import ServiceArticlesSection from "@/components/service-articles-section"
import FaqSection from "@/components/faq-section"
import ContactForm from "@/components/contact-form"
import Header from "@/components/header"
import Footer from "@/components/footer"

import { EnhancedButton } from "@/components/ui/enhanced-button"
import {
  ArrowRight,
  Users,
  Hand,
  BookOpen,
  Headphones,
  Phone,
  MessageCircle,
  MessageSquare,
  Star,
  Award,
  Mail,
  MapPin,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { useAnalytics } from "@/hooks/use-analytics"
import AnimatedStats from "@/components/animated-stats"

import DevelopmentTimeline from "@/components/development-timeline"

export default function HomeClient() {
  const { trackEvent } = useAnalytics()
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white pb-16 lg:pb-0">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link focus-enhanced">
        Przejdź do głównej treści
      </a>

      {/* Live region for screen readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only" id="status-updates" />

      {/* Screen reader only heading for page structure - removed duplicate H1 for better SEO */}

      <Header />

      {/* Hero Section */}
      <main id="main-content">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-teal-50 to-teal-100">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 via-teal-600/5 to-teal-600/10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
                  <span className="text-teal-700">Wsparcie rozwoju</span>
                  <br />
                  <span className="text-gray-800">każdego dziecka</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  Pedagog specjalny z wieloletnim doświadczeniem. Specjalizuję się w terapii dzieci z
                  niepełnosprawnością intelektualną, spektrum autyzmu i trudnościami w nauce.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <EnhancedButton
                    size="lg"
                    variant="primary"
                    glow="strong"
                    onClick={() => { trackEvent("call_click", "CTA", "hero"); window.location.href = "tel:+48531509008"; }}
                    aria-describedby="phone-description"
                  >
                    <Phone className="mr-2 h-6 w-6" />
                    Zadzwoń teraz
                    <span id="phone-description" className="sr-only">
                      Numer telefonu: 531 509 008. Bezpłatna konsultacja telefoniczna.
                    </span>
                  </EnhancedButton>
                  <EnhancedButton
                    size="lg"
                    variant="secondary"
                    glow="strong"
                    onClick={() => { trackEvent("scroll_to_form", "CTA", "hero"); document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" }); }}
                    aria-label="Przewiń do formularza kontaktowego - bezpłatna konsultacja"
                  >
                    <MessageCircle className="mr-2 h-6 w-6" />
                    Bezpłatna konsultacja
                  </EnhancedButton>
                </div>

                <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <span>15+ lat doświadczenia</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-teal-600 mr-1" />
                    <span>Certyfikowany specjalista</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="relative z-10">
                  <UnifiedImage
                    src="/images/hero-children.png"
                    alt="Dzieci podczas terapii pedagogicznej"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-2xl"
                    priority
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-100 rounded-full opacity-60" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-100 rounded-full opacity-40" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Grid Layout */}
      <section id="services" className="py-20 bg-gradient-to-br from-teal-50 via-white to-teal-50 relative overflow-hidden" aria-labelledby="services-heading">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-teal-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-6 font-heading text-gray-900">
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Moje Usługi
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Profesjonalne wsparcie rozwoju dzieci z wykorzystaniem nowoczesnych metod terapeutycznych
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-7xl mx-auto">
            {/* Główna usługa - Terapia ręki - Hero Card */}
            <AnimatedSection delay={100}>
              <div className="relative mb-12 group">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group-hover:shadow-3xl transition-all duration-500">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-80 lg:h-96 overflow-hidden">
                      <UnifiedImage
                        src="/images/hand-therapy.png"
                        alt="Terapia ręki - usprawnianie motoryki małej"
                        width={700}
                        height={500}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                          <Hand className="inline h-5 w-5 mr-2" />
                          Najczęściej wybierana
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="text-3xl font-bold mb-2">120 zł</div>
                        <div className="text-sm opacity-90">50 minut sesji</div>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <h3 className="text-4xl font-bold mb-4 text-gray-900">Terapia ręki</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                          Specjalistyczna terapia usprawniająca motorykę małą, koordynację wzrokowo-ruchową oraz
                          przygotowująca do nauki pisania. Najczęściej wybierana przez rodziców.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">Motoryka mała</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Grafomotoryka</span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Koordynacja</span>
                        </div>
                      </div>
                      <div>
                        <Link
                          href="/uslugi/terapia-reki"
                          className="inline-flex items-center bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                        >
                          Dowiedz się więcej
                          <ArrowRight className="inline h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Pozostałe usługi - Modern Card Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Trening Umiejętności Społecznych */}
              <AnimatedSection delay={200}>
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <UnifiedImage
                        src="/focused-mind-training.png"
                        alt="Trening Umiejętności Społecznych"
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-purple-900/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-2 rounded-full text-xs font-semibold">
                          <Users className="inline h-4 w-4 mr-1" />
                          TUS
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-xl font-bold">80 zł</div>
                        <div className="text-xs opacity-90">50 min</div>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Trening Umiejętności Społecznych</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">
                        Program rozwijający umiejętności społeczne i komunikację interpersonalną.
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Komunikacja</span>
                        <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">Empatia</span>
                      </div>
                      <Link
                        href="/uslugi/trening-umiejetnosci-spolecznych"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl font-medium text-sm hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group"
                      >
                        Dowiedz się więcej
                        <ArrowRight className="inline h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Terapia pedagogiczna */}
              <AnimatedSection delay={300}>
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <UnifiedImage
                        src="/colorful-learning-tools.png"
                        alt="Terapia pedagogiczna"
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-2 rounded-full text-xs font-semibold">
                          <BookOpen className="inline h-4 w-4 mr-1" />
                          Terapia
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-xl font-bold">120 zł</div>
                        <div className="text-xs opacity-90">50 min</div>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Terapia pedagogiczna</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">
                        Wsparcie w nauce i rozwoju umiejętności edukacyjnych.
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Nauka</span>
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs">Rozwój</span>
                      </div>
                      <Link
                        href="/uslugi/terapia-pedagogiczna"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl font-medium text-sm hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 group"
                      >
                        Dowiedz się więcej
                        <ArrowRight className="inline h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* IAS Johansena */}
              <AnimatedSection delay={400}>
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-200 flex items-center justify-center p-4">
                        <div className="aspect-video w-full max-w-xs">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/uxCj7pgGD7M"
                            title="JIAS-trening słuchowy"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                          ></iframe>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3 py-2 rounded-full text-xs font-semibold">
                          <Headphones className="inline h-4 w-4 mr-1" />
                          IAS
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white bg-black/50 px-3 py-1 rounded-lg">
                        <div className="text-xl font-bold">350 zł</div>
                        <div className="text-xs opacity-90">diagnoza</div>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">IAS Johansena</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">
                        Innowacyjna metoda terapii słuchowej wspierająca rozwój mowy i koncentracji.
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">Słuch</span>
                        <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Mowa</span>
                      </div>
                      <Link
                        href="/uslugi/trening-sluchowy-johansena"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-xl font-medium text-sm hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 group"
                      >
                        Dowiedz się więcej
                        <ArrowRight className="inline h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Forbrain */}
              <AnimatedSection delay={500}>
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <UnifiedImage
                        src="/images/early-reading.png"
                        alt="Forbrain - nauka czytania"
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-orange-900/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-2 rounded-full text-xs font-semibold">
                          <BookOpen className="inline h-4 w-4 mr-1" />
                          Forbrain
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-xl font-bold">150 zł</div>
                        <div className="text-xs opacity-90">50 min</div>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Czytanie z Forbrain</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">
                        Innowacyjna metoda nauki czytania z technologią Forbrain.
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">Czytanie</span>
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">Technologia</span>
                      </div>
                      <Link
                        href="/uslugi/forbrain"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-xl font-medium text-sm hover:from-orange-700 hover:to-red-700 transition-all duration-300 group"
                      >
                        Dowiedz się więcej
                        <ArrowRight className="inline h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

            </div>

            {/* Call to Action Section */}
            <AnimatedSection delay={600}>
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Nie wiesz, która terapia będzie najlepsza dla Twojego dziecka?
                    </h3>
                    <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                      Umów się na bezpłatną konsultację. Wspólnie znajdziemy najlepsze rozwiązanie dostosowane do indywidualnych potrzeb Twojego dziecka.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <EnhancedButton
                        size="lg"
                        variant="secondary"
                        className="bg-white text-teal-600 hover:bg-gray-50 border-0"
                        onClick={() => { trackEvent("call_click", "CTA", "services_cta"); window.location.href = "tel:+48531509008"; }}
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        Zadzwoń teraz: 531 509 008
                      </EnhancedButton>
                      <EnhancedButton
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-teal-600"
                        onClick={() => { trackEvent("scroll_to_form", "CTA", "services_cta"); document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" }); }}
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Bezpłatna konsultacja
                      </EnhancedButton>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="section-divider wide" />

      {/* Simple Contact Section */}
      <section className="py-20 bg-white gradient-mesh-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Gotowy na pierwszą konsultację?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Zadzwoń lub napisz do nas, aby umówić się na bezpłatną konsultację. Wspólnie znajdziemy najlepsze
              rozwiązanie dla Twojego dziecka.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center flex flex-col h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4 mx-auto hover-glow">
                  <Phone className="h-8 w-8 text-teal-600 float-gentle" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Zadzwoń</h3>
                <p className="text-gray-600 mb-4 flex-grow">Porozmawiajmy o potrzebach Twojego dziecka</p>
                <EnhancedButton
                  variant="primary"
                  className="mt-auto"
                  onClick={() => { trackEvent("call_click", "CTA", "cards"); window.location.href = "tel:+48531509008"; }}
                  aria-label="Zadzwoń na numer 531 509 008"
                >
                  531 509 008
                </EnhancedButton>
              </div>

              <div className="text-center flex flex-col h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                  <MessageSquare className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4 flex-grow">Szybka wiadomość przez WhatsApp</p>
                <EnhancedButton
                  variant="secondary"
                  className="mt-auto"
                  onClick={() => { trackEvent("whatsapp_click", "CTA", "cards"); window.location.href = "https://wa.me/48531509008?text=Dzień%20dobry,%20chciałbym%20umówić%20się%20na%20konsultację"; }}
                  aria-label="Napisz wiadomość na WhatsApp w sprawie konsultacji"
                >
                  Napisz na WhatsApp
                </EnhancedButton>
              </div>

              <div className="text-center flex flex-col h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4 mx-auto">
                  <Mail className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-4 flex-grow">Wypełnij formularz kontaktowy</p>
                <EnhancedButton
                  variant="outline"
                  className="mt-auto"
                  onClick={() => { trackEvent("scroll_to_form", "CTA", "cards"); document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" }); }}
                  aria-label="Przejdź do formularza kontaktowego"
                >
                  Formularz
                </EnhancedButton>
              </div>

              <div className="text-center flex flex-col h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4 mx-auto">
                  <MapPin className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Odwiedź</h3>
                <p className="text-gray-600 mb-4 flex-grow">Umów się na wizytę w gabinecie</p>
                <EnhancedButton
                  variant="outline"
                  className="mt-auto"
                  onClick={() => document.getElementById("lokalizacja")?.scrollIntoView({ behavior: "smooth" })}
                  aria-label="Przewiń do sekcji z mapą dojazdu"
                >
                  Lokalizacja
                </EnhancedButton>
              </div>
            </div>

            <div className="bg-teal-50 rounded-lg p-8">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-teal-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Godziny pracy</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                <div>
                  <p>
                    <strong>Poniedziałek - Piątek:</strong> 9:00 - 18:00
                  </p>
                  <p>
                    <strong>Sobota:</strong> 9:00 - 14:00
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Niedziela:</strong> Zamknięte
                  </p>
                  <p>
                    <strong>Konsultacje telefoniczne:</strong> Codziennie 8:00 - 20:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <DevelopmentTimeline />

      <TestimonialsSection />

      <div className="section-divider wide" />

      <ServiceArticlesSection />

      <div className="section-divider" />

      <FaqSection />

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading text-teal-800 heading-enhanced center">
              Cennik usług
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={200}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-teal-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Usługa</th>
                        <th className="px-6 py-4 text-center font-semibold">Czas trwania</th>
                        <th className="px-6 py-4 text-center font-semibold">Cena</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">

                      <tr className="hover:bg-teal-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-teal-600 rounded-full mr-3"></div>
                            <div>
                              <div className="font-medium text-gray-900">Terapia ręki</div>
                              <div className="text-sm text-gray-500">Usprawnianie motoryki małej</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600">50 min</td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-lg font-semibold text-teal-600">120 zł</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-teal-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-teal-600 rounded-full mr-3"></div>
                            <div>
                              <div className="font-medium text-gray-900">Trening Umiejętności Społecznych</div>
                              <div className="text-sm text-gray-500">Rozwój kompetencji społecznych</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600">50 min</td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-lg font-semibold text-teal-600">80 zł</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-teal-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-teal-700 rounded-full mr-3"></div>
                            <div>
                              <div className="font-medium text-gray-900">Terapia pedagogiczna</div>
                              <div className="text-sm text-gray-500">Wsparcie w nauce</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600">50 min</td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-lg font-semibold text-teal-600">120 zł</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-teal-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-teal-700 rounded-full mr-3"></div>
                            <div>
                              <div className="font-medium text-gray-900">IAS Johansena</div>
                              <div className="text-sm text-gray-500">Diagnoza słuchowa</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600">diagnoza</td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-lg font-semibold text-teal-600">350 zł</span>
                        </td>
                      </tr>



                      <tr className="hover:bg-teal-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-orange-600 rounded-full mr-3"></div>
                            <div>
                              <div className="font-medium text-gray-900">Czytanie z Forbrain</div>
                              <div className="text-sm text-gray-500">Nauka czytania z technologią Forbrain</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600">50 min</td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-lg font-semibold text-orange-600">150 zł</span>
                        </td>
                      </tr>



                    </tbody>
                  </table>
                </div>

                <div className="bg-teal-50 px-6 py-4 border-t border-teal-100">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-teal-700">
                      <p className="font-medium">💡 Informacje dodatkowe:</p>
                      <p>• Pierwsza konsultacja bezpłatna (15 min)</p>
                      <p>• Możliwość pakietów terapeutycznych</p>
                    </div>
                    <div className="flex gap-2">
                      <EnhancedButton
                        size="sm"
                        variant="primary"
                        onClick={() => (window.location.href = "tel:+48531509008")}
                        aria-label="Zadzwoń, aby zapytać o cenę"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Zapytaj o cenę
                      </EnhancedButton>
                      <EnhancedButton
                        size="sm"
                        variant="secondary"
                        onClick={() => (window.location.href = "https://wa.me/48531509008?text=Dzień%20dobry,%20chciałbym%20zapytać%20o%20cennik%20usług")}
                        aria-label="Napisz na WhatsApp w sprawie cennika"
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        WhatsApp
                      </EnhancedButton>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Location Section */}
      <section id="lokalizacja" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading text-teal-800 heading-enhanced center">
              Jak do nas dojechać
            </h2>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Map */}
              <AnimatedSection animation="slide" direction="left" className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="h-96 lg:h-[450px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.8!2d23.0667!3d53.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f7b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2s23QQ%2B5C%20Pomigacze!5e0!3m2!1spl!2spl!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokalizacja gabinetu EduHustawka - 23QQ+5C Pomigacze"
                    ></iframe>
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact & Travel Info */}
              <AnimatedSection animation="slide" direction="right" delay={200}>
                <div className="space-y-6">
                  {/* Contact Info Card */}
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-6 text-gray-800">Kontakt</h3>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                          <Phone className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Telefon</p>
                          <a href="tel:+48531509008" className="text-teal-600 hover:text-teal-700 font-medium">
                            531 509 008
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                          <MessageSquare className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">WhatsApp</p>
                          <a
                            href="https://wa.me/48531509008"
                            className="text-green-600 hover:text-green-700 font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Napisz wiadomość
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                          <Clock className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Godziny pracy</p>
                          <p className="text-gray-600 text-sm">
                            Pon-Pt: 9:00-17:00<br />
                            Sobota: 9:00-13:00<br />
                            <span className="text-blue-600">Umów się telefonicznie</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Travel Info Card */}
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-6 text-gray-800">Jak dojechać</h3>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                          <span className="text-blue-600 font-bold text-lg">🚗</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Samochodem</h4>
                          <p className="text-gray-600 text-sm">
                            Z Białegostoku drogą krajową nr 19<br />
                            Parking bezpłatny przy domu
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                          <span className="text-green-600 font-bold text-lg">🚌</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Komunikacja</h4>
                          <p className="text-gray-600 text-sm">
                            Autobus linia 105 z Białegostoku<br />
                            Przystanek: &quot;Pomigacze Centrum&quot; (500m)
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                          <MapPin className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Adres</h4>
                          <p className="text-gray-600 text-sm">
                            Polna 17, 18-106 Pomigacze<br />
                            <span className="text-teal-600 font-mono text-xs">23QQ+5C Pomigacze</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-teal-50 rounded-lg">
                      <p className="text-teal-700 text-sm mb-4">
                        <strong>Wskazówka:</strong> Gabinet w domu prywatnym. Wejście od strony ogrodu, z prawej strony budynku. Tabliczka &quot;EDU HUSTAWKA&quot; na bramie.
                      </p>
                      <EnhancedButton
                        size="sm"
                        variant="primary"
                        className="w-full"
                        onClick={() => { trackEvent("maps_click", "CTA", "location_card"); window.open("https://maps.app.goo.gl/TpyfdHUWGnogFuLKA", "_blank"); }}
                        aria-label="Otwórz lokalizację w Google Maps"
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        Otwórz w Google Maps
                      </EnhancedButton>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <AnimatedStats />

      {/* Contact Section */}
      <section id="kontakt" className="py-16 bg-white gradient-mesh-subtle">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading text-teal-800 heading-enhanced center">
              Formularz kontaktowy
            </h2>
          </AnimatedSection>
          <ContactForm />
        </div>
      </section>

      {/* Floating Action Button for quick call */}
      <div className="fixed bottom-20 right-5 z-50 lg:hidden">
        <EnhancedButton
          size="icon"
          variant="primary"
          glow="strong"
          className="h-14 w-14 rounded-full shadow-lg pulse-ring"
          onClick={() => { trackEvent("call_click", "CTA", "fab"); window.location.href = "tel:+48531509008"; }}
          aria-label="Zadzwoń teraz"
        >
          <Phone className="h-6 w-6" />
        </EnhancedButton>
      </div>

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 lg:hidden">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-2">
            <EnhancedButton
              size="sm"
              variant="primary"
              className="flex-1"
              onClick={() => { trackEvent("call_click", "CTA", "sticky"); window.location.href = "tel:+48531509008"; }}
              aria-label="Zadzwoń teraz"
            >
              <Phone className="mr-2 h-4 w-4" />
              Zadzwoń
            </EnhancedButton>
            <EnhancedButton
              size="sm"
              variant="secondary"
              className="flex-1"
              onClick={() => { trackEvent("whatsapp_click", "CTA", "sticky"); window.location.href = "https://wa.me/48531509008?text=Dzień%20dobry,%20chciałbym%20umówić%20się%20na%20konsultację"; }}
              aria-label="Napisz na WhatsApp"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp
            </EnhancedButton>
            <EnhancedButton
              size="sm"
              variant="outline"
              className="flex-1"
              onClick={() => { trackEvent("scroll_to_form", "CTA", "sticky"); document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" }); }}
              aria-label="Przejdź do formularza"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Formularz
            </EnhancedButton>
          </div>
        </div>
      </div>
      </main>

      <Footer />
    </div>
  )
}
