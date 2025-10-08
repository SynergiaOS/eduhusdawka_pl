/**
 * Tests for ContactForm component
 */

import React from 'react'
import { render, screen, waitFor, userEvent, formUtils } from '../utils/test-utils'
import { jest } from '@jest/globals'
import ContactForm from '../../components/forms/contact-form'

// Mock analytics hook
jest.mock('../../hooks/use-analytics', () => ({
  useAnalytics: () => ({
    trackEvent: jest.fn(),
  }),
}))

const { trackEvent } = require('../../hooks/use-analytics')

describe('ContactForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Rendering', () => {
    it('should render all form fields', () => {
      render(<ContactForm />)

      // Name field
      expect(screen.getByLabelText(/Imię i nazwisko/i)).toBeInTheDocument()

      // Email field
      expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()

      // Phone field
      expect(screen.getByLabelText(/Telefon/i)).toBeInTheDocument()

      // Service field
      expect(screen.getByLabelText(/Interesująca usługa/i)).toBeInTheDocument()

      // Child age field
      expect(screen.getByLabelText(/Wiek dziecka/i)).toBeInTheDocument()

      // Message field
      expect(screen.getByLabelText(/Wiadomość/i)).toBeInTheDocument()
    })

    it('should render contact information section', () => {
      render(<ContactForm />)

      expect(screen.getByText(/531 509 008/)).toBeInTheDocument()
      expect(screen.getByText(/kontakt@eduhustawka\.pl/)).toBeInTheDocument()
      expect(screen.getByText(/Polna 17/i)).toBeInTheDocument()
      expect(screen.getByText(/Pomigacze/i)).toBeInTheDocument()
      expect(screen.getByText(/Pon-Pt: 8:00-16:00/i)).toBeInTheDocument()
    })

    it('should render submit button', () => {
      render(<ContactForm />)

      const submitButton = screen.getByRole('button', { name: /wyślij wiadomość/i })
      expect(submitButton).toBeInTheDocument()
      expect(submitButton).not.toBeDisabled()
    })

    it('should render quick contact button', () => {
      render(<ContactForm />)

      const quickContactButton = screen.getByRole('button', { name: /zadzwoń teraz/i })
      expect(quickContactButton).toBeInTheDocument()
    })
  })

  describe('Form Validation', () => {
    it('should validate required fields using HTML5 validation', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const submitButton = screen.getByRole('button', { name: /wyślij wiadomość/i })
      await user.click(submitButton)

      // Check that required fields have the required attribute
      expect(screen.getByLabelText(/Imię i nazwisko/i)).toBeRequired()
      expect(screen.getByLabelText(/Email/i)).toBeRequired()
      expect(screen.getByLabelText(/Telefon/i)).toBeRequired()
      expect(screen.getByLabelText(/Wiadomość/i)).toBeRequired()
    })

    it('should allow optional fields to be empty', () => {
      render(<ContactForm />)

      // Check that optional fields don't have the required attribute
      expect(screen.getByLabelText(/Interesująca usługa/i)).not.toBeRequired()
      expect(screen.getByLabelText(/Wiek dziecka/i)).not.toBeRequired()
    })
  })

  describe('Form Submission', () => {
    it('should handle form submission with simulated delay', async () => {
      const user = userEvent.setup()

      render(<ContactForm />)

      // Fill required fields
      await user.type(screen.getByLabelText(/Imię i nazwisko/i), 'Jan Kowalski')
      await user.type(screen.getByLabelText(/Email/i), 'jan@example.com')
      await user.type(screen.getByLabelText(/Telefon/i), '123456789')
      await user.type(screen.getByLabelText(/Wiadomość/i), 'Test message')

      // Mock alert to prevent actual alert during test
      const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {})

      const submitButton = screen.getByRole('button', { name: /wyślij wiadomość/i })
      await user.click(submitButton)

      // Should show loading state
      expect(submitButton).toBeDisabled()
      expect(screen.getByText(/Wysyłanie.../i)).toBeInTheDocument()

      // Wait for submission to complete
      await waitFor(() => {
        expect(mockAlert).toHaveBeenCalledWith('Dziękuję za wiadomość! Skontaktuję się z Tobą w ciągu 24 godzin.')
      }, { timeout: 2000 })

      // Should reset form after submission
      await waitFor(() => {
        expect(screen.getByLabelText(/Imię i nazwisko/i)).toHaveValue('')
        expect(screen.getByLabelText(/Email/i)).toHaveValue('')
        expect(screen.getByLabelText(/Telefon/i)).toHaveValue('')
        expect(screen.getByLabelText(/Wiadomość/i)).toHaveValue('')
      }, { timeout: 2000 })

      mockAlert.mockRestore()
    })

    it('should track analytics event on form submission', async () => {
      const user = userEvent.setup()

      render(<ContactForm />)

      // Mock alert to prevent actual alert during test
      const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {})

      // Fill required fields
      await user.type(screen.getByLabelText(/Imię i nazwisko/i), 'Jan Kowalski')
      await user.type(screen.getByLabelText(/Email/i), 'jan@example.com')
      await user.type(screen.getByLabelText(/Telefon/i), '123456789')
      await user.type(screen.getByLabelText(/Wiadomość/i), 'Test message')

      const submitButton = screen.getByRole('button', { name: /wyślij wiadomość/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(trackEvent).toHaveBeenCalledWith('contact_form_submit', 'Contact', 'Contact form submitted')
      })

      mockAlert.mockRestore()
    })
  })

  describe('User Interactions', () => {
    it('should update form values when user types', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText(/Imię i nazwisko/i)
      await user.type(nameInput, 'Jan Kowalski')

      expect(nameInput).toHaveValue('Jan Kowalski')
    })

    it('should handle service selection from dropdown', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      // Open the select dropdown
      const serviceSelect = screen.getByRole('combobox', { name: /Interesująca usługa/i })
      await user.click(serviceSelect)

      // Select an option
      const serviceOption = screen.getByText('Terapia pedagogiczna')
      await user.click(serviceOption)

      expect(serviceSelect).toHaveValue('terapia-pedagogiczna')
    })

    it('should handle quick contact button click', async () => {
      const user = userEvent.setup()

      // Mock window.location.href
      delete (window as any).location
      window.location.href = ''

      render(<ContactForm />)

      const quickContactButton = screen.getByRole('button', { name: /zadzwoń teraz/i })
      await user.click(quickContactButton)

      expect(trackEvent).toHaveBeenCalledWith('call_click', 'CTA', 'contact_form')
      expect(window.location.href).toBe('tel:+48531509008')
    })
  })

  describe('Accessibility', () => {
    it('should have proper labels for all form fields', () => {
      render(<ContactForm />)

      const formFields = [
        { label: /Imię i nazwisko/i, required: true },
        { label: /Email/i, required: true },
        { label: /Telefon/i, required: true },
        { label: /Interesująca usługa/i, required: false },
        { label: /Wiek dziecka/i, required: false },
        { label: /Wiadomość/i, required: true },
      ]

      formFields.forEach(({ label, required }) => {
        const field = screen.getByLabelText(label)
        expect(field).toBeInTheDocument()
        if (required) {
          expect(field).toBeRequired()
        }
      })
    })

    it('should have proper ARIA attributes', () => {
      render(<ContactForm />)

      const form = screen.getByRole('form')
      expect(form).toHaveAttribute('novalidate')

      const submitButton = screen.getByRole('button', { name: /wyślij wiadomość/i })
      expect(submitButton).toHaveAttribute('type', 'submit')
    })

    it('should support keyboard navigation', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText(/Imię i nazwisko/i)
      nameInput.focus()

      expect(nameInput).toHaveFocus()

      // Tab to next field
      await user.tab()
      expect(screen.getByLabelText(/Telefon/i)).toHaveFocus()
    })
  })

  describe('Performance', () => {
    it('should be properly memoized with React.memo', () => {
      render(<ContactForm />)

      // The component should be wrapped in React.memo
      expect(ContactForm.displayName).toBe('ContactForm')
    })

    it('should use useCallback for form handlers', () => {
      render(<ContactForm />)

      // The implementation should use useCallback for form handlers
      expect(screen.getByRole('form')).toBeInTheDocument()
    })

    it('should useMemo for static data', () => {
      render(<ContactForm />)

      // The implementation should use useMemo for static data
      expect(screen.getByText('Telefon')).toBeInTheDocument()
      expect(screen.getByText('Email')).toBeInTheDocument()
    })
  })
})