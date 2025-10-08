import { Suspense } from "react"
import HomeClient from "./HomeClient"
import { OptimizedSpinner } from "@/components/loading/optimized-loading-states"

export default function HomePage() {
  return (
    <Suspense fallback={<OptimizedSpinner />}>
      <HomeClient />
    </Suspense>
  )
}
