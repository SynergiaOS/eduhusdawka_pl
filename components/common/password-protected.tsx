"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Lock, AlertCircle } from "lucide-react"

interface PasswordProtectedProps {
  password: string | string[]
  children: React.ReactNode
  storageKey: string
  title?: string
  description?: string
}

export default function PasswordProtected({
  password,
  children,
  storageKey,
  title = "Dostęp ograniczony",
  description = "Wpisz hasło, aby uzyskać dostęp do tej zawartości.",
}: PasswordProtectedProps) {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [inputPassword, setInputPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  // Check if user is already authorized
  useEffect(() => {
    const authorized = sessionStorage.getItem(storageKey)
    if (authorized === "true") {
      setIsAuthorized(true)
    }
    setIsLoading(false)
  }, [storageKey])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const passwordList = Array.isArray(password) ? password : [password]
    const isMatch = passwordList.includes(inputPassword)

    if (isMatch) {
      sessionStorage.setItem(storageKey, "true")
      setIsAuthorized(true)
      setInputPassword("")
    } else {
      setError("Niepoprawne hasło. Spróbuj ponownie.")
      setInputPassword("")
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="inline-block animate-spin">
            <Lock className="w-8 h-8 text-blue-600" />
          </div>
          <p className="mt-4 text-gray-600">Ładowanie...</p>
        </div>
      </div>
    )
  }

  if (isAuthorized) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Lock Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          {/* Title and Description */}
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">{title}</h1>
          <p className="text-center text-gray-600 mb-8">{description}</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Hasło
              </Label>
              <Input
                id="password"
                type="password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                placeholder="Wpisz hasło"
                className="w-full"
                autoFocus
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Odblokuj
            </Button>
          </form>

          {/* Footer Note */}
          <p className="text-xs text-center text-gray-500 mt-6">
            Ta zawartość jest chroniona hasłem. Wpisz hasło, które otrzymałeś od administratora.
          </p>
        </div>
      </div>
    </div>
  )
}
