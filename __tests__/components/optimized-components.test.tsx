/**
 * Tests for optimized components
 */

import React from 'react'
import { render, screen, waitFor, performanceUtils, a11yUtils, animationUtils } from '../utils/test-utils'
import { jest } from '@jest/globals'

// Import components to test
import Header from '../../components/header'
import Footer from '../../components/footer'
import TestimonialsSection from '../../components/testimonials-section'
import AnimatedSection from '../../components/animated-section'
import UnifiedImage from '../../components/unified-image'

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
      
      // Test navigation performance
      const startTime = performance.now()
      
      // Simulate rapid navigation
      for (let i = 0; i < 5; i++) {
        nextButton.click()
        await waitFor(() => {}, { timeout: 100 })
      }
      
      const endTime = performance.now()
      expect(endTime - startTime).toBeLessThan(500) // Should be responsive
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
    it('should respect reduced motion preferences', async () => {
      // Mock reduced motion preference
      animationUtils.mockReducedMotion(true)
      
      render(
        <AnimatedSection animation="fade">
          <div>Test content</div>
        </AnimatedSection>
      )
      
      const section = screen.getByText('Test content').parentElement
      expect(section).toHaveClass('transition-opacity', 'duration-100')
      expect(section).not.toHaveClass('duration-700')
    })

    it('should use proper animation classes when motion is enabled', async () => {
      // Mock normal motion preference
      animationUtils.mockReducedMotion(false)
      
      render(
        <AnimatedSection animation="slide" direction="up">
          <div>Test content</div>
        </AnimatedSection>
      )
      
      const section = screen.getByText('Test content').parentElement
      expect(section).toHaveClass('transition-all', 'duration-700')
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
    it('should handle loading states correctly', async () => {
      render(
        <UnifiedImage
          src="/test-image.jpg"
          alt="Test image"
          width={300}
          height={200}
        />
      )
      
      // Should show loading state initially
      const loadingSpinner = screen.getByRole('status', { name: /ładowanie/i })
      expect(loadingSpinner).toBeInTheDocument()
    })

    it('should handle error states gracefully', async () => {
      render(
        <UnifiedImage
          src="/non-existent-image.jpg"
          alt="Test image"
          width={300}
          height={200}
        />
      )
      
      // Simulate image error
      const img = screen.getByRole('img')
      const errorEvent = new Event('error')
      img.dispatchEvent(errorEvent)
      
      await waitFor(() => {
        expect(screen.getByText(/nie można załadować obrazu/i)).toBeInTheDocument()
      })
    })

    it('should have proper accessibility attributes', () => {
      render(
        <UnifiedImage
          src="/test-image.jpg"
          alt="Test image description"
          width={300}
          height={200}
        />
      )
      
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('alt', 'Test image description')
      expect(img).toHaveAttribute('loading', 'lazy')
      expect(img).toHaveAttribute('decoding', 'async')
    })
  })
})

describe('Performance Regression Tests', () => {
  it('should not have memory leaks in components', async () => {
    const components = [
      <Header />,
      <Footer />,
      <TestimonialsSection />,
      <AnimatedSection><div>Test</div></AnimatedSection>,
    ]
    
    for (const component of components) {
      const memoryResult = await performanceUtils.checkMemoryLeaks(component)
      expect(memoryResult.leaked).toBe(false)
    }
  })

  it('should maintain render performance under load', async () => {
    const renderTimes: number[] = []
    
    // Test multiple renders
    for (let i = 0; i < 10; i++) {
      const time = await performanceUtils.measureRenderTime(<Header />)
      renderTimes.push(time)
    }
    
    const averageTime = renderTimes.reduce((a, b) => a + b, 0) / renderTimes.length
    const maxTime = Math.max(...renderTimes)
    
    expect(averageTime).toBeLessThan(50) // Average should be under 50ms
    expect(maxTime).toBeLessThan(100) // No single render should exceed 100ms
  })

  it('should handle rapid state changes efficiently', async () => {
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
    const startTime = performance.now()
    
    // Rapid clicks
    for (let i = 0; i < 20; i++) {
      button.click()
      await waitFor(() => {}, { timeout: 10 })
    }
    
    const endTime = performance.now()
    
    expect(endTime - startTime).toBeLessThan(1000) // Should handle rapid changes
    expect(stateChanges).toBeLessThan(25) // Should not cause excessive re-renders
  })
})
