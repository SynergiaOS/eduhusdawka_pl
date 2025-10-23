"use client"

import AnimatedSection from "@/components/animations/animated-section"
import UnifiedImage from "@/components/media/unified-image"
import {
  LazyTestimonialsSection,
  LazyFAQSection,
  LazyContactForm,
  LazyPricingSection,
  LazyMobileCTAButtons
} from "@/components/loading/lazy-components"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

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
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { useAnalytics } from "@/hooks/use-analytics"


export default function HomeClient() {
  const { trackEvent } = useAnalytics()
  return (
    <div className="min-h-screen bg-gradient-to-br from-eduhus-bg-light to-white pb-16 lg:pb-0">
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-eduhus-bg-light via-white to-eduhus-bg-light">
        <div className="absolute inset-0 bg-gradient-to-br from-eduhus-secondary/15 via-eduhus-secondary/10 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
                  <span className="text-eduhus-accent">Wsparcie rozwoju</span>
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
                    <Star className="h-5 w-5 text-eduhus-accent mr-1" />
                    <span>15+ lat doświadczenia</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-eduhus-accent mr-1" />
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
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-eduhus-accent-100 rounded-full opacity-60" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-eduhus-accent-100 rounded-full opacity-40" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services & Pricing Section - Unified 2025 Design */}
      <section id="services" className="py-12 bg-white relative overflow-hidden" aria-labelledby="services-heading">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-6 font-heading text-gray-900">
                Moje <span className="text-eduhus-accent">Usługi</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Profesjonalne wsparcie rozwoju dzieci z wykorzystaniem nowoczesnych metod terapeutycznych
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-7xl mx-auto">
            {/* Główna usługa - Terapia ręki - Hero Card */}
            <AnimatedSection delay={100}>
              <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-gradient-to-r from-eduhus-secondary to-eduhus-accent rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
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
                        <div className="bg-gradient-to-r from-eduhus-secondary to-eduhus-accent text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                          <Hand className="inline h-5 w-5 mr-2" />
                          Najczęściej wybierana
                        </div>
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
                          <span className="px-3 py-1 bg-eduhus-accent-100 text-eduhus-accent rounded-full text-sm font-medium">Motoryka mała</span>
                          <span className="px-3 py-1 bg-eduhus-bg-light text-eduhus-accent rounded-full text-sm font-medium">Grafomotoryka</span>
                          <span className="px-3 py-1 bg-eduhus-bg-light text-eduhus-accent rounded-full text-sm font-medium">Koordynacja</span>
                        </div>
                      </div>
                      <div>
                        <Link
                          href="/uslugi/terapia-reki"
                          className="inline-flex items-center bg-eduhus-accent hover:opacity-90 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
                        >
                          Umów terapię ręki
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
                  <div className="absolute inset-0 bg-gradient-to-br from-eduhus-secondary to-eduhus-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <UnifiedImage
                        src="/focused-mind-training.png"
                        alt="Trening Umiejętności Społecznych"
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-eduhus-secondary/70 via-eduhus-secondary/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="bg-eduhus-accent text-white px-3 py-2 rounded-full text-xs font-semibold">
                          <Users className="inline h-4 w-4 mr-1" />
                          TUS
                        </div>
                      </div>

                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Trening Umiejętności Społecznych</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">
                        Program rozwijający umiejętności społeczne i komunikację interpersonalną.
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        <span className="px-2 py-1 bg-eduhus-accent-100 text-eduhus-accent rounded-full text-xs">Komunikacja</span>
                        <span className="px-2 py-1 bg-eduhus-bg-light text-eduhus-accent rounded-full text-xs">Empatia</span>
                      </div>
                      <Link
                        href="/uslugi/trening-umiejetnosci-spolecznych"
                        className="inline-flex items-center justify-center bg-eduhus-accent hover:opacity-90 text-white px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 group"
                      >
                        Umów TUS
                        <ArrowRight className="inline h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Terapia pedagogiczna */}
              <AnimatedSection delay={300}>
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-eduhus-secondary to-eduhus-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <UnifiedImage
                        src="/colorful-learning-tools.png"
                        alt="Terapia pedagogiczna"
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-eduhus-secondary/70 via-eduhus-secondary/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="bg-eduhus-accent text-white px-3 py-2 rounded-full text-xs font-semibold">
                          <BookOpen className="inline h-4 w-4 mr-1" />
                          Terapia
                        </div>
                      </div>

                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Terapia pedagogiczna</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">
                        Wsparcie w nauce i rozwoju umiejętności edukacyjnych.
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        <span className="px-2 py-1 bg-eduhus-bg-light text-eduhus-accent rounded-full text-xs">Nauka</span>
                        <span className="px-2 py-1 bg-eduhus-accent-100 text-eduhus-accent rounded-full text-xs">Rozwój</span>
                      </div>
                      <Link
                        href="/uslugi/terapia-pedagogiczna"
                        className="inline-flex items-center justify-center bg-eduhus-accent hover:opacity-90 text-white px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 group"
                      >
                        Zarezerwuj terapię
                        <ArrowRight className="inline h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* IAS Johansena */}
              <AnimatedSection delay={400}>
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-eduhus-secondary to-eduhus-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-eduhus-bg-light to-eduhus-secondary/40 flex items-center justify-center p-4">
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
                        <div className="bg-eduhus-accent text-white px-3 py-2 rounded-full text-xs font-semibold">
                          <Headphones className="inline h-4 w-4 mr-1" />
                          IAS
                        </div>
                      </div>

                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">IAS Johansena</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">
                        Innowacyjna metoda terapii słuchowej wspierająca rozwój mowy i koncentracji.
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        <span className="px-2 py-1 bg-eduhus-accent-100 text-eduhus-accent rounded-full text-xs">Słuch</span>
                        <span className="px-2 py-1 bg-eduhus-bg-light text-eduhus-accent rounded-full text-xs">Mowa</span>
                      </div>
                      <Link
                        href="/uslugi/trening-sluchowy-johansena"
                        className="inline-flex items-center justify-center bg-eduhus-accent hover:opacity-90 text-white px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 group"
                      >
                        Umów diagnozę IAS
                        <ArrowRight className="inline h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Forbrain */}
              <AnimatedSection delay={500}>
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-eduhus-accent to-eduhus-secondary rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <UnifiedImage
                        src="/images/early-reading.png"
                        alt="Forbrain - nauka czytania"
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-eduhus-secondary/70 via-eduhus-secondary/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="bg-eduhus-accent text-white px-3 py-2 rounded-full text-xs font-semibold">
                          <BookOpen className="inline h-4 w-4 mr-1" />
                          Forbrain
                        </div>
                      </div>

                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Czytanie z Forbrain</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">
                        Innowacyjna metoda nauki czytania z technologią Forbrain.
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        <span className="px-2 py-1 bg-eduhus-bg-light text-eduhus-accent rounded-full text-xs">Czytanie</span>
                        <span className="px-2 py-1 bg-eduhus-accent-100 text-eduhus-accent rounded-full text-xs">Technologia</span>
                      </div>
                      <Link
                        href="/uslugi/forbrain"
                        className="inline-flex items-center justify-center bg-eduhus-accent hover:opacity-90 text-white px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 group"
                      >
                        Rozpocznij naukę
                        <ArrowRight className="inline h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

            </div>


          </div>
        </div>
      </section>



      {/* Modern Consultation CTA Section - 2025 Design */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              {/* Modern Card Design */}
              <div className="bg-gradient-to-br from-eduhus-bg-light to-white rounded-3xl p-8 md:p-12 border border-eduhus-accent-100 shadow-sm">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-eduhus-accent rounded-2xl mb-6">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    Nie wiesz, która terapia będzie najlepsza?
                  </h2>

                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Umów się na <strong className="text-eduhus-accent">bezpłatną konsultację</strong>. Wspólnie znajdziemy najlepsze rozwiązanie dla Twojego dziecka.
                  </p>

                  {/* Single Primary CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <EnhancedButton
                      size="lg"
                      className="bg-eduhus-accent hover:opacity-90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => { trackEvent("consultation_call_click", "CTA", "free_consultation"); window.location.href = "tel:+48531509008"; }}
                      aria-label="Zadzwoń w sprawie bezpłatnej konsultacji"
                    >
                      <Phone className="mr-3 h-5 w-5" />
                      Zadzwoń: 531 509 008
                    </EnhancedButton>

                    <EnhancedButton
                      size="lg"
                      variant="outline"
                      className="border-2 border-eduhus-accent-600 text-eduhus-accent hover:bg-eduhus-accent hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                      onClick={() => { trackEvent("consultation_whatsapp_click", "CTA", "free_consultation"); window.location.href = "https://wa.me/48531509008?text=Dzień%20dobry,%20chciałbym%20umówić%20się%20na%20bezpłatną%20konsultację"; }}
                      aria-label="Napisz na WhatsApp w sprawie bezpłatnej konsultacji"
                    >
                      <MessageSquare className="mr-3 h-5 w-5" />
                      WhatsApp
                    </EnhancedButton>
                  </div>

                  {/* Benefits - Clean Design */}
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-eduhus-bg-light rounded-xl flex items-center justify-center mb-3">
                        <CheckCircle className="h-6 w-6 text-eduhus-accent" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">Bezpłatna konsultacja</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-eduhus-bg-light rounded-xl flex items-center justify-center mb-3">
                        <Clock className="h-6 w-6 text-eduhus-accent" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">30 minut rozmowy</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-eduhus-bg-light rounded-xl flex items-center justify-center mb-3">
                        <Users className="h-6 w-6 text-eduhus-secondary" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">Indywidualne podejście</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <LazyTestimonialsSection />



      <div className="section-divider" />

      <LazyFAQSection />

      <LazyPricingSection />

      {/* Contact & Location Section - Unified */}
      <section id="kontakt" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-gray-900">
                Kontakt i <span className="text-eduhus-accent">Lokalizacja</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Skontaktuj się ze mną lub odwiedź gabinet w Pomigaczach
              </p>
            </div>
          </AnimatedSection>

          <div className="w-full">
            <div className="grid lg:grid-cols-4 gap-8 items-stretch">
              {/* Map */}
              <AnimatedSection animation="slide" direction="left" className="lg:col-span-3">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="h-[500px] lg:h-[600px]">
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
                        <div className="w-10 h-10 bg-eduhus-accent-100 rounded-lg flex items-center justify-center mr-4">
                          <Phone className="h-5 w-5 text-eduhus-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Telefon</p>
                          <a href="tel:+48531509008" className="text-eduhus-accent hover:text-eduhus-accent font-medium">
                            531 509 008
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-eduhus-bg-light rounded-lg flex items-center justify-center mr-4">
                          <MessageSquare className="h-5 w-5 text-eduhus-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">WhatsApp</p>
                          <a
                            href="https://wa.me/48531509008"
                            className="text-eduhus-accent hover:text-eduhus-accent font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Napisz wiadomość
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-eduhus-bg-light rounded-lg flex items-center justify-center mr-4 mt-1">
                          <Clock className="h-5 w-5 text-eduhus-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Godziny pracy</p>
                          <p className="text-gray-600 text-sm">
                            Pon-Pt: 9:00-17:00<br />
                            Sobota: 9:00-13:00<br />
                            <span className="text-eduhus-accent">Umów się telefonicznie</span>
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
                        <div className="w-10 h-10 bg-eduhus-bg-light rounded-lg flex items-center justify-center mr-4 mt-1">
                          <span className="text-eduhus-accent font-bold text-lg">🚗</span>
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
                        <div className="w-10 h-10 bg-eduhus-bg-light rounded-lg flex items-center justify-center mr-4 mt-1">
                          <span className="text-eduhus-accent font-bold text-lg">🚌</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Komunikacja</h4>
                          <p className="text-gray-600 text-sm">
                            Autobus linia 105 z Białegostoku<br />
                            Przystanek: &ldquo;Pomigacze Centrum&rdquo; (500m)
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-eduhus-accent-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                          <MapPin className="h-5 w-5 text-eduhus-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Adres</h4>
                          <p className="text-gray-600 text-sm">
                            Polna 17, 18-106 Pomigacze<br />
                            <span className="text-eduhus-accent font-mono text-xs">23QQ+5C Pomigacze</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-eduhus-accent-50 rounded-lg">
                      <p className="text-eduhus-accent text-sm mb-4">
                        <strong>Wskazówka:</strong> Gabinet w domu prywatnym. Wejście od strony ogrodu, z prawej strony budynku. Tabliczka &ldquo;EDU HUSTAWKA&rdquo; na bramie.
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

          {/* Contact Form */}
          <div className="mt-16">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                  Formularz kontaktowy
                </h3>
                <p className="text-gray-600">
                  Napisz do mnie - odpowiem w ciągu 24 godzin
                </p>
              </div>
            </AnimatedSection>
            <LazyContactForm />
          </div>
        </div>
      </section>

      <LazyMobileCTAButtons />
      </main>

      <Footer />
    </div>
  )
}
