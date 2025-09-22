"use client"

import React, { memo, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

const AppointmentForm = memo(() => {
  // Simplified component - just redirects to booking page
  const handleBookingClick = useCallback(() => {
    window.location.href = "/rezerwacja"
  }, [])

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold mb-6 text-teal-700 font-heading">Umów wizytę</h3>

      <Button
        className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg font-medium transition-all hover:scale-105"
        onClick={handleBookingClick}
      >
        <Calendar className="h-5 w-5 mr-2" />
        Zarezerwuj termin wizyty
      </Button>

      <p className="mt-4 text-sm text-gray-500">Kliknij przycisk powyżej, aby przejść do systemu rezerwacji online.</p>
    </div>
  )
})

AppointmentForm.displayName = 'AppointmentForm'

export default AppointmentForm
