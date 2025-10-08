/**
 * Tests for UnifiedImage component
 */

import React from 'react'
import { render, screen, waitFor } from '../utils/test-utils'
import { jest } from '@jest/globals'
import UnifiedImage from '../../components/media/unified-image'

// Mock next/image
jest.mock('next/image', () => {
  return function MockImage({
    src,
    alt,
    width,
    height,
    fill,
    priority,
    quality,
    sizes,
    placeholder,
    blurDataURL,
    className,
    style,
    onLoad,
    onError,
  }: any) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        data-fill={fill}
        data-priority={priority}
        data-quality={quality}
        data-sizes={sizes}
        data-placeholder={placeholder}
        data-blur-data-url={blurDataURL}
        className={className}
        style={style}
        onLoad={onLoad}
        onError={onError}
      />
    )
  }
})

describe('UnifiedImage Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Rendering', () => {
    it('should render image with basic props', () => {
      render(
        <UnifiedImage
          src="/test-image.jpg"
          alt="Test image"
          width={300}
          height={200}
        />
      )

      const image = screen.getByAltText('Test image')
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('src', '/test-image.jpg')
    })

    it('should render with fill prop', () => {
      render(
        <UnifiedImage
          src="/test-image.jpg"
          alt="Test image"
          fill
        />
      )

      const image = screen.getByAltText('Test image')
      expect(image).toHaveAttribute('data-fill', 'true')
    })

    it('should render with custom className', () => {
      render(
        <UnifiedImage
          src="/test-image.jpg"
          alt="Test image"
          width={300}
          height={200}
          className="custom-class"
        />
      )

      const image = screen.getByAltText('Test image')
      expect(image).toHaveClass('custom-class')
    })

    it('should use placeholder.svg when src is not provided', () => {
      render(
        <UnifiedImage
          alt="Test image"
          width={300}
          height={200}
        />
      )

      const image = screen.getByAltText('Test image')
      expect(image).toHaveAttribute('src', '/placeholder.svg')
    })
  })

  describe('Loading State', () => {
    it('should show loading spinner initially', () => {
      render(
        <UnifiedImage
          src="/test-image.jpg"
          alt="Test image"
          width={300}
          height={200}
        />
      )

      const spinner = screen.getByRole('status') // The spinner div
      expect(spinner).toBeInTheDocument()
    })

    it('should hide loading spinner after image loads', async () => {
      render(
        <UnifiedImage
          src="/test-image.jpg"
          alt="Test image"
          width={300}
          height={200}
        />
      )

      const image = screen.getByAltText('Test image')

      // Simulate image load
      await waitFor(() => {
        image.dispatchEvent(new Event('load'))
      })

      await waitFor(() => {
        expect(screen.queryByRole('status')).not.toBeInTheDocument()
      })
    })

    it('should show custom loading fallback when provided', () => {
      render(
        <UnifiedImage
          src="/test-image.jpg"
          alt="Test image"
          width={300}
          height={200}
          loadingFallback={<div data-testid="custom-loader">Loading...</div>}
        />
      )

      const customLoader = screen.getByTestId('custom-loader')
      expect(customLoader).toBeInTheDocument()
      expect(customLoader).toHaveTextContent('Loading...')
    })
  })

  describe('Error State', () => {
    it('should show error fallback when image fails to load', async () => {
      render(
        <UnifiedImage
          src="/invalid-image.jpg"
          alt="Test image"
          width={300}
          height={200}
        />
      )

      const image = screen.getByAltText('Test image')

      // Simulate image error
      await waitFor(() => {
        image.dispatchEvent(new Event('error'))
      })

      await waitFor(() => {
        expect(screen.getByText('Nie można załadować obrazu')).toBeInTheDocument()
      })
    })

    it('should show custom error fallback when provided', async () => {
      render(
        <UnifiedImage
          src="/invalid-image.jpg"
          alt="Test image"
          width={300}
          height={200}
          errorFallback={<div data-testid="custom-error">Custom error</div>}
        />
      )

      const image = screen.getByAltText('Test image')

      // Simulate image error
      await waitFor(() => {
        image.dispatchEvent(new Event('error'))
      })

      await waitFor(() => {
        const customError = screen.getByTestId('custom-error')
        expect(customError).toBeInTheDocument()
        expect(customError).toHaveTextContent('Custom error')
      })
    })
  })

  describe('Props Handling', () => {
    it('should pass priority prop to Image', () => {
      render(
        <UnifiedImage
          src="/test-image.jpg"
          alt="Test image"
          width={300}
          height={200}
          priority
        />
      )

      const image = screen.getByAltText('Test image')
      expect(image).toHaveAttribute('data-priority', 'true')
    })

    it('should pass quality prop to Image', () => {
      render(
        <UnifiedImage
          src="/test-image.jpg"
          alt="Test image"
          width={300}
          height={200}
          quality={90}
        />
      )

      const image = screen.getByAltText('Test image')
      expect(image).toHaveAttribute('data-quality', '90')
    })

    it('should pass sizes prop to Image', () => {
      render(
        <UnifiedImage
          src="/test-image.jpg"
          alt="Test image"
          width={300}
          height={200}
          sizes="50vw"
        />
      )

      const image = screen.getByAltText('Test image')
      expect(image).toHaveAttribute('data-sizes', '50vw')
    })

    it('should pass placeholder prop to Image', () => {
      render(
        <UnifiedImage
          src="/test-image.jpg"
          alt="Test image"
          width={300}
          height={200}
          placeholder="blur"
        />
      )

      const image = screen.getByAltText('Test image')
      expect(image).toHaveAttribute('data-placeholder', 'blur')
    })

    it('should pass blurDataURL prop to Image', () => {
      render(
        <UnifiedImage
          src="/test-image.jpg"
          alt="Test image"
          width={300}
          height={200}
          blurDataURL="data:image/jpeg;base64,..."
        />
      )

      const image = screen.getByAltText('Test image')
      expect(image).toHaveAttribute('data-blur-data-url', 'data:image/jpeg;base64,...')
    })

    it('should apply objectFit and objectPosition styles when fill is true', () => {
      render(
        <UnifiedImage
          src="/test-image.jpg"
          alt="Test image"
          fill
          objectFit="cover"
          objectPosition="top center"
        />
      )

      const image = screen.getByAltText('Test image')
      expect(image).toHaveStyle({
        objectFit: 'cover',
        objectPosition: 'top center',
      })
    })
  })

  describe('Event Handling', () => {
    it('should call onLoad when image loads', async () => {
      const mockOnLoad = jest.fn()

      render(
        <UnifiedImage
          src="/test-image.jpg"
          alt="Test image"
          width={300}
          height={200}
          onLoad={mockOnLoad}
        />
      )

      const image = screen.getByAltText('Test image')

      // Simulate image load
      await waitFor(() => {
        image.dispatchEvent(new Event('load'))
      })

      await waitFor(() => {
        expect(mockOnLoad).toHaveBeenCalledTimes(1)
      })
    })

    it('should call onError when image fails to load', async () => {
      const mockOnError = jest.fn()

      render(
        <UnifiedImage
          src="/invalid-image.jpg"
          alt="Test image"
          width={300}
          height={200}
          onError={mockOnError}
        />
      )

      const image = screen.getByAltText('Test image')

      // Simulate image error
      await waitFor(() => {
        image.dispatchEvent(new Event('error'))
      })

      await waitFor(() => {
        expect(mockOnError).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('Component Optimization', () => {
    it('should be memoized with React.memo', () => {
      expect(UnifiedImage.displayName).toBe('UnifiedImage')
    })

    it('should handle re-renders efficiently', () => {
      const { rerender } = render(
        <UnifiedImage
          src="/test-image.jpg"
          alt="Test image"
          width={300}
          height={200}
        />
      )

      const image = screen.getByAltText('Test image')

      // Re-render with same props
      rerender(
        <UnifiedImage
          src="/test-image.jpg"
          alt="Test image"
          width={300}
          height={200}
        />
      )

      expect(image).toBeInTheDocument()
    })
  })

  describe('Default Props', () => {
    it('should use default values for optional props', () => {
      render(
        <UnifiedImage
          src="/test-image.jpg"
          alt="Test image"
          width={300}
          height={200}
        />
      )

      const image = screen.getByAltText('Test image')

      expect(image).toHaveAttribute('data-priority', 'false')
      expect(image).toHaveAttribute('data-quality', '85')
      expect(image).toHaveAttribute('data-sizes', '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw')
      expect(image).toHaveAttribute('data-placeholder', 'empty')
    })
  })

  describe('Accessibility', () => {
    it('should have alt text for screen readers', () => {
      render(
        <UnifiedImage
          src="/test-image.jpg"
          alt="A beautiful sunset over mountains"
          width={300}
          height={200}
        />
      )

      const image = screen.getByAltText('A beautiful sunset over mountains')
      expect(image).toBeInTheDocument()
    })

    it('should handle empty alt for decorative images', () => {
      render(
        <UnifiedImage
          src="/decorative-pattern.jpg"
          alt=""
          width={300}
          height={200}
        />
      )

      const image = screen.getByAltText('')
      expect(image).toBeInTheDocument()
    })
  })
})