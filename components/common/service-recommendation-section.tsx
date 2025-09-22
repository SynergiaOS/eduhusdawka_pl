"use client"

import { useServiceRecommendations } from "@/hooks/use-service-recommendations"

export default function ServiceRecommendationSection() {
  const _recommendedServices = useServiceRecommendations(3)

  return null // Usunięto całą zawartość sekcji rekomendacji
}
