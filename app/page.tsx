import { Suspense } from "react"
import HomeClient from "./HomeClient"
import { LoadingSpinner } from "@/components/loading/loading-spinner"

export default function HomePage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomeClient />
    </Suspense>
  )
}
