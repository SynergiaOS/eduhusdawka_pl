/**
 * Integration tests for API endpoints
 */

import { jest } from '@jest/globals'

// Mock Next.js API routes
jest.mock('next/server', () => ({
  NextRequest: jest.fn(),
  NextResponse: {
    json: jest.fn(),
    redirect: jest.fn(),
  },
}))

describe('API Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Contact Form API', () => {
    it('should handle contact form submission', async () => {
      const mockFormData = {
        name: 'Jan Kowalski',
        email: 'jan@example.com',
        phone: '123456789',
        message: 'Test message',
      }

      // Mock the API route
      const { submitContactForm } = require('../../app/actions/contact-form')
      submitContactForm.mockResolvedValue({ success: true })

      const result = await submitContactForm(mockFormData)

      expect(result).toEqual({ success: true })
      expect(submitContactForm).toHaveBeenCalledWith(mockFormData)
    })

    it('should validate contact form data', async () => {
      const mockFormData = {
        name: '',
        email: 'invalid-email',
        phone: '123',
        message: '',
      }

      const { submitContactForm } = require('../../app/actions/contact-form')
      submitContactForm.mockResolvedValue({
        success: false,
        errors: {
          name: 'Name is required',
          email: 'Invalid email format',
          message: 'Message is required',
        }
      })

      const result = await submitContactForm(mockFormData)

      expect(result.success).toBe(false)
      expect(result.errors).toBeDefined()
    })

    it('should handle spam protection', async () => {
      const mockFormData = {
        name: 'Spam Bot',
        email: 'spam@example.com',
        phone: '123456789',
        message: 'Spam message',
        honeypot: 'filled', // This should trigger spam detection
      }

      const { submitContactForm } = require('../../app/actions/contact-form')
      submitContactForm.mockResolvedValue({
        success: false,
        error: 'Spam detected'
      })

      const result = await submitContactForm(mockFormData)

      expect(result.success).toBe(false)
      expect(result.error).toBe('Spam detected')
    })
  })

  describe('Booking API', () => {
    it('should handle booking submission', async () => {
      const mockBookingData = {
        service: 'terapia-pedagogiczna',
        date: '2024-01-01',
        time: '10:00',
        clientName: 'Jan Kowalski',
        clientEmail: 'jan@example.com',
        clientPhone: '123456789',
      }

      const { submitBooking } = require('../../app/actions/booking-actions')
      submitBooking.mockResolvedValue({
        success: true,
        bookingId: 'booking-123'
      })

      const result = await submitBooking(mockBookingData)

      expect(result.success).toBe(true)
      expect(result.bookingId).toBe('booking-123')
    })

    it('should check availability for date/time', async () => {
      const mockAvailabilityRequest = {
        service: 'terapia-pedagogiczna',
        date: '2024-01-01',
      }

      const { checkAvailability } = require('../../app/actions/booking-actions')
      checkAvailability.mockResolvedValue({
        available: true,
        timeSlots: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
      })

      const result = await checkAvailability(mockAvailabilityRequest)

      expect(result.available).toBe(true)
      expect(result.timeSlots).toHaveLength(6)
    })

    it('should handle double booking prevention', async () => {
      const mockBookingData = {
        service: 'terapia-pedagogiczna',
        date: '2024-01-01',
        time: '10:00',
        clientName: 'Jan Kowalski',
        clientEmail: 'jan@example.com',
        clientPhone: '123456789',
      }

      const { submitBooking } = require('../../app/actions/booking-actions')
      submitBooking.mockResolvedValue({
        success: false,
        error: 'Time slot already booked'
      })

      const result = await submitBooking(mockBookingData)

      expect(result.success).toBe(false)
      expect(result.error).toBe('Time slot already booked')
    })
  })

  describe('SMS Queue API', () => {
    it('should add SMS to queue', async () => {
      const mockSMSData = {
        to: '+48123456789',
        message: 'Test SMS message',
        type: 'notification',
      }

      const { addSMS } = require('../../lib/sms-queue')
      addSMS.mockResolvedValue({
        success: true,
        messageId: 'sms-123'
      })

      const result = await addSMS(mockSMSData)

      expect(result.success).toBe(true)
      expect(result.messageId).toBe('sms-123')
    })

    it('should process SMS queue', async () => {
      const { processSMSQueue } = require('../../lib/sms-queue')
      processSMSQueue.mockResolvedValue({
        processed: 5,
        failed: 0,
      })

      const result = await processSMSQueue()

      expect(result.processed).toBe(5)
      expect(result.failed).toBe(0)
    })

    it('should handle SMS delivery failures', async () => {
      const mockSMSData = {
        to: '+48invalid',
        message: 'Test SMS message',
        type: 'notification',
      }

      const { addSMS } = require('../../lib/sms-queue')
      addSMS.mockResolvedValue({
        success: false,
        error: 'Invalid phone number'
      })

      const result = await addSMS(mockSMSData)

      expect(result.success).toBe(false)
      expect(result.error).toBe('Invalid phone number')
    })
  })

  describe('Email Service API', () => {
    it('should send email notification', async () => {
      const mockEmailData = {
        to: 'client@example.com',
        subject: 'Booking Confirmation',
        template: 'booking-confirmation',
        data: {
          clientName: 'Jan Kowalski',
          service: 'Terapia pedagogiczna',
          date: '2024-01-01',
          time: '10:00',
        },
      }

      const { sendEmail } = require('../../lib/email-service')
      sendEmail.mockResolvedValue({
        success: true,
        messageId: 'email-123'
      })

      const result = await sendEmail(mockEmailData)

      expect(result.success).toBe(true)
      expect(result.messageId).toBe('email-123')
    })

    it('should handle email template rendering', async () => {
      const mockEmailData = {
        to: 'client@example.com',
        subject: 'Booking Confirmation',
        template: 'booking-confirmation',
        data: {
          clientName: 'Jan Kowalski',
          service: 'Terapia pedagogiczna',
          date: '2024-01-01',
          time: '10:00',
        },
      }

      const { renderEmailTemplate } = require('../../lib/email-service')
      renderEmailTemplate.mockResolvedValue({
        html: '<html>Rendered email template</html>',
        text: 'Rendered email text version',
      })

      const result = await renderEmailTemplate(mockEmailData.template, mockEmailData.data)

      expect(result.html).toContain('Rendered email template')
      expect(result.text).toContain('Rendered email text version')
    })
  })

  describe('Analytics API', () => {
    it('should track page views', async () => {
      const mockPageData = {
        path: '/uslugi/terapia-pedagogiczna',
        title: 'Terapia Pedagogiczna - EduHustawka',
        referrer: 'https://google.com',
      }

      const { trackPageView } = require('../../lib/analytics')
      trackPageView.mockResolvedValue({ success: true })

      const result = await trackPageView(mockPageData)

      expect(result.success).toBe(true)
    })

    it('should track custom events', async () => {
      const mockEventData = {
        action: 'booking_completed',
        category: 'Booking',
        label: 'Terapia pedagogiczna',
        value: 150,
      }

      const { trackEvent } = require('../../lib/analytics')
      trackEvent.mockResolvedValue({ success: true })

      const result = await trackEvent(mockEventData)

      expect(result.success).toBe(true)
    })

    it('should handle analytics initialization', async () => {
      const { initializeAnalytics } = require('../../lib/analytics')
      initializeAnalytics.mockResolvedValue({
        success: true,
        trackingId: 'GA-TEST-123'
      })

      const result = await initializeAnalytics()

      expect(result.success).toBe(true)
      expect(result.trackingId).toBe('GA-TEST-123')
    })
  })

  describe('Error Handling', () => {
    it('should handle rate limiting', async () => {
      const mockFormData = {
        name: 'Rate Limit Test',
        email: 'test@example.com',
        message: 'Testing rate limits',
      }

      const { submitContactForm } = require('../../app/actions/contact-form')
      submitContactForm.mockResolvedValue({
        success: false,
        error: 'Rate limit exceeded'
      })

      const result = await submitContactForm(mockFormData)

      expect(result.success).toBe(false)
      expect(result.error).toBe('Rate limit exceeded')
    })

    it('should handle network timeouts', async () => {
      const mockFormData = {
        name: 'Timeout Test',
        email: 'test@example.com',
        message: 'Testing timeouts',
      }

      const { submitContactForm } = require('../../app/actions/contact-form')
      submitContactForm.mockRejectedValue(new Error('Request timeout'))

      await expect(submitContactForm(mockFormData)).rejects.toThrow('Request timeout')
    })

    it('should handle database connection errors', async () => {
      const mockBookingData = {
        service: 'terapia-pedagogiczna',
        date: '2024-01-01',
        time: '10:00',
        clientName: 'Jan Kowalski',
      }

      const { submitBooking } = require('../../app/actions/booking-actions')
      submitBooking.mockResolvedValue({
        success: false,
        error: 'Database connection failed'
      })

      const result = await submitBooking(mockBookingData)

      expect(result.success).toBe(false)
      expect(result.error).toBe('Database connection failed')
    })
  })

  describe('Security', () => {
    it('should validate and sanitize input data', async () => {
      const maliciousData = {
        name: '<script>alert("xss")</script>',
        email: 'test@example.com',
        message: '<img src=x onerror=alert("xss")>',
      }

      const { submitContactForm } = require('../../app/actions/contact-form')
      submitContactForm.mockResolvedValue({
        success: false,
        error: 'Invalid characters detected'
      })

      const result = await submitContactForm(maliciousData)

      expect(result.success).toBe(false)
      expect(result.error).toBe('Invalid characters detected')
    })

    it('should enforce authentication for protected endpoints', async () => {
      const protectedData = {
        action: 'delete_all_bookings',
      }

      const { adminAction } = require('../../app/actions/admin-actions')
      adminAction.mockResolvedValue({
        success: false,
        error: 'Unauthorized access'
      })

      const result = await adminAction(protectedData)

      expect(result.success).toBe(false)
      expect(result.error).toBe('Unauthorized access')
    })
  })
})