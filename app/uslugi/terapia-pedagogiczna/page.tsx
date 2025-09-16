import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import OptimizedImage from "@/components/optimized-image"
import { BookOpen, Target, Heart, Users, CheckCircle } from "lucide-react"
import { PageMain, Container, Section, H1, H2, H3, presets } from "@/components/layout-primitives"

export const metadata: Metadata = {
  title: "Terapia Pedagogiczna | EduHustawka",
  description: "Skuteczne wsparcie dla dzieci z trudnościami w nauce. Terapia pedagogiczna w Pomigaczach. Indywidualne podejście, nowoczesne metody.",
  keywords: "terapia pedagogiczna, trudności w nauce, czytanie, pisanie, liczenie, dysleksja, ADHD, koncentracja, 120 zł, Pomigacze",
}

export default function TerapiaPedagogicznaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <Header />
      
      <PageMain>
        {/* Hero Section */}
        <Section>
          <Container>
            <div className={presets.gridHero}>
              <div>
                <H1>
                  Terapia <span className="text-teal-600">Pedagogiczna</span>
                </H1>
                <p className="text-xl text-gray-600 mb-8">
                  Skuteczne wsparcie dla dzieci z trudnościami w nauce i rozwoju
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-teal-700">Indywidualne podejście</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-700">Nowoczesne metody</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <OptimizedImage
                  src="/child-learning-support.jpg"
                  alt="Dziecko podczas terapii pedagogicznej"
                  width={600}
                  height={400}
                  className={presets.mediaBase}
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* Czym jest terapia */}
        <Section className="bg-white">
          <Container>
            <H2 className="text-center">
              Czym jest terapia pedagogiczna?
            </H2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Terapia pedagogiczna to specjalistyczne wsparcie dla dzieci, które mają trudności w nauce i rozwoju. 
              Pomaga przezwyciężać trudności w czytaniu, pisaniu, liczeniu oraz innych czynnościach szkolnych, 
              a także wspiera rozwój emocjonalny i społeczny.
            </p>
          </Container>
        </Section>

        {/* Dla kogo */}
        <Section>
          <Container>
            <H2 className="text-center">
              Dla kogo jest terapia pedagogiczna?
            </H2>
            
            <div className={presets.gridCards}>
              {[
                "Trudności w nauce (czytanie, pisanie, liczenie)",
                "Inteligencja przeciętna lub niższa niż przeciętna", 
                "Problemy w funkcjach wzrokowych i słuchowych",
                "Opóźniony rozwój ruchowy i trudności z lateralizacją",
                "Zaburzenia mowy",
                "Trudności w koncentracji i pamięci",
                "Zaburzenia emocjonalne i trudności społeczne",
                "Trudności matematyczne i logiczne myślenie",
                "Problemy wychowawcze i obniżona motywacja"
              ].map((item, index) => (
                <div key={index} className={presets.cardEmphasisTeal}>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Cele terapii */}
        <Section className="bg-teal-50">
          <Container>
            <H2 className="text-center">
              Cele terapii pedagogicznej
            </H2>
            
            <div className={presets.gridTwoCol}>
              {[
                {
                  icon: <Target className="w-8 h-8 text-teal-600" />,
                  title: "Wspieranie rozwoju",
                  description: "Rozwój funkcji poznawczych i motorycznych"
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-teal-600" />,
                  title: "Wyrównywanie braków",
                  description: "Uzupełnianie wiadomości i umiejętności"
                },
                {
                  icon: <Heart className="w-8 h-8 text-teal-600" />,
                  title: "Eliminowanie niepowodzeń",
                  description: "Redukcja niepowodzeń szkolnych i ich konsekwencji"
                },
                {
                  icon: <Users className="w-8 h-8 text-teal-600" />,
                  title: "Budowanie pewności siebie",
                  description: "Wzmacnianie motywacji i rozwijanie talentów"
                }
              ].map((goal, index) => (
                <div key={index} className={presets.cardBase}>
                  <div className="flex items-center gap-4 mb-4">
                    {goal.icon}
                    <H3>{goal.title}</H3>
                  </div>
                  <p className="text-gray-600">{goal.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Cennik */}
        {/* Usunięto sekcję cennika */}
      </PageMain>
      
      <Footer />
    </div>
  )
}