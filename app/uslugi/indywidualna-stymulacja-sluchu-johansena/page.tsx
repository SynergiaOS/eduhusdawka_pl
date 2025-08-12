import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Headphones, Home, Clock, Users, CheckCircle, Star, Target, Brain, Volume2 } from "lucide-react"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Indywidualna Stymulacja Słuchu dr K. Johansena (IAS) | EduHustawka",
  description: "IAS to skuteczna metoda terapii słuchowej podobna do Tomatisa. Wspiera rozwój słuchu, mowy i koncentracji w warunkach domowych.",
  keywords: "IAS, Johansen, stymulacja słuchu, terapia słuchowa, Tomatis, rozwój mowy, koncentracja, autyzm, dysleksja, ADHD, 350 zł, 280 zł, Pomigacze, terapia w domu",
}

export default function IASJohansenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Headphones className="h-12 w-12 text-purple-600" />
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                      Indywidualna Stymulacja Słuchu <span className="text-purple-600">dr K. Johansena</span>
                    </h1>
                    <p className="text-xl text-purple-600">Skuteczna metoda wspierająca rozwój słuchu, mowy i koncentracji</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Indywidualna Stymulacja Słuchu (IAS) to terapia słuchowa podobna do metody Tomatisa, 
                  różniąca się jednak sposobem realizacji. Odbywa się w warunkach domowych i opiera się 
                  na słuchaniu specjalnie nagranej muzyki, dostosowanej do indywidualnych potrzeb.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                    <Home className="w-5 h-5 text-purple-600" />
                    <span className="text-purple-700">Terapia w domu</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-700">Indywidualny program</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <OptimizedImage
                  src="/ias-johansen-therapy.jpg"
                  alt="Dziecko podczas terapii IAS Johansena ze słuchawkami"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Czym jest IAS */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={200}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Czym jest metoda Johansena IAS?
            </h2>
            
            <div className="bg-purple-50 p-8 rounded-2xl mb-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Indywidualna Stymulacja Słuchu (IAS) to terapia słuchowa oparta na słuchaniu specjalnie 
                nagranej muzyki, dostosowanej do indywidualnych potrzeb danej osoby. Program jest 
                przygotowywany na podstawie szczegółowej diagnozy słuchowej.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <Volume2 className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Bez specjalistycznego sprzętu</h3>
                </div>
                <p className="text-gray-600">
                  Wystarczą zewnętrzne słuchawki przewodowe oraz odtwarzacz płyt CD lub telefon/tablet
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Krótkie sesje</h3>
                </div>
                <p className="text-gray-600">
                  Codzienna sesja trwa ok. 10 minut, zawsze o tej samej porze
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Kontrolowane postępy</h3>
                </div>
                <p className="text-gray-600">
                  Postępy kontrolowane co 4–10 tygodni. Program trwa 6–18 miesięcy
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Dla kogo */}
        <AnimatedSection className="py-16 px-4 bg-gray-50" delay={300}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Dla kogo przeznaczona jest terapia IAS?
            </h2>
            
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600">
                Terapia jest skuteczna dla dzieci, młodzieży i dorosłych z problemami w zakresie 
                słuchania, mówienia, czytania i pisania. Może być stosowana także u niemowląt.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Dzieci i dorośli z trudnościami w rozwoju mowy",
                "Osoby z dysleksją i trudnościami szkolnymi",
                "Dzieci z ADHD i zaburzeniami koncentracji",
                "Osoby z problemami w rozumieniu poleceń",
                "Dzieci z autyzmem i wadami genetycznymi",
                "Osoby z nadwrażliwością słuchową",
                "Osoby z porażeniem mózgowym",
                "Dzieci z nieprawidłową artykulacją"
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Na czym polega */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={400}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Na czym polega terapia?
            </h2>
            
            <div className="space-y-8">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                  <Brain className="w-6 h-6 mr-2" />
                  Diagnoza
                </h3>
                <p className="text-gray-700 mb-3">Diagnoza opiera się na:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Badaniu audiometrii tonalnej</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Testach mowy utrudnionej, w tym teście dychotycznym</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ocenie przetwarzania bodźców słuchowych</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                  <Headphones className="w-6 h-6 mr-2" />
                  Program terapeutyczny
                </h3>
                <p className="text-gray-700">
                  Program to indywidualnie filtrowana muzyka instrumentalna, nagrywana na płyty CD 
                  lub w aplikacji. Osoba objęta terapią słucha muzyki przez słuchawki, codziennie 
                  przez 10 minut. Postępy są kontrolowane co 4–8 tygodni, a każdorazowo wydawana 
                  jest nowa płyta dostosowana do aktualnych potrzeb.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Procedura */}
        <AnimatedSection className="py-16 px-4 bg-gray-50" delay={500}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Procedura badania i terapii
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Ustalenie terminu pierwszego spotkania</h3>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Badanie (ok. 2 godziny)</h3>
                </div>
                <ul className="ml-14 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Diagnoza wstępna, wywiad</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Test dychotyczny Johansena</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Badanie lateralizacji</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Audiometryczne badanie słuchu jedno- i obuuszne</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Przygotowanie indywidualnego programu</h3>
                </div>
                <p className="ml-14 text-gray-700">
                  Na podstawie diagnozy przygotowywana jest płyta CD do codziennego słuchania w domu
                  (ok. 10–15 minut dziennie przez słuchawki). Pierwszy etap treningu trwa od 4 do 8 tygodni.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    4
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Diagnoza międzyetapowa</h3>
                </div>
                <p className="ml-14 text-gray-700">
                  Powtarzana co 4–8 tygodni. Obejmuje badania audiometryczne i testowe, na podstawie
                  których przygotowywana jest kolejna płyta. Spotkania służą kontroli postępów terapii.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-purple-50 rounded-lg text-center">
              <p className="text-purple-700 font-semibold">
                📌 Cały program stymulacji słuchowej JIAS trwa ok. 6–10 miesięcy
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Korzyści */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={600}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Korzyści z terapii IAS
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                "Poprawa koncentracji i uwagi słuchowej",
                "Lepsze przetwarzanie słuchowe",
                "Poprawa czytania i rozumienia języka",
                "Większa płynność wypowiedzi i lepsza artykulacja",
                "Poprawa napięcia mięśniowego (równowaga, koordynacja)",
                "Wzrost samooceny i lepsze wyniki w nauce",
                "Skuteczniejsze przyswajanie języków obcych"
              ].map((benefit, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Zalety */}
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">Zalety terapii IAS</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Home className="w-8 h-8 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">Możliwość przeprowadzania w domu</h4>
                    <p className="text-blue-600">Idealne dla osób mieszkających z dala od ośrodka terapeutycznego</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Target className="w-8 h-8 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">Możliwość łączenia z innymi terapiami</h4>
                    <p className="text-blue-600">Np. logopedycznymi, pedagogicznymi</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Star className="w-8 h-8 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">Komfortowa, domowa atmosfera</h4>
                    <p className="text-blue-600">Sprzyjająca skuteczności terapii</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-8 h-8 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">Rozłożone w czasie koszty</h4>
                    <p className="text-blue-600">Terapia staje się bardziej dostępna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Cennik */}
        <AnimatedSection className="py-16 px-4 bg-gray-50" delay={700}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Cennik</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-purple-200">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Diagnoza pełna</h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">350 zł</div>
                <p className="text-gray-600 text-sm">Kompleksowa diagnoza słuchowa przed rozpoczęciem treningu</p>
                <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mt-2">
                  Popularne
                </span>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Diagnoza uproszczona</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">350 zł</div>
                <p className="text-gray-600 text-sm">Diagnoza na podstawie obserwacji i wywiadu z rodzicem</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Indywidualny program</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">280-300 zł</div>
                <p className="text-gray-600 text-sm">Płyta CD / nagrania online</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-700 mb-4">Diagnoza kontrolna (pełna)</h3>
                <div className="text-3xl font-bold text-orange-600 mb-2">350 zł</div>
                <p className="text-gray-600 text-sm">Kontrolna diagnoza po 8-10 tygodniach treningu</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-700 mb-4">Diagnoza kontrolna uproszczona</h3>
                <div className="text-3xl font-bold text-teal-600 mb-2">200 zł</div>
                <p className="text-gray-600 text-sm">Kontrolna diagnoza na podstawie obserwacji i wywiadu</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-purple-50 rounded-lg">
              <p className="text-purple-700 text-center">
                📞 <strong>Chcesz dowiedzieć się więcej?</strong>
                Skontaktuj się i sprawdź, czy terapia IAS jest odpowiednia dla Ciebie lub Twojego dziecka!
              </p>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}
