"use client"

import React, { Component, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ErrorInfo {
  componentStack: string
  errorBoundary?: string
}

interface EnhancedErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
  errorId?: string
}

interface EnhancedErrorBoundaryProps {
  children: ReactNode
  fallback?: React.ComponentType<{
    error?: Error
    errorInfo?: ErrorInfo
    reset: () => void
    errorId?: string
  }>
  onError?: (error: Error, errorInfo: ErrorInfo, errorId: string) => void
  level?: 'page' | 'section' | 'component'
  name?: string
}

class EnhancedErrorBoundary extends Component<
  EnhancedErrorBoundaryProps,
  EnhancedErrorBoundaryState
> {
  private resetTimeoutId: number | null = null

  constructor(props: EnhancedErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): EnhancedErrorBoundaryState {
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    return {
      hasError: true,
      error,
      errorId,
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const enhancedErrorInfo: ErrorInfo = {
      componentStack: errorInfo.componentStack || '',
      errorBoundary: this.props.name || 'EnhancedErrorBoundary',
    }

    this.setState({ errorInfo: enhancedErrorInfo })

    // Log error with context
    console.error('Enhanced Error Boundary caught an error:', {
      error,
      errorInfo: enhancedErrorInfo,
      level: this.props.level || 'component',
      name: this.props.name,
      errorId: this.state.errorId,
    })

    // Call custom error handler
    if (this.props.onError && this.state.errorId) {
      this.props.onError(error, enhancedErrorInfo, this.state.errorId)
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      errorId: undefined,
    })
  }

  handleAutoReset = () => {
    if (this.resetTimeoutId) {
      window.clearTimeout(this.resetTimeoutId)
    }
    
    this.resetTimeoutId = window.setTimeout(() => {
      this.handleReset()
    }, 5000)
  }

  componentWillUnmount() {
    if (this.resetTimeoutId) {
      window.clearTimeout(this.resetTimeoutId)
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return (
          <FallbackComponent
            error={this.state.error}
            errorInfo={this.state.errorInfo}
            reset={this.handleReset}
            errorId={this.state.errorId}
          />
        )
      }

      // Default fallback based on level
      return this.renderDefaultFallback()
    }

    return this.props.children
  }

  private renderDefaultFallback() {
    const { level = 'component', name } = this.props
    const { error } = this.state

    switch (level) {
      case 'page':
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
              <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Ups! Coś poszło nie tak
              </h1>
              <p className="text-gray-600 mb-6">
                Wystąpił nieoczekiwany błąd. Przepraszamy za niedogodności.
              </p>
              <div className="space-y-3">
                <Button onClick={this.handleReset} className="w-full">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Spróbuj ponownie
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/">
                    <Home className="h-4 w-4 mr-2" />
                    Wróć do strony głównej
                  </Link>
                </Button>
                <Button variant="ghost" asChild className="w-full">
                  <a href="mailto:kontakt@eduhustawka.pl">
                    <Mail className="h-4 w-4 mr-2" />
                    Zgłoś problem
                  </a>
                </Button>
              </div>
              {process.env.NODE_ENV === 'development' && (
                <details className="mt-6 text-left">
                  <summary className="cursor-pointer text-sm text-gray-500">
                    Szczegóły błędu (dev)
                  </summary>
                  <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
                    {error?.message}
                    {'\n'}
                    {error?.stack}
                  </pre>
                </details>
              )}
            </div>
          </div>
        )

      case 'section':
        return (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-4">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  Problem z sekcją {name || 'strony'}
                </h3>
                <p className="text-red-700 mb-4">
                  Ta sekcja nie może zostać wyświetlona z powodu błędu.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    onClick={this.handleReset}
                    size="sm"
                    variant="outline"
                    className="border-red-300 text-red-700 hover:bg-red-100"
                  >
                    <RefreshCw className="h-3 w-3 mr-1" />
                    Odśwież sekcję
                  </Button>
                  <Button
                    onClick={this.handleAutoReset}
                    size="sm"
                    variant="ghost"
                    className="text-red-600 hover:bg-red-100"
                  >
                    Auto-odświeżenie (5s)
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )

      default: // component level
        return (
          <div className="bg-yellow-50 border border-yellow-200 rounded p-4 my-2">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
              <div className="flex-1">
                <p className="text-sm text-yellow-800">
                  Komponent {name || 'nie określony'} nie może zostać wyświetlony.
                </p>
                <button
                  onClick={this.handleReset}
                  className="text-xs text-yellow-700 underline hover:no-underline mt-1"
                >
                  Spróbuj ponownie
                </button>
              </div>
            </div>
          </div>
        )
    }
  }
}

// HOC for easier usage
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<EnhancedErrorBoundaryProps, 'children'>
) {
  const WrappedComponent = (props: P) => (
    <EnhancedErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </EnhancedErrorBoundary>
  )

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`
  
  return WrappedComponent
}

// Hook for error reporting
export function useErrorHandler() {
  const reportError = (error: Error, context?: string) => {
    console.error('Manual error report:', { error, context })
    
    // Here you could integrate with error reporting service
    // like Sentry, LogRocket, etc.
  }

  return { reportError }
}

export default EnhancedErrorBoundary
