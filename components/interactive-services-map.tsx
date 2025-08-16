"use client"

import { useState } from "react"
import Link from "next/link"
import { Hand, Brain, Users, Headphones, Volume2, BookOpen, Target, Stethoscope } from "lucide-react"
import { cn } from "@/lib/utils"

interface Service {
  id: string
  name: string
  icon: React.ReactNode
  price: string
  description: string
  href: string
  color: string
  bgColor: string
}

const services: Service[] = [
  {
    id: "terapia-reki",
    name: "Terapia ręki",
    icon: <Hand className="w-8 h-8" />,
    price: "120 zł",
    description: "Rozwój motoryki małej i grafomotoryki",
    href: "/uslugi/terapia-reki",
    color: "text-purple-600",
    bgColor: "bg-purple-50 hover:bg-purple-100"
  },
  {
    id: "terapia-pedagogiczna",
    name: "Terapia pedagogiczna",
    icon: <Brain className="w-8 h-8" />,
    price: "120 zł",
    description: "Wsparcie w nauce i rozwoju",
    href: "/uslugi/terapia-pedagogiczna",
    color: "text-blue-600",
    bgColor: "bg-blue-50 hover:bg-blue-100"
  },
  {
    id: "tus",
    name: "TUS",
    icon: <Users className="w-8 h-8" />,
    price: "80 zł",
    description: "Trening Umiejętności Społecznych",
    href: "/trening-umiejetnosci-spolecznych",
    color: "text-green-600",
    bgColor: "bg-green-50 hover:bg-green-100"
  },
  {
    id: "ias-johansena",
    name: "IAS Johansena",
    icon: <Headphones className="w-8 h-8" />,
    price: "350 zł",
    description: "Indywidualna Stymulacja Słuchu",
    href: "/uslugi/indywidualna-stymulacja-sluchu-johansena",
    color: "text-teal-600",
    bgColor: "bg-teal-50 hover:bg-teal-100"
  },
  {
    id: "forbrain",
    name: "Forbrain",
    icon: <Volume2 className="w-8 h-8" />,
    price: "150 zł",
    description: "Trening słuchowo-głosowy",
    href: "/uslugi/forbrain",
    color: "text-orange-600",
    bgColor: "bg-orange-50 hover:bg-orange-100"
  },
  {
    id: "wczesna-nauka",
    name: "Wczesna nauka czytania",
    icon: <BookOpen className="w-8 h-8" />,
    price: "120 zł",
    description: "Nauka czytania metodą sylabową",
    href: "/wczesna-nauka-czytania",
    color: "text-pink-600",
    bgColor: "bg-pink-50 hover:bg-pink-100"
  },
  {
    id: "neuroflow",
    name: "Neuroflow",
    icon: <Target className="w-8 h-8" />,
    price: "350 zł",
    description: "Aktywny trening słuchowy",
    href: "/rezerwacja",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 hover:bg-indigo-100"
  },
  {
    id: "korp",
    name: "Diagnoza KORP",
    icon: <Stethoscope className="w-8 h-8" />,
    price: "350 zł",
    description: "Ocena rozwoju psychoruchowego",
    href: "/rezerwacja",
    color: "text-red-600",
    bgColor: "bg-red-50 hover:bg-red-100"
  }
]

export default function InteractiveServicesMap() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Mapa naszych usług
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kliknij na wybraną usługę, aby dowiedzieć się więcej
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className={cn(
                "group relative p-6 rounded-xl border-2 border-transparent transition-all duration-300 cursor-pointer",
                service.bgColor,
                hoveredService === service.id ? "scale-105 shadow-xl border-gray-200" : "hover:scale-102 hover:shadow-lg"
              )}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="text-center">
                <div className={cn("inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-colors", 
                  hoveredService === service.id ? "bg-white shadow-md" : "bg-white/50"
                )}>
                  <div className={service.color}>
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700">
                  {service.name}
                </h3>
                
                <div className={cn("text-2xl font-bold mb-2", service.color)}>
                  {service.price}
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {hoveredService === service.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl pointer-events-none" />
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Nie wiesz, która usługa będzie najlepsza dla Twojego dziecka?
          </p>
          <Link href="/rezerwacja">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Umów bezpłatną konsultację
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
