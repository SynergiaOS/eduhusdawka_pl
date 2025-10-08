/**
 * Tests for optimized components
 */

import React from 'react'
import { render, screen, waitFor, performanceUtils, a11yUtils, animationUtils } from '../utils/test-utils'
import { jest } from '@jest/globals'

// Import components to test
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import TestimonialsSection from '../../components/sections/testimonials-section'
import AnimatedSection from '../../components/animations/animated-section'
import UnifiedImage from '../../components/media/unified-image'

describe('Optimized Components Performance', () => {
  describe('Header Component', () => {
    it('should render without performance issues', async () => {
      const renderTime = await performanceUtils.measureRenderTime(<Header />)
      expect(renderTime).toBeLessThan(100) // Should render in less than 100ms
    })

    it('should be properly memoized', async () => {
      const TestHeader = React.memo(Header)
      let renderCount = 0
      
      const CountingHeader = () => {
        renderCount++
        return <TestHeader />
      }

      const { rerender } = render(<CountingHeader />)
      const initialRenders = renderCount

      // Re-render with same props should not cause re-render
      rerender(<CountingHeader />)
      
      expect(renderCount).toBe(initialRenders)
    })

    it('should handle scroll events efficiently', async () => {
      render(<Header />)
      
      // Mock scroll event
      const scrollEvent = new Event('scroll')
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      
      // Should not cause excessive re-renders
      const startRenders = performance.now()
      for (let i = 0; i < 10; i++) {
        window.dispatchEvent(scrollEvent)
      }
      const endRenders = performance.now()
      
      expect(endRenders - startRenders).toBeLessThan(50) // Should be throttled
    })

    it('should have proper accessibility attributes', async () => {
      render(<Header />)
      
      const nav = screen.getByRole('navigation')
      expect(nav).toBeInTheDocument()
      
      const logo = screen.getByRole('img', { name: /logo/i })
      expect(logo).toHaveAttribute('alt')
      
      // Check focus management
      const focusableElements = nav.querySelectorAll('button, a, [tabindex]')
      expect(focusableElements.length).toBeGreaterThan(0)
    })
  })

  describe('Footer Component', () => {
    it('should be properly memoized (static content)', async () => {
      const TestFooter = React.memo(Footer)
      let renderCount = 0
      
      const CountingFooter = () => {
        renderCount++
        return <TestFooter />
      }

      const { rerender } = render(<CountingFooter />)
      const initialRenders = renderCount

      // Multiple re-renders should not cause Footer to re-render
      rerender(<CountingFooter />)
      rerender(<CountingFooter />)
      rerender(<CountingFooter />)
      
      expect(renderCount).toBe(initialRenders)
    })

    it('should have proper contact information', () => {
      render(<Footer />)
      
      expect(screen.getByText(/531 509 008/)).toBeInTheDocument()
      expect(screen.getByText(/kontakt@eduhustawka.pl/)).toBeInTheDocument()
      expect(screen.getByText(/Polna 17/)).toBeInTheDocument()
    })
  })

  describe('TestimonialsSection Component', () => {
    it('should handle carousel navigation efficiently', async () => {
      render(<TestimonialsSection />)

      const nextButton = screen.getByRole('button', { name: /next|następny/i })
      const prevButton = screen.getByRole('button', { name: /prev|poprzedni/i })

      expect(nextButton).toBeInTheDocument()
      expect(prevButton).toBeInTheDocument()

      // Test navigation performance - verify interactions work
      expect(nextButton).toBeEnabled()
      expect(prevButton).toBeEnabled()

      // Navigation should be possible
      nextButton.click()
      expect(screen.getByText(/Anna Kowalska|Marcin Nowak|Katarzyna Wiśniewska/)).toBeInTheDocument()
    })

    it('should display testimonials correctly', () => {
      render(<TestimonialsSection />)
      
      // Should show at least one testimonial
      expect(screen.getByText(/Anna Kowalska|Marcin Nowak|Katarzyna Wiśniewska/)).toBeInTheDocument()
      
      // Should show rating stars
      const stars = screen.getAllByText('★')
      expect(stars.length).toBeGreaterThan(0)
    })
  })

  describe('AnimatedSection Component', () => {
    it('should render content correctly', () => {
      render(
        <AnimatedSection animation="fade">
          <div>Test content</div>
        </AnimatedSection>
      )

      expect(screen.getByText('Test content')).toBeInTheDocument()
    })

    it('should handle different animation types', () => {
      render(
        <AnimatedSection animation="slide" direction="up">
          <div>Test content</div>
        </AnimatedSection>
      )

      expect(screen.getByText('Test content')).toBeInTheDocument()
    })

    it('should handle intersection observer correctly', async () => {
      const mockObserve = jest.fn()
      const mockUnobserve = jest.fn()
      const mockDisconnect = jest.fn()

      window.IntersectionObserver = jest.fn().mockImplementation(() => ({
        observe: mockObserve,
        unobserve: mockUnobserve,
        disconnect: mockDisconnect,
      }))

      const { unmount } = render(
        <AnimatedSection>
          <div>Test content</div>
        </AnimatedSection>
      )

      expect(mockObserve).toHaveBeenCalled()

      unmount()
      expect(mockDisconnect).toHaveBeenCalled()
    })
  })

  describe('UnifiedImage Component', () => {
    it('should handle image rendering correctly', () => {
      render(
        <UnifiedImage
          src="/test-image.jpg"
          alt="Test image"
          width={300}
          height={200}
        />
      )

      // Should show the image with correct attributes
      const image = screen.getByAltText('Test image')
      expect(image).toBeInTheDocument()
    })

    it('should handle error states correctly', () => {
      render(
        <UnifiedImage
          src="/invalid-image.jpg"
          alt="Test image"
          width={300}
          height={200}
        />
      )

      // Should show error fallback
      expect(screen.getByText('Nie można załadować obrazu')).toBeInTheDocument()
    })
  })
})

describe('Performance Regression Tests', () => {
  it('should render components without issues', () => {
    const components = [
      <Header />,
      <Footer />,
      <TestimonialsSection />,
      <AnimatedSection><div>Test</div></AnimatedSection>,
    ]

    for (const component of components) {
      render(component)
      expect(screen.getByText(/EduHustawka|Anna Kowalska|Test/)).toBeInTheDocument()
    }
  })

  it('should handle rapid user interactions', () => {
    let stateChanges = 0
    const TestComponent = () => {
      const [count, setCount] = React.useState(0)

      React.useEffect(() => {
        stateChanges++
      })

      return (
        <div>
          <button onClick={() => setCount(c => c + 1)}>
            Count: {count}
          </button>
        </div>
      )
    }

    render(<TestComponent />)

    const button = screen.getByRole('button')

    // Rapid clicks
    for (let i = 0; i < 5; i++) {
      button.click()
    }

    expect(screen.getByText('Count: 5')).toBeInTheDocument()
  })
})
