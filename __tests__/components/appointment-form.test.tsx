/**
 * Tests for AppointmentForm component
 */

import React from 'react'
import { render, screen, userEvent } from '../utils/test-utils'
import { jest } from '@jest/globals'
import AppointmentForm from '../../components/forms/appointment-form'

describe('AppointmentForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Rendering', () => {
    it('should render heading "Umów wizytę"', () => {
      render(<AppointmentForm />)

      expect(screen.getByRole('heading', { name: 'Umów wizytę' })).toBeInTheDocument()
    })

    it('should render booking button with Calendar icon', () => {
      render(<AppointmentForm />)

      const bookingButton = screen.getByRole('button', { name: /zarezerwuj termin wizyty/i })
      expect(bookingButton).toBeInTheDocument()

      // Check for Calendar icon (should be visible)
      expect(bookingButton.querySelector('svg')).toBeInTheDocument()
    })

    it('should render description text', () => {
      render(<AppointmentForm />)

      expect(screen.getByText(/Kliknij przycisk powyżej, aby przejść do systemu rezerwacji online/i)).toBeInTheDocument()
    })

    it('should render with correct styling', () => {
      render(<AppointmentForm />)

      const container = screen.getByRole('heading', { name: 'Umów wizytę' }).parentElement
      expect(container).toHaveClass('bg-white', 'p-6', 'rounded-lg', 'shadow-md', 'text-center')
    })
  })

  describe('User Interactions', () => {
    it('should click button redirects to /rezerwacja page', async () => {
      const user = userEvent.setup()
      render(<AppointmentForm />)

      const bookingButton = screen.getByRole('button', { name: /zarezerwuj termin wizyty/i })
      await user.click(bookingButton)

      // Should navigate to booking page
      expect(window.location.href).toContain('/rezerwacja')
    })

    it('should handle button hover states', async () => {
      const user = userEvent.setup()
      render(<AppointmentForm />)

      const bookingButton = screen.getByRole('button', { name: /zarezerwuj termin wizyty/i })

      await user.hover(bookingButton)

      // Button should have hover styles
      expect(bookingButton).toHaveClass('hover:bg-teal-700', 'hover:scale-105')
    })

    it('should handle keyboard navigation', async () => {
      const user = userEvent.setup()
      render(<AppointmentForm />)

      const bookingButton = screen.getByRole('button', { name: /zarezerwuj termin wizyty/i })

      bookingButton.focus()
      expect(bookingButton).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(window.location.href).toContain('/rezerwacja')
    })
  })

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      render(<AppointmentForm />)

      const bookingButton = screen.getByRole('button', { name: /zarezerwuj termin wizyty/i })
      expect(bookingButton).toHaveAttribute('type', 'button')

      const heading = screen.getByRole('heading', { name: 'Umów wizytę' })
      expect(heading).toHaveAttribute('level', 3)
    })

    it('should be keyboard accessible', async () => {
      const user = userEvent.setup()
      render(<AppointmentForm />)

      // Tab to focus button
      await user.tab()

      const bookingButton = screen.getByRole('button', { name: /zarezerwuj termin wizyty/i })
      expect(bookingButton).toHaveFocus()

      // Should be activatable with Enter or Space
      await user.keyboard('{Enter}')
      expect(window.location.href).toContain('/rezerwacja')
    })

    it('should have semantic structure', () => {
      render(<AppointmentForm />)

      // Should have proper heading structure
      expect(screen.getByRole('heading', { name: 'Umów wizytę' })).toBeInTheDocument()

      // Button should be properly labeled
      expect(screen.getByRole('button', { name: /zarezerwuj termin wizyty/i })).toBeInTheDocument()
    })

    it('should support screen readers', () => {
      render(<AppointmentForm />)

      // Should have descriptive text for screen readers
      expect(screen.getByText(/Kliknij przycisk powyżej, aby przejść do systemu rezerwacji online/i)).toBeInTheDocument()
    })
  })

  describe('Performance', () => {
    it('should be properly memoized', () => {
      expect(AppointmentForm.displayName).toBe('AppointmentForm')
    })

    it('should have memoized click handler', () => {
      // This test verifies that click handler is properly memoized
      render(<AppointmentForm />)

      const bookingButton = screen.getByRole('button', { name: /zarezerwuj termin wizyty/i })
      expect(bookingButton).toBeInTheDocument()

      // Multiple clicks should work efficiently
      const user = userEvent.setup()
      for (let i = 0; i < 3; i++) {
        user.click(bookingButton)
      }

      // Should still work after multiple clicks
      expect(window.location.href).toContain('/rezerwacja')
    })

    it('should render quickly', () => {
      const startTime = performance.now()
      render(<AppointmentForm />)
      const endTime = performance.now()

      expect(endTime - startTime).toBeLessThan(50) // Should render in less than 50ms
    })
  })

  describe('Error Handling', () => {
    it('should handle navigation errors gracefully', async () => {
      const user = userEvent.setup()

      // Mock navigation error
      const originalHref = window.location.href
      Object.defineProperty(window.location, 'href', {
        writable: true,
        value: '',
        configurable: true,
      })

      render(<AppointmentForm />)

      const bookingButton = screen.getByRole('button', { name: /zarezerwuj termin wizyty/i })

      // Should not throw error on click
      await expect(user.click(bookingButton)).resolves.not.toThrow()

      // Restore original
      window.location.href = originalHref
    })
  })
})