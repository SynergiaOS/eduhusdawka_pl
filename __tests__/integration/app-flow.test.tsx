/**
 * Integration tests for app flow
 */

import React from 'react'
import { render, screen, waitFor, userEvent } from '../utils/test-utils'
import { jest } from '@jest/globals'
import App from '../../app/layout'

// Mock analytics
jest.mock('../../hooks/use-analytics', () => ({
  useAnalytics: () => ({
    trackEvent: jest.fn(),
    trackPageView: jest.fn(),
  }),
}))

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

describe('App Flow Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Page Transitions', () => {
    it('should render home page correctly', () => {
      render(<App />)

      expect(screen.getByText(/EduHustawka/i)).toBeInTheDocument()
      expect(screen.getByText(/Terapia pedagogiczna/i)).toBeInTheDocument()
    })

    it('should navigate between sections smoothly', async () => {
      const user = userEvent.setup()
      render(<App />)

      // Find and click navigation link
      const servicesLink = screen.getByText(/Usługi/i)
      await user.click(servicesLink)

      // Should update URL without page reload
      await waitFor(() => {
        expect(window.location.pathname).toBe('/uslugi')
      })
    })
  })

  describe('Form Integration', () => {
    it('should handle contact form submission flow', async () => {
      const user = userEvent.setup()
      render(<App />)

      // Navigate to contact form
      const contactLink = screen.getByText(/Kontakt/i)
      await user.click(contactLink)

      // Fill contact form
      const nameInput = screen.getByLabelText(/Imię/i)
      const emailInput = screen.getByLabelText(/Email/i)
      const messageInput = screen.getByLabelText(/Wiadomość/i)

      await user.type(nameInput, 'Jan Kowalski')
      await user.type(emailInput, 'jan@example.com')
      await user.type(messageInput, 'Test message')

      // Submit form
      const submitButton = screen.getByRole('button', { name: /wyślij/i })
      await user.click(submitButton)

      // Should show success message
      await waitFor(() => {
        expect(screen.getByText(/Dziękuję za wiadomość/i)).toBeInTheDocument()
      })
    })

    it('should handle booking form flow', async () => {
      const user = userEvent.setup()
      render(<App />)

      // Navigate to booking
      const bookingButton = screen.getByText(/Umów wizytę/i)
      await user.click(bookingButton)

      // Fill booking form
      const serviceSelect = screen.getByLabelText(/Usługa/i)
      const dateInput = screen.getByLabelText(/Data/i)
      const timeInput = screen.getByLabelText(/Godzina/i)

      await user.selectOptions(serviceSelect, 'Terapia pedagogiczna')
      await user.type(dateInput, '2024-01-01')
      await user.type(timeInput, '10:00')

      // Submit booking
      const submitButton = screen.getByRole('button', { name: /umów/i })
      await user.click(submitButton)

      // Should show confirmation
      await waitFor(() => {
        expect(screen.getByText(/Wizyta została umówiona/i)).toBeInTheDocument()
      })
    })
  })

  describe('Theme Integration', () => {
    it('should support theme switching', async () => {
      const user = userEvent.setup()
      render(<App />)

      // Find theme toggle
      const themeToggle = screen.getByRole('button', { name: /zmień motyw/i })
      expect(themeToggle).toBeInTheDocument()

      // Click to toggle theme
      await user.click(themeToggle)

      // Should update theme
      await waitFor(() => {
        expect(document.documentElement).toHaveClass('dark')
      })
    })
  })

  describe('Analytics Integration', () => {
    it('should track page views', async () => {
      const { trackPageView } = require('../../hooks/use-analytics')

      render(<App />)

      await waitFor(() => {
        expect(trackPageView).toHaveBeenCalledWith('/')
      })
    })

    it('should track user interactions', async () => {
      const user = userEvent.setup()
      const { trackEvent } = require('../../hooks/use-analytics')

      render(<App />)

      // Click on a service
      const serviceLink = screen.getByText(/Terapia ręki/i)
      await user.click(serviceLink)

      expect(trackEvent).toHaveBeenCalledWith('service_click', 'Services', 'Terapia ręki')
    })
  })

  describe('Error Handling', () => {
    it('should handle navigation errors gracefully', async () => {
      const user = userEvent.setup()
      render(<App />)

      // Try to navigate to non-existent page
      const invalidLink = screen.getByText(/Nieistniejąca strona/i)
      if (invalidLink) {
        await user.click(invalidLink)

        // Should show 404 page
        await waitFor(() => {
          expect(screen.getByText(/Strona nie znaleziona/i)).toBeInTheDocument()
        })
      }
    })

    it('should handle form submission errors', async () => {
      const user = userEvent.setup()

      // Mock network error
      global.fetch = jest.fn(() => Promise.reject(new Error('Network error')))

      render(<App />)

      // Try to submit form
      const contactLink = screen.getByText(/Kontakt/i)
      await user.click(contactLink)

      const nameInput = screen.getByLabelText(/Imię/i)
      const emailInput = screen.getByLabelText(/Email/i)
      const messageInput = screen.getByLabelText(/Wiadomość/i)

      await user.type(nameInput, 'Jan Kowalski')
      await user.type(emailInput, 'jan@example.com')
      await user.type(messageInput, 'Test message')

      const submitButton = screen.getByRole('button', { name: /wyślij/i })
      await user.click(submitButton)

      // Should show error message
      await waitFor(() => {
        expect(screen.getByText(/Wystąpił błąd/i)).toBeInTheDocument()
      })
    })
  })

  describe('Performance Integration', () => {
    it('should load pages quickly', async () => {
      const startTime = performance.now()
      render(<App />)
      const endTime = performance.now()

      // Should render within reasonable time
      expect(endTime - startTime).toBeLessThan(1000)
    })

    it('should lazy load components', async () => {
      render(<App />)

      // Initially shouldn't have lazy-loaded content
      expect(screen.queryByText(/Szczegóły usługi/i)).not.toBeInTheDocument()

      // Scroll to trigger lazy loading
      window.scrollY = 1000
      window.dispatchEvent(new Event('scroll'))

      // Should load content after scroll
      await waitFor(() => {
        expect(screen.getByText(/Szczegóły usługi/i)).toBeInTheDocument()
      }, { timeout: 3000 })
    })
  })

  describe('Accessibility Integration', () => {
    it('should support keyboard navigation', async () => {
      const user = userEvent.setup()
      render(<App />)

      // Tab through interface
      await user.tab()
      expect(document.activeElement).toBeInstanceOf(HTMLElement)

      // Enter key should activate focused element
      if (document.activeElement?.tagName === 'BUTTON') {
        await user.keyboard('{Enter}')
      }
    })

    it('should announce screen reader changes', async () => {
      render(<App />)

      // Should have skip navigation link
      const skipLink = screen.getByText(/Pomiń nawigację/i)
      expect(skipLink).toBeInTheDocument()
      expect(skipLink).toHaveAttribute('href', '#main-content')
    })
  })
})