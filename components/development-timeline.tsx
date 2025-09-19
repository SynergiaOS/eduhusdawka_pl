"use client"

import { useState } from "react"
import { Baby, User, GraduationCap, Users, CheckCircle, TreePine, Sprout, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"
import AnimatedSection from "./animated-section"

interface TimelineItem {
  age: string
  title: string
  icon: React.ReactNode
  description: string
  services: string[]
  color: string
  bgColor: string
  textColor: string
  position: 'left' | 'right'
}

const timelineData: TimelineItem[] = [
  {
    age: "0-3 lata",
    title: "Wczesny rozwój",
    icon: <Sprout className="w-6 h-6" />,
    description: "Kluczowy okres rozwoju podstawowych umiejętności motorycznych i poznawczych",
    services: ["Diagnoza KORP", "Terapia ręki", "IAS Johansena"],
    color: "border-pink-400",
    bgColor: "bg-pink-50",
    textColor: "text-pink-700",
    position: 'left'
  },
  {
    age: "3-6 lat",
    title: "Okres przedszkolny",
    icon: <Leaf className="w-6 h-6" />,
    description: "Rozwój umiejętności społecznych i przygotowanie do nauki",
    services: ["TUS", "Terapia pedagogiczna", "Wczesna nauka czytania"],
    color: "border-blue-400",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    position: 'right'
  },
  {
    age: "6-12 lat",
    title: "Wiek szkolny",
    icon: <GraduationCap className="w-6 h-6" />,
    description: "Wsparcie w nauce szkolnej i rozwoju umiejętności akademickich",
    services: ["Terapia pedagogiczna", "Forbrain", "Neuroflow"],
    color: "border-green-400",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    position: 'left'
  },
  {
    age: "12+ lat",
    title: "Młodzież",
    icon: <TreePine className="w-6 h-6" />,
    description: "Rozwój zaawansowanych umiejętności społecznych i przygotowanie do dorosłości",
    services: ["TUS", "IAS Johansena", "Terapia pedagogiczna"],
    color: "border-purple-400",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    position: 'right'
  }
]

export default function DevelopmentTimeline() {
  const [activeItem, setActiveItem] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-teal-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-600 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-teal-100 px-6 py-3 rounded-full mb-6">
              <TreePine className="w-6 h-6 text-teal-600" />
              <span className="text-teal-700 font-semibold">Drzewo Wsparcia</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Wsparcie na każdym etapie rozwoju
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Jak drzewo rośnie etapami, tak każde dziecko rozwija się w swoim tempie.
              Nasze usługi dostosowane są do potrzeb dzieci w różnym wieku.
            </p>
          </div>
        </AnimatedSection>

        {/* Tree Structure */}
        <div className="relative">
          {/* Tree trunk - central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full hidden lg:block"
               style={{ height: 'calc(100% - 100px)', top: '50px' }}>
          </div>

          {/* Tree branches */}
          <div className="space-y-16 lg:space-y-20">
            {timelineData.map((item, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <div className={cn(
                  "relative flex flex-col items-center",
                  "lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center"
                )}>

                  {/* Branch line for desktop */}
                  <div className={cn(
                    "hidden lg:block absolute top-1/2 w-16 h-1 bg-gradient-to-r rounded-full",
                    item.position === 'left'
                      ? "right-1/2 mr-1 from-amber-600 to-transparent"
                      : "left-1/2 ml-1 from-transparent to-amber-600"
                  )} />

                  {/* Content Card */}
                  <div className={cn(
                    "w-full max-w-md lg:max-w-none",
                    item.position === 'left' ? "lg:col-span-5 lg:col-start-1" : "lg:col-span-5 lg:col-start-8"
                  )}>
                    <div className={cn(
                      "relative p-8 rounded-2xl border-2 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group",
                      item.color,
                      item.bgColor,
                      activeItem === index ? "scale-105 shadow-2xl" : "hover:scale-102"
                    )}
                    onClick={() => setActiveItem(activeItem === index ? null : index)}
                    >
                      {/* Decorative corner */}
                      <div className={cn(
                        "absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg",
                        item.textColor.replace('text-', 'bg-').replace('-700', '-500'),
                        "text-white"
                      )}>
                        {item.icon}
                      </div>

                      <div className="mb-6">
                        <div className={cn("text-sm font-bold uppercase tracking-wider mb-2", item.textColor)}>
                          {item.age}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className={cn("text-sm font-bold uppercase tracking-wider", item.textColor)}>
                          Rekomendowane usługi:
                        </div>
                        <div className="grid gap-2">
                          {item.services.map((service, serviceIndex) => (
                            <div key={serviceIndex} className="flex items-center text-gray-700">
                              <div className={cn(
                                "w-2 h-2 rounded-full mr-3 flex-shrink-0",
                                item.textColor.replace('text-', 'bg-').replace('-700', '-500')
                              )} />
                              <span className="font-medium">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {activeItem === index && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <button className={cn(
                            "font-semibold text-sm hover:underline transition-colors",
                            item.textColor
                          )}>
                            Dowiedz się więcej →
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tree node/fruit */}
                  <div className={cn(
                    "absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block",
                    item.textColor.replace('text-', 'bg-').replace('-700', '-500')
                  )} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={800}>
          <div className="text-center mt-20">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <TreePine className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Każde dziecko rozwija się w swoim tempie, jak drzewo które potrzebuje odpowiedniej pory na każdy etap wzrostu.
                Skontaktuj się z nami, aby omówić indywidualne potrzeby Twojego dziecka.
              </p>
              <a href="tel:+48531509008">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Umów konsultację: 531 509 008
                </button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
