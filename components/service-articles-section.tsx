"use client"

import Link from "next/link"
import { ArrowRight, Clock, User, Brain, Hand } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import UnifiedImage from "@/components/unified-image"

interface Article {
  id: string
  title: string
  excerpt: string
  readTime: string
  category: string
  icon: React.ReactNode
  href: string
  imageUrl: string
}

const serviceArticles: Article[] = [
  {
    id: "kiedy-dziecko-potrzebuje-terapii-reki",
    title: "Kiedy dziecko potrzebuje terapii ręki?",
    excerpt: "Poznaj sygnały, które mogą wskazywać na potrzebę wsparcia w rozwoju motoryki małej u Twojego dziecka.",
    readTime: "5 min",
    category: "Terapia ręki",
    icon: <Hand className="w-5 h-5" />,
    href: "/artykuly/kiedy-dziecko-potrzebuje-terapii-reki",
    imageUrl: "/images/hand-therapy.png"
  },
  {
    id: "problemy-z-koncentracja-u-dzieci",
    title: "Jak rozpoznać problemy z koncentracją?",
    excerpt: "Dowiedz się, jak odróżnić normalne zachowania dziecka od sygnałów wskazujących na trudności z uwagą.",
    readTime: "4 min",
    category: "Terapia pedagogiczna",
    icon: <Brain className="w-5 h-5" />,
    href: "/artykuly/problemy-z-koncentracja-u-dzieci",
    imageUrl: "/images/hero-children.png"
  },
  {
    id: "umiejetnosci-spoleczne-dlaczego-wazne",
    title: "Dlaczego umiejętności społeczne są kluczowe?",
    excerpt: "Poznaj znaczenie TUS w rozwoju dziecka i dowiedz się, kiedy warto rozważyć trening umiejętności społecznych.",
    readTime: "6 min",
    category: "TUS",
    icon: <User className="w-5 h-5" />,
    href: "/artykuly/umiejetnosci-spoleczne-dlaczego-wazne",
    imageUrl: "/images/hero-children.png"
  }
]

export default function ServiceArticlesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Artykuły o terapii
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Praktyczne porady i informacje o rozwoju dziecka oraz naszych metodach terapeutycznych
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceArticles.map((article, index) => (
              <AnimatedSection key={article.id} delay={index * 100}>
                <Link href={article.href} className="group block">
                  <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-teal-200 h-full">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <UnifiedImage
                        src={article.imageUrl}
                        alt={article.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                          {article.icon}
                          {article.category}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime} czytania
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 mb-4 flex-grow line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center text-teal-600 font-medium group-hover:text-teal-700 transition-colors">
                        Czytaj więcej
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection delay={400}>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Masz pytania o rozwój swojego dziecka?
              </p>
              <Link href="/rezerwacja">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Umów bezpłatną konsultację
                </button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
