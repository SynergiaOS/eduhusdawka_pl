"use client"

import { useState } from "react"
import { Baby, User, GraduationCap, Users, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface TimelineItem {
  age: string
  title: string
  icon: React.ReactNode
  description: string
  services: string[]
  color: string
}

const timelineData: TimelineItem[] = [
  {
    age: "0-3 lata",
    title: "Wczesny rozwój",
    icon: <Baby className="w-6 h-6" />,
    description: "Kluczowy okres rozwoju podstawowych umiejętności motorycznych i poznawczych",
    services: ["Diagnoza KORP", "Terapia ręki", "IAS Johansena"],
    color: "bg-pink-500"
  },
  {
    age: "3-6 lat",
    title: "Okres przedszkolny",
    icon: <User className="w-6 h-6" />,
    description: "Rozwój umiejętności społecznych i przygotowanie do nauki",
    services: ["TUS", "Terapia pedagogiczna", "Wczesna nauka czytania"],
    color: "bg-blue-500"
  },
  {
    age: "6-12 lat",
    title: "Wiek szkolny",
    icon: <GraduationCap className="w-6 h-6" />,
    description: "Wsparcie w nauce szkolnej i rozwoju umiejętności akademickich",
    services: ["Terapia pedagogiczna", "Forbrain", "Neuroflow"],
    color: "bg-green-500"
  },
  {
    age: "12+ lat",
    title: "Młodzież",
    icon: <Users className="w-6 h-6" />,
    description: "Rozwój zaawansowanych umiejętności społecznych i przygotowanie do dorosłości",
    services: ["TUS", "IAS Johansena", "Terapia pedagogiczna"],
    color: "bg-purple-500"
  }
]

export default function DevelopmentTimeline() {
  const [activeItem, setActiveItem] = useState<number | null>(null)

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Wsparcie na każdym etapie rozwoju
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nasze usługi dostosowane są do potrzeb dzieci w różnym wieku
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "relative flex flex-col lg:flex-row items-center",
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-teal-500 rounded-full z-10 hidden lg:block" />

                {/* Content */}
                <div className={cn(
                  "w-full lg:w-5/12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer",
                  activeItem === index ? "scale-105 ring-2 ring-teal-500" : ""
                )}
                onClick={() => setActiveItem(activeItem === index ? null : index)}
                >
                  <div className="flex items-center mb-4">
                    <div className={cn("p-3 rounded-full text-white mr-4", item.color)}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">{item.age}</div>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      Rekomendowane usługi:
                    </div>
                    {item.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                        {service}
                      </div>
                    ))}
                  </div>

                  {activeItem === index && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                        Dowiedz się więcej →
                      </button>
                    </div>
                  )}
                </div>

                {/* Spacer for desktop */}
                <div className="hidden lg:block lg:w-2/12" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Każde dziecko rozwija się w swoim tempie. Skontaktuj się z nami, aby omówić indywidualne potrzeby.
          </p>
          <a href="tel:+48531509008">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Umów konsultację: 531 509 008
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
