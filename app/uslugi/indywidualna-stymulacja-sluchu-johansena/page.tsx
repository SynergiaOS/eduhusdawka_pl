import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Headphones, Home, Clock, Users, CheckCircle, Star, Target, Brain, Volume2, Phone } from "lucide-react"
import OptimizedImage from "@/components/optimized-image"
import YouTubeEmbed from "@/components/youtube-embed"

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
              <div className="order-2 lg:order-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <div className="bg-purple-100 p-4 rounded-full w-fit">
                    <Headphones className="h-12 w-12 text-purple-600" />
                  </div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">
                      Indywidualna Stymulacja Słuchu <span className="text-purple-600 block sm:inline">dr K. Johansena</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-purple-600 font-medium">Skuteczna metoda wspierająca rozwój słuchu, mowy i koncentracji</p>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                  Indywidualna Stymulacja Słuchu (IAS) to terapia słuchowa podobna do metody Tomatisa,
                  różniąca się jednak sposobem realizacji. Odbywa się w warunkach domowych i opiera się
                  na słuchaniu specjalnie nagranej muzyki, dostosowanej do indywidualnych potrzeb.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                    <Home className="w-5 h-5 text-purple-600" />
                    <span className="text-purple-700 font-medium">Terapia w domu</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-700 font-medium">Indywidualny program</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+48531509008" className="inline-block">
                    <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      Zadzwoń: 531 509 008
                    </button>
                  </a>
                  <a href="#cennik" className="inline-block">
                    <button className="w-full sm:w-auto bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                      Zobacz cennik
                    </button>
                  </a>
                </div>
              </div>
              
              <div className="relative">
                {/* Film YouTube o IAS Johansena */}
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl shadow-2xl">
                  <div className="w-full max-w-lg mx-auto">
                    <YouTubeEmbed
                      videoId="uxCj7pgGD7M"
                      title="JIAS - Indywidualna Stymulacja Słuchu dr K. Johansena"
                      className="shadow-lg"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <div className="inline-flex items-center bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      <Headphones className="w-4 h-4 mr-2" />
                      Zobacz jak działa IAS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Czym jest IAS */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={200}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8">
              Czym jest metoda Johansena IAS?
            </h2>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl mb-12 border border-purple-100">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                Indywidualna Stymulacja Słuchu (IAS) to terapia słuchowa oparta na słuchaniu specjalnie
                nagranej muzyki, dostosowanej do indywidualnych potrzeb danej osoby. Program jest
                przygotowywany na podstawie szczegółowej diagnozy słuchowej.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <div className="group bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 hover:border-purple-600">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-colors">
                    <Volume2 className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">Bez specjalistycznego sprzętu</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Wystarczą zewnętrzne słuchawki przewodowe oraz odtwarzacz płyt CD lub telefon/tablet
                </p>
              </div>

              <div className="group bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 hover:border-green-600">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors">
                    <Clock className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">Krótkie sesje</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Codzienna sesja trwa ok. 10 minut, zawsze o tej samej porze
                </p>
              </div>

              <div className="group bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 hover:border-blue-600">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">Kontrolowane postępy</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
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

        {/* Usunięto sekcję cennika -- <AnimatedSection id="cennik" className="py-16 px-4 bg-gray-50" delay={700}>
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Cennik</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Przejrzyste ceny bez ukrytych kosztów. Możliwość rozłożenia płatności na raty.
            </p>

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

            <div className="mt-12 p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                  Chcesz dowiedzieć się więcej?
                </h3>
                <p className="text-purple-600 mb-6 max-w-2xl mx-auto">
                  Skontaktuj się i sprawdź, czy terapia IAS jest odpowiednia dla Ciebie lub Twojego dziecka!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+48531509008" className="inline-block">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                      <Headphones className="w-5 h-5" />
                      Zadzwoń: 531 509 008
                    </button>
                  </a>
                  <a href="/rezerwacja" className="inline-block">
                    <button className="bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                      Umów konsultację online
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection> --}}

        {/* Dodatkowa sekcja z FAQ */}
        <AnimatedSection className="py-16 px-4 bg-white" delay={800}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Najczęściej zadawane pytania
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Czy terapia IAS jest bezpieczna dla dzieci?
                </h3>
                <p className="text-gray-700">
                  Tak, terapia IAS jest całkowicie bezpieczna. Polega na słuchaniu specjalnie przygotowanej muzyki
                  przez słuchawki. Nie ma żadnych skutków ubocznych.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Od jakiego wieku można rozpocząć terapię?
                </h3>
                <p className="text-gray-700">
                  Terapię można rozpocząć już od niemowlęctwa. Nie ma górnej granicy wieku -
                  skuteczna jest również u dorosłych.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Jak długo trwa cała terapia?
                </h3>
                <p className="text-gray-700">
                  Pełny program terapii IAS trwa zazwyczaj 6-10 miesięcy, z kontrolami co 4-8 tygodni.
                  Pierwsze efekty można zauważyć już po kilku tygodniach.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  )
}
