import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import AnimatedSection from "@/components/animations/animated-section"

import Image from "next/image"
import { Phone, CheckCircle, Heart, Brain, Target } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terapia dla dzieci z autyzmem | EduHustawka",
  description:
    "Profesjonalna terapia dla dzieci z autyzmem w Pomigaczach. Indywidualne podejście, rozwój umiejętności społecznych i komunikacyjnych. Wspieramy całą rodzinę.",
  keywords: "terapia dla dzieci z autyzmem, autyzm, Pomigacze, rozwój umiejętności społecznych, terapia behawioralna",
}

export default function TerapiaDzieciZAutyzmemPage() {
  return (
    <div className="min-h-screen bg-eduhus-bg-white">
      <Header />

      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-4">
            {/* Hero Section */}
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="bg-eduhus-bg-light p-4 rounded-full w-fit">
                      <Heart className="h-12 w-12 text-eduhus-icon-autism" />
                    </div>
                    <div>
                      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">
                        Terapia dla dzieci z <span className="text-eduhus-icon-autism">autyzmem</span>
                      </h1>
                      <p className="text-lg sm:text-xl text-eduhus-icon-autism font-medium">Indywidualne podejście do rozwoju Twojego dziecka</p>
                    </div>
                  </div>

                  <blockquote className="text-base sm:text-lg italic text-gray-900 border-l-4 border-eduhus-icon-autism pl-4 mb-8 leading-relaxed">
                    &ldquo;Każde dziecko z autyzmem ma unikalny potencjał. Naszym celem jest odkrycie i rozwinięcie tego potencjału w bezpiecznym i wspierającym środowisku.&rdquo;
                  </blockquote>

                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="flex items-center gap-2 bg-eduhus-bg-light px-4 py-2 rounded-full">
                      <CheckCircle className="w-5 h-5 text-eduhus-icon-autism" />
                      <span className="text-eduhus-icon-autism font-medium">Indywidualne podejście</span>
                    </div>
                    <div className="flex items-center gap-2 bg-eduhus-bg-light px-4 py-2 rounded-full">
                      <CheckCircle className="w-5 h-5 text-eduhus-icon-autism" />
                      <span className="text-eduhus-icon-autism font-medium">Wspieramy całą rodzinę</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:+48531509008">
                      <button className="w-full sm:w-auto bg-eduhus-accent hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        Zadzwoń: 531 509 008
                      </button>
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-eduhus-secondary to-purple-100 p-8 rounded-2xl shadow-2xl">
                    <Image
                      src="/images/autism-therapy.png"
                      alt="Terapia dla dzieci z autyzmem"
                      width={800}
                      height={600}
                      className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                      sizes="(max-width: 768px) 100vw, 800px"
                      priority={true}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                    <div className="text-center mt-4">
                      <div className="inline-flex items-center bg-eduhus-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                        <Heart className="w-4 h-4 mr-2" />
                        Profesjonalna terapia
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Main Content */}
            <AnimatedSection>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-12">
                <div className="bg-eduhus-bg-light border border-eduhus-accent p-4 rounded-lg mb-6">
                  <div className="flex items-start">
                    <Heart className="h-6 w-6 text-eduhus-icon-autism mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-eduhus-icon-autism mb-2">
                        Autyzm to nie ograniczenie, to inny sposób postrzegania świata
                      </h3>
                      <p className="text-eduhus-icon-autism text-sm">
                        Dzieci z autyzmem potrzebują specjalistycznego podejścia, które uwzględnia ich unikalne potrzeby i potencjał.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Czym jest terapia */}
            <AnimatedSection className="py-16 px-4 bg-white" delay={200}>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Czym jest terapia dla dzieci z autyzmem?
                </h2>
                <div className="bg-eduhus-bg-light p-8 rounded-2xl mb-8">
                  <p className="text-lg text-gray-900 leading-relaxed">
                    Terapia dla dzieci z autyzmem to specjalistyczne wsparcie dostosowane do unikalnych potrzeb
                    każdego dziecka ze spektrum autyzmu. Koncentruje się na rozwoju komunikacji, umiejętności społecznych,
                    regulacji emocjonalnej i codziennych umiejętności życiowych.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Jak przebiega terapia */}
            <AnimatedSection className="py-16 px-4" delay={300}>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                  Jak przebiega terapia?
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="w-16 h-16 bg-eduhus-bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-eduhus-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Ocena</h3>
                    <p className="text-gray-900">
                      Kompleksowa diagnoza rozwoju dziecka i identyfikacja obszarów wymagających wsparcia
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="w-16 h-16 bg-eduhus-bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-eduhus-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Plan</h3>
                    <p className="text-gray-900">
                      Opracowanie indywidualnego programu terapeutycznego dostosowanego do potrzeb dziecka
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="w-16 h-16 bg-eduhus-bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-eduhus-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Terapia</h3>
                    <p className="text-gray-900">
                      Systematyczna praca nad rozwojem umiejętności z uwzględnieniem zainteresowań dziecka
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Dla kogo */}
            <AnimatedSection className="py-16 px-4 bg-gray-50" delay={400}>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                  Dla kogo jest terapia?
                </h2>

                <div className="prose prose-blue max-w-none">
                  <p className="mb-6 text-lg">
                    <strong>Rodzicu, jeśli Twoje dziecko:</strong>
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-eduhus-bg-light p-4 rounded-lg">
                      <h4 className="font-semibold text-eduhus-icon-adhd mb-3">Sygnały, które mogą wskazywać na potrzebę terapii:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-eduhus-bg-light0 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Ma trudności z komunikacją werbalną i niewerbalną</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-eduhus-bg-light0 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Wykazuje powtarzające się zachowania i rytuały</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-eduhus-bg-light0 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Ma ograniczone zainteresowania i stereotypie</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-eduhus-bg-light0 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Ma nadwrażliwość lub niedowrażliwość sensoryczną</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-eduhus-bg-light0 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Ma trudności z interakcją społeczną</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-eduhus-bg-light0 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Ma opóźnienie w rozwoju mowy</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-eduhus-bg-light p-4 rounded-lg">
                      <h4 className="font-semibold text-eduhus-accent-800 mb-3">Cele terapii dla dzieci z autyzmem:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-eduhus-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span>Rozwój komunikacji werbalnej i niewerbalnej</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-eduhus-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span>Poprawa umiejętności społecznych</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-eduhus-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span>Redukcja problemowych zachowań</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-eduhus-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span>Rozwój umiejętności adaptacyjnych</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-eduhus-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span>Poprawa integracji sensorycznej</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-eduhus-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span>Wzrost niezależności w codziennych czynnościach</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mt-8 mb-4 text-eduhus-accent">Metody terapii</h3>
                  <div className="bg-eduhus-bg-light p-6 rounded-lg mb-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-eduhus-accent mb-3">Techniki używane w terapii:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Terapia behawioralna (ABA)</li>
                          <li>• Terapia zajęciowa (OT)</li>
                          <li>• Terapia mowy i języka (SLT)</li>
                          <li>• Terapia integracji sensorycznej</li>
                          <li>• Terapia PECS (Picture Exchange Communication System)</li>
                          <li>• Terapia Floortime</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-eduhus-accent mb-3">Podejście terapeutyczne:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Indywidualne planowanie terapii</li>
                          <li>• Współpraca z rodziną</li>
                          <li>• Środowiskowa terapia naturalna</li>
                          <li>• Uwzględnienie zainteresowań dziecka</li>
                          <li>• Stosowanie pozytywnego wzmocnienia</li>
                          <li>• Regularna ocena postępów</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mt-6 mb-4 text-eduhus-accent">Przebieg terapii</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ol className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-eduhus-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <strong className="text-eduhus-accent">Ocena wstępna</strong>
                          <p className="text-gray-900 text-sm mt-1">
                            Kompleksowa diagnoza rozwoju dziecka i identyfikacja obszarów wymagających wsparcia
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-eduhus-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <strong className="text-eduhus-accent">Plan terapii</strong>
                          <p className="text-gray-900 text-sm mt-1">
                            Opracowanie indywidualnego planu terapeutycznego dostosowanego do potrzeb dziecka
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-eduhus-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <strong className="text-eduhus-accent">Sesje terapeutyczne</strong>
                          <p className="text-gray-900 text-sm mt-1">
                            Regularne spotkania terapeutyczne z wykorzystaniem wybranych metod i technik
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-eduhus-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <strong className="text-eduhus-accent">Współpraca z rodziną</strong>
                          <p className="text-gray-900 text-sm mt-1">
                            Szkolenie rodziców i opiekunów w zakresie technik wsparcia dziecka w domu
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>

                  <h3 className="text-xl font-semibold mt-6 mb-4 text-eduhus-accent">Oczekiwane efekty</h3>
                  <p className="mb-4">Profesjonalna terapia dla dzieci z autyzmem przynosi wymierne korzyści:</p>
                  <ul className="list-disc list-inside mb-6 space-y-1">
                    <li>Poprawa komunikacji werbalnej i niewerbalnej</li>
                    <li>Zwiększenie umiejętności społecznych i interakcji z innymi</li>
                    <li>Redukcja problemowych zachowań</li>
                    <li>Wzrost niezależności w codziennych czynnościach</li>
                    <li>Lepsza integracja sensoryczna</li>
                    <li>Większa pewność siebie i samoocena</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Cennik */}
            <AnimatedSection className="py-16 px-4 bg-white" delay={600}>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Cennik</h2>

                <div className="bg-eduhus-bg-light p-8 rounded-2xl max-w-md mx-auto">
                  <h3 className="text-2xl font-semibold mb-6 eduhus-text-dark">Terapia dla dzieci z autyzmem</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="eduhus-text-main">Sesja (50 min)</span>
                      <span className="text-2xl font-bold text-eduhus-accent">150 zł</span>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-sm eduhus-text-light mb-4">
                      💡 Indywidualne podejście do każdego dziecka
                    </p>
                    <a href="tel:+48531509008" className="inline-block">
                      <button className="bg-eduhus-accent hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                        📞 Zadzwoń: 531 509 008
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  )
}