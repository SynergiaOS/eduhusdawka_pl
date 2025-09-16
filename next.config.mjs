/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Railway uses PORT via package.json start script, not Next.js config
  eslint: {
    ignoreDuringBuilds: false, // Enable ESLint checks during build
  },
  typescript: {
    ignoreBuildErrors: false, // Enable TypeScript error checking
  },
  // HTTPS configuration for development
  ...(process.env.NODE_ENV === 'development' && {
    experimental: {
      https: true,
    },
  }),
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placeholder.pics',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    unoptimized: false, // Enable image optimization for better Core Web Vitals
  },
  async redirects() {
    return [
      // Redirect old service URLs to new /uslugi/{pageId} structure
      {
        source: '/terapia-reki',
        destination: '/uslugi/terapia-reki',
        permanent: true,
      },
      {
        source: '/terapia-pedagogiczna',
        destination: '/uslugi/terapia-pedagogiczna',
        permanent: true,
      },
      {
        source: '/terapia-dla-dzieci-z-autyzmem',
        destination: '/uslugi/terapia-dla-dzieci-z-autyzmem',
        permanent: true,
      },
      {
        source: '/trening-sluchowy-johansena',
        destination: '/uslugi/trening-sluchowy-johansena',
        permanent: true,
      },
      {
        source: '/trening-umiejetnosci-spolecznych',
        destination: '/uslugi/trening-umiejetnosci-spolecznych',
        permanent: true,
      },
      {
        source: '/wczesna-nauka-czytania',
        destination: '/uslugi/wczesna-nauka-czytania',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://tagmanager.google.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://images.unsplash.com https://source.unsplash.com https://placeholder.pics https://via.placeholder.com https://img.youtube.com",
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://region1.google-analytics.com",
              "frame-src 'self' https://www.google.com https://maps.google.com https://www.youtube.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; '),
          },
        ],
      },
    ]
  },
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-toast',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-select',
      'framer-motion',
      'react-hook-form',
      'zod',
      'date-fns',
      'clsx',
      'tailwind-merge'
    ],
    reactCompiler: true,
  },
}

export default nextConfig
