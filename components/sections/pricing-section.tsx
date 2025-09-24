"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight, Info } from "lucide-react"
import AnimatedSection from "@/components/animations/animated-section"
import { useRouter } from "next/navigation"
import { useAnalytics } from "@/hooks/use-analytics"

// Typy danych dla usług
interface PricingItem {
  id: string
  serviceName: string
  itemName: string
  description: string
  price: string
  popular?: boolean
  new?: boolean
}

// Dane usług z cenami - przekształcone do formatu tabeli
const pricingItems: PricingItem[] = [
  // Terapie podstawowe
  {
    id: "terapia-reki-gabinet",
    serviceName: "Terapia Ręki",
    itemName: "Sesja w gabinecie",
    description: "Rozwój motoryki małej, grafomotoryki i umiejętności pisania",
    price: "120 zł",
    popular: true
  },
  {
    id: "terapia-reki-dojazd",
    serviceName: "Terapia Ręki",
    itemName: "Sesja z dojazdem",
    description: "Terapia w domu klienta (50 min)",
    price: "150 zł"
  },
  {
    id: "terapia-pedagogiczna-gabinet",
    serviceName: "Terapia Pedagogiczna",
    itemName: "Sesja w gabinecie",
    description: "Wsparcie w nauce, rozwoju umiejętności poznawczych",
    price: "120 zł",
    popular: true
  },
  {
    id: "terapia-pedagogiczna-dojazd",
    serviceName: "Terapia Pedagogiczna",
    itemName: "Sesja z dojazdem",
    description: "Terapia w domu klienta (50 min)",
    price: "150 zł"
  },
  {
    id: "tus",
    serviceName: "Trening Umiejętności Społecznych",
    itemName: "Zajęcia grupowe TUS",
    description: "Zajęcia grupowe dla dzieci z trudnościami społecznymi (50 min)",
    price: "80 zł",
    popular: true
  },
  {
    id: "forbrain-gabinet",
    serviceName: "Czytanie sylabowe z Forbrain",
    itemName: "Sesja w gabinecie",
    description: "Nauka czytania z wykorzystaniem słuchawek Forbrain (50 min)",
    price: "150 zł"
  },
  {
    id: "forbrain-dojazd",
    serviceName: "Czytanie sylabowe z Forbrain",
    itemName: "Sesja z dojazdem",
    description: "Terapia w domu klienta (50 min)",
    price: "180 zł"
  },
  {
    id: "wczesna-nauka-gabinet",
    serviceName: "Wczesna Nauka Czytania",
    itemName: "Sesja w gabinecie",
    description: "Metoda symultaniczno-sekwencyjna (50 min)",
    price: "120 zł"
  },
  {
    id: "wczesna-nauka-dojazd",
    serviceName: "Wczesna Nauka Czytania",
    itemName: "Sesja z dojazdem",
    description: "Terapia w domu klienta (50 min)",
    price: "150 zł"
  },
  {
    id: "czytanie-sylabowe-gabinet",
    serviceName: "Czytanie Sylabowe",
    itemName: "Sesja w gabinecie",
    description: "Nauka czytania metodą sylabową (50 min)",
    price: "120 zł"
  },
  {
    id: "czytanie-sylabowe-dojazd",
    serviceName: "Czytanie Sylabowe",
    itemName: "Sesja z dojazdem",
    description: "Nauka czytania w domu ucznia (50 min)",
    price: "150 zł"
  },
  // Diagnostyka
  {
    id: "korp-badanie",
    serviceName: "KORP",
    itemName: "Badanie + opinia",
    description: "Karty Oceny Rozwoju Psychoruchowego (1 m.ż.–9 r.ż.)",
    price: "350 zł",
    popular: true
  },
  // Trening Słuchowy Johansena
  {
    id: "ias-diagnoza-pelna",
    serviceName: "IAS Johansena",
    itemName: "Diagnoza pełna",
    description: "Kompleksowa diagnoza przed treningiem słuchowym (120 min)",
    price: "500 zł"
  },
  {
    id: "ias-diagnoza-uproszczona",
    serviceName: "IAS Johansena",
    itemName: "Diagnoza uproszczona",
    description: "Podstawowa diagnoza słuchowa",
    price: "350 zł"
  },
  {
    id: "ias-program",
    serviceName: "IAS Johansena",
    itemName: "Program indywidualny",
    description: "Przygotowanie indywidualnego programu treningowego",
    price: "280–300 zł"
  },
  {
    id: "ias-dojazd",
    serviceName: "IAS Johansena",
    itemName: "Sesja z dojazdem do ucznia",
    description: "Trening słuchowy w domu ucznia",
    price: "300 zł"
  },
  {
    id: "ias-kontrolna-pelna",
    serviceName: "IAS Johansena",
    itemName: "Diagnoza kontrolna pełna",
    description: "Kontrola postępów po treningu",
    price: "350 zł"
  },
  {
    id: "ias-kontrolna-uproszczona",
    serviceName: "IAS Johansena",
    itemName: "Diagnoza kontrolna uproszczona",
    description: "Podstawowa kontrola postępów",
    price: "200 zł"
  },
  // Treningi specjalistyczne Neuroflow
  {
    id: "neuroflow-diagnoza",
    serviceName: "Trening Neuroflow",
    itemName: "Diagnoza wstępna",
    description: "Ocena przed rozpoczęciem treningu słuchowego",
    price: "350 zł"
  },
  {
    id: "neuroflow-badanie-etap",
    serviceName: "Trening Neuroflow",
    itemName: "Badanie przed kolejnym etapem",
    description: "Kontrola postępów między etapami",
    price: "350 zł"
  },
  {
    id: "neuroflow-etap1",
    serviceName: "Trening Neuroflow",
    itemName: "I etap terapii",
    description: "Pierwszy etap aktywnego treningu słuchowego",
    price: "470 zł"
  },
  {
    id: "neuroflow-etap2",
    serviceName: "Trening Neuroflow",
    itemName: "II etap terapii",
    description: "Drugi etap aktywnego treningu słuchowego",
    price: "460 zł"
  },
  {
    id: "neuroflow-etap3",
    serviceName: "Trening Neuroflow",
    itemName: "III etap i kolejne",
    description: "Trzeci i kolejne etapy treningu słuchowego",
    price: "450 zł"
  },
  {
    id: "neuroflow-dojazd",
    serviceName: "Trening Neuroflow",
    itemName: "Sesja z dojazdem do ucznia",
    description: "Trening Neuroflow w domu ucznia",
    price: "300 zł"
  }
]

// Kategorie filtrowania
const filterCategories = [
  { id: "all", name: "Wszystkie usługi" },
  { id: "popular", name: "Popularne" },
  { id: "terapie", name: "Terapie" },
  { id: "diagnostyka", name: "Diagnostyka" },
  { id: "treningi", name: "Treningi specjalistyczne" },
]

export default function PricingSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const router = useRouter()
  const { trackEvent } = useAnalytics()

  // Filtrowanie usług
  const filteredItems = pricingItems.filter((item) => {
    if (activeFilter === "all") return true
    if (activeFilter === "popular" && item.popular) return true
    if (activeFilter === "terapie" && (item.serviceName.includes("Terapia") || item.serviceName.includes("Trening Umiejętności")))
      return true
    if (activeFilter === "diagnostyka" && (item.serviceName.includes("KORP") || (item.serviceName.includes("IAS") && item.itemName.includes("Diagnoza")) || (item.serviceName.includes("Neuroflow") && item.itemName.includes("Diagnoza"))))
      return true
    if (activeFilter === "treningi" && (item.serviceName.includes("Forbrain") || item.serviceName.includes("IAS") || item.serviceName.includes("Wczesna") || item.serviceName.includes("Czytanie") || item.serviceName.includes("Neuroflow")))
      return true
    return false
  })

  const handleBookNow = (serviceId: string, serviceName: string) => {
    trackEvent("pricing_book_click", "Pricing", serviceName)
    router.push("/rezerwacja")
  }

  const getServiceSlug = (serviceName: string) => {
    const slugMap: { [key: string]: string } = {
      "Trening Umiejętności Społecznych": "trening-umiejetnosci-spolecznych",
      "Terapia Ręki": "terapia-reki",
      "Terapia Pedagogiczna": "terapia-pedagogiczna",
      "IAS Johansena": "indywidualna-stymulacja-sluchu-johansena",
      "Trening Neuroflow": "trening-neuroflow",
      "Wczesna Nauka Czytania": "wczesna-nauka-czytania",
      "Czytanie Sylabowe": "wczesna-nauka-czytania",
      "Czytanie sylabowe z Forbrain": "forbrain",
      "KORP": "korp",
    }
    return slugMap[serviceName] || serviceName.toLowerCase().replace(/\s+/g, "-")
  }

  return (
    <section id="cennik" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-heading heading-fancy pb-4">
            Cennik Usług
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Oferuję szeroki zakres usług diagnostycznych i terapeutycznych dostosowanych do indywidualnych potrzeb
            każdego dziecka. Poniżej znajdziesz szczegółowy cennik.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filterCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={activeFilter === category.id ? "bg-teal-600 hover:bg-teal-700" : "text-gray-700"}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="min-w-[800px]">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-teal-600 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Kategoria usługi</th>
                    <th className="px-6 py-4 text-left font-semibold">Nazwa</th>
                    <th className="px-6 py-4 text-left font-semibold">Opis</th>
                    <th className="px-6 py-4 text-right font-semibold">Cena</th>
                    <th className="px-6 py-4 text-center font-semibold">Akcje</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item, index) => (
                    <tr
                      key={item.id}
                      className={cn(
                        "border-b border-gray-200 hover:bg-gray-50 transition-colors",
                        index % 2 === 0 ? "bg-white" : "bg-gray-50",
                      )}
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-teal-700">{item.serviceName}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-medium text-gray-800">{item.itemName}</span>
                          {item.popular && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                              Popularne
                            </span>
                          )}
                          {item.new && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              Nowość
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600 max-w-xs">{item.description}</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="font-bold text-lg text-teal-600">{item.price}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col sm:flex-row justify-center gap-2">
                          <Link href={`/uslugi/${getServiceSlug(item.serviceName)}`}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-teal-600 border-teal-600 hover:bg-teal-50 w-full sm:w-auto bg-transparent"
                            >
                              <Info className="h-4 w-4 mr-1" /> Szczegóły
                            </Button>
                          </Link>
                          <Button
                            onClick={() => handleBookNow(item.id, item.serviceName)}
                            size="sm"
                            className="bg-teal-600 hover:bg-teal-700 text-white w-full sm:w-auto"
                          >
                            Rezerwuj
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Wskaźnik przewijania dla urządzeń mobilnych */}
          <div className="md:hidden text-center mt-4">
            <p className="text-sm text-gray-500">← Przesuń palcem, aby zobaczyć więcej →</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="mt-12 text-center">
            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-teal-800 mb-4">Informacje dodatkowe</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-teal-700">
                <div>
                  <strong>Pakiety:</strong> Wybierając pakiety sesji, oszczędzasz na pojedynczych wizytach
                </div>
                <div>
                  <strong>Płatność:</strong> Możliwość płatności gotówką lub przelewem
                </div>
                <div>
                  <strong>Anulowanie:</strong> Prosimy o informację o anulowaniu minimum 24h wcześniej
                </div>
                <div>
                  <strong>Konsultacje:</strong> Pierwsza konsultacja obejmuje szczegółowy wywiad z rodzicami
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-4">Potrzebujesz więcej informacji lub masz pytania dotyczące cennika?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                className="text-teal-600 border-teal-600 hover:bg-teal-50"
              >
                Skontaktuj się ze mną
              </Button>
              <Button onClick={() => router.push("/rezerwacja")} className="bg-teal-600 hover:bg-teal-700 text-white">
                <ArrowRight className="h-4 w-4 mr-2" />
                Zarezerwuj wizytę
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
