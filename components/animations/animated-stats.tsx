"use client"

import React, { useState, useEffect, useRef, memo, useMemo } from "react"
import { Users, Clock, Star, Award } from "lucide-react"

interface StatItemProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  duration?: number
}

const StatItem = memo(({ icon, value, label, suffix = "", duration = 2000 }: StatItemProps) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const startValue = 0
    const endValue = value

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
      
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value, duration])

  return (
    <div ref={ref} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        <div className="bg-teal-100 p-3 rounded-full">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold text-teal-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 font-medium">
        {label}
      </div>
    </div>
  )
})

StatItem.displayName = 'StatItem'

const AnimatedStats = memo(() => {
  const stats = useMemo(() => [
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      value: 500,
      label: "Zadowolonych rodzin",
      suffix: "+"
    },
    {
      icon: <Clock className="w-8 h-8 text-teal-600" />,
      value: 15,
      label: "Lat doświadczenia",
      suffix: "+"
    },
    {
      icon: <Star className="w-8 h-8 text-teal-600" />,
      value: 98,
      label: "Zadowolenia klientów",
      suffix: "%"
    },
    {
      icon: <Award className="w-8 h-8 text-teal-600" />,
      value: 8,
      label: "Rodzajów terapii"
    }
  ], [])

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            EduHustawka w liczbach
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zaufało nam już setki rodzin z województwa podlaskiego
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              duration={2000 + index * 200}
            />
          ))}
        </div>
      </div>
    </div>
  )
})

AnimatedStats.displayName = 'AnimatedStats'

export default AnimatedStats
