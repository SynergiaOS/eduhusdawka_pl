/**
 * Enhanced error handling utilities for EduHustawka
 */

export interface AppError {
  message: string
  code?: string
  details?: any
  timestamp: Date
}

export class FormSubmissionError extends Error {
  constructor(message: string, public code?: string, public details?: any) {
    super(message)
    this.name = 'FormSubmissionError'
  }
}

export class NetworkError extends Error {
  constructor(message: string, public status?: number) {
    super(message)
    this.name = 'NetworkError'
  }
}

/**
 * Log errors to console and potentially external service
 */
export function logError(error: Error, context?: string) {
  const errorInfo = {
    message: error.message,
    name: error.name,
    stack: error.stack,
    context,
    timestamp: new Date().toISOString(),
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
    url: typeof window !== 'undefined' ? window.location.href : 'server'
  }
  
  console.error('Application Error:', errorInfo)
  
  // In production, you might want to send this to an error tracking service
  // like Sentry, LogRocket, or Bugsnag
  if (process.env.NODE_ENV === 'production') {
    // Example: sendToErrorService(errorInfo)
  }
}

/**
 * Get user-friendly error message
 */
export function getUserFriendlyMessage(error: Error): string {
  if (error instanceof FormSubmissionError) {
    return 'Wystąpił problem z wysłaniem formularza. Spróbuj ponownie lub skontaktuj się telefonicznie.'
  }
  
  if (error instanceof NetworkError) {
    if (error.status === 429) {
      return 'Zbyt wiele prób. Poczekaj chwilę i spróbuj ponownie.'
    }
    if (error.status && error.status >= 500) {
      return 'Problem z serwerem. Spróbuj ponownie za chwilę.'
    }
    return 'Problem z połączeniem internetowym. Sprawdź połączenie i spróbuj ponownie.'
  }
  
  // Generic fallback
  return 'Wystąpił nieoczekiwany błąd. Spróbuj odświeżyć stronę lub skontaktuj się z nami.'
}

/**
 * Retry function with exponential backoff
 */
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> {
  let lastError: Error
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error as Error
      
      if (attempt === maxRetries) {
        throw lastError
      }
      
      // Exponential backoff: 1s, 2s, 4s, etc.
      const delay = baseDelay * Math.pow(2, attempt)
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }
  
  throw lastError!
}

/**
 * Safe async function wrapper
 */
export function safeAsync<T extends any[], R>(
  fn: (...args: T) => Promise<R>
) {
  return async (...args: T): Promise<{ data?: R; error?: Error }> => {
    try {
      const data = await fn(...args)
      return { data }
    } catch (error) {
      logError(error as Error, `safeAsync wrapper for ${fn.name}`)
      return { error: error as Error }
    }
  }
}

/**
 * Form validation error messages
 */
export const VALIDATION_MESSAGES = {
  required: 'To pole jest wymagane',
  email: 'Proszę podać prawidłowy adres email',
  phone: 'Proszę podać prawidłowy numer telefonu',
  minLength: (min: number) => `Minimum ${min} znaków`,
  maxLength: (max: number) => `Maksimum ${max} znaków`,
  consent: 'Zgoda na przetwarzanie danych jest wymagana'
} as const
