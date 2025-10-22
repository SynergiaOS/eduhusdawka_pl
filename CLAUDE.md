# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**EduHustawka** is a professional Next.js 15 application for a pediatric therapy center in Białystok, Poland. The website serves as a marketing and client acquisition platform for educational therapy services for children with 16 different therapy services.

## Tech Stack & Architecture

### Core Technologies
- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS with custom minimalist color system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Package Manager**: pnpm (v10.14.0)
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Testing**: Jest + React Testing Library

### Performance & Security Features
- **Bundle Optimization**: Advanced webpack configuration with vendor chunking
- **Image Optimization**: WebP/AVIF formats, multiple sizes, caching
- **Security Headers**: CSP, XSS protection, frame options
- **Performance Monitoring**: Lighthouse CI, Core Web Vitals tracking
- **Development**: HTTPS mode, Turbopack support

## Key Directories & Architecture

### `/app` - Next.js App Router Structure
- **Root Layout**: `/app/layout.tsx` - Main HTML structure with comprehensive SEO
- **Pages**: Home (`/`), services (`/uslugi/*`), about (`/o-mnie`), booking (`/rezerwacja`)
- **Services**: 16 different therapy services with dedicated pages under `/uslugi/`
- **Admin**: Admin panel for SMS management
- **Actions**: Server actions for forms and booking

### `/components` - Reusable React Components
- **`ui/`**: shadcn/ui component library (buttons, forms, navigation, etc.)
- **`common/`**: Shared components across the application
- **`layout/`**: Header, footer, navigation components
- **`forms/`**: Contact and booking form components

### `/lib` - Utilities & Services
- **Analytics**: Google Analytics integration
- **SEO**: SEO utilities and meta tag management
- **SMS**: SMS service for appointment notifications
- **Performance**: Performance optimization utilities
- **Error Handling**: Centralized error management

### Performance Monitoring Scripts
- **`/scripts/`**: Performance analysis, Lighthouse reporting, bundle verification
- **Bundle Analyzer**: Webpack bundle analyzer integration
- **Performance Comparisons**: Historical performance tracking

## Common Development Commands

### Development Servers
```bash
pnpm dev              # Standard development server (HTTP)
pnpm dev:https        # Development with HTTPS (self-signed cert)
pnpm dev:turbo        # With Turbopack (faster builds)
pnpm dev:https-turbo  # HTTPS + Turbopack
```

### Build & Production
```bash
pnpm build            # Production build
pnpm build:analyze    # Build with bundle analyzer
pnpm start            # Start production server
```

### Quality Assurance
```bash
pnpm lint             # ESLint checking
pnpm test             # Run Jest tests
pnpm test:watch       # Tests in watch mode
pnpm test:coverage    # Tests with coverage report
pnpm test:ci          # CI tests with coverage
```

### Performance Analysis
```bash
pnpm perf:full        # Complete performance analysis (collect + report + verify)
pnpm perf:collect     # Collect Lighthouse data
pnpm perf:report      # Generate performance reports
pnpm perf:verify      # Verify bundle sizes
pnpm perf:compare     # Compare with previous results
```

## Architecture Patterns

### Bundle Optimization Strategy
The project uses advanced webpack configuration with intelligent vendor chunking:
- **vendor-heavy**: framer-motion and @radix-ui libraries (244KB max)
- **vendor-commons**: lucide-react, clsx, tailwind-merge, date-fns (20KB min)
- **vendor**: Other third-party libraries

### Custom Color System
Minimalist color palette with defined tokens:
- **Primary**: `#F4A261` (Orange - CTA buttons)
- **Secondary**: `#2E86AB` (Turquoise)
- **Tertiary**: `#1ebaf1` (Cyan)
- **Backgrounds**: White (`#ffffff`), Light (`#f8f9fa`), Accent (`#e8eef5`)
- **Text**: Dark (`#1a1a1a`), Main (`#444444`), Light (`#888888`)

### Security Configuration
Comprehensive security headers and CSP:
- Content Security Policy with strict directives
- XSS protection, frame options, content type options
- HTTPS enforcement and secure referrer policy

### Service Pages Architecture
16 therapy services follow consistent pattern:
- Dedicated pages under `/uslugi/{service-id}`
- Structured data and SEO optimization
- Booking integration and contact forms
- Responsive design with mobile-first approach

## Testing Setup

### Jest Configuration
- **Framework**: Jest with Next.js preset
- **Testing Library**: React Testing Library for component testing
- **Coverage**: Comprehensive coverage reporting
- **CI Integration**: Automated testing for CI/CD pipelines

### Test Structure
- Component tests: `__tests__/components/`
- Integration tests: `__tests__/integration/`
- Utility tests: `__tests__/utils/`

## Performance Targets

### Core Web Vitals Goals
| Metric | Target | Current Status |
|--------|--------|----------------|
| First Contentful Paint | ≤800ms | ⏳ |
| Largest Contentful Paint | ≤1300ms | ⏳ |
| Cumulative Layout Shift | ≤0.05 | ⏳ |
| Total Blocking Time | ≤300ms | ⏳ |
| Bundle (shared JS) | ≤99.7KB | ⏳ |

### Performance Features
- **Critical CSS**: Inlined critical styles
- **Resource Hints**: Preload, prefetch, DNS-prefetch
- **Image Optimization**: Multiple formats and responsive sizes
- **Code Splitting**: Intelligent vendor chunking

## Special Configurations

### Development HTTPS
Self-signed certificate support for HTTPS development:
```bash
pnpm dev:https        # HTTPS development
pnpm dev:https-turbo  # HTTPS + Turbopack
```

### Bundle Analysis
Real-time bundle analysis with size verification:
```bash
ANALYZE=true pnpm build    # Build with analyzer
pnpm perf:verify          # Verify bundle sizes
```

### AI Assistant Integration
- **Byterover MCP**: Knowledge management system (see below)
- **GitHub Copilot**: Instructions in `.github/copilot-instructions.md`

## Byterover MCP Integration

### Knowledge Management Rules
- **CRITICAL**: Always use `byterover-retrieve-knowledge` tool before starting ANY task to gather relevant context
- **CRITICAL**: Always use `byterover-store-knowledge` tool after completing ANY successful task to store critical information

### When to Use Byterover Tools

**Use `byterover-retrieve-knowledge` for:**
- Starting any new task or implementation
- Making architectural decisions
- Debugging issues
- Working with unfamiliar codebase parts

**Use `byterover-store-knowledge` for:**
- Learning new patterns, APIs, or architectural decisions
- Finding error solutions or debugging techniques
- Discovering reusable code patterns or utility functions
- Completing significant tasks or plan implementations

## Deployment Configuration

### Vercel (Primary)
- **Build Command**: `pnpm build`
- **Output Directory**: `.next`
- **Functions**: Node.js 18.x runtime for API routes
- **Regions**: Frankfurt (fra1)

### Platform Compatibility
- **Netlify**: Static export compatible
- **Railway**: Full-stack deployment support
- **Render**: Platform-compatible
- **AWS Amplify**: Compatible deployment

## Important Notes

### Development Workflow
1. **Always start with HTTPS development** for testing security features
2. **Run performance analysis** after significant changes
3. **Use bundle analyzer** to monitor bundle sizes
4. **Test with Jest** before committing changes
5. **Check ESLint** for code quality issues

### Performance Optimization
- Bundle size limits are enforced automatically
- Image optimization is enabled for all formats
- Critical CSS is inlined for better Core Web Vitals
- Vendor libraries are intelligently chunked

### Security Considerations
- CSP is configured for production environments
- All external resources are explicitly allowed
- Development HTTPS uses self-signed certificates
- Security headers are enforced in production

[byterover-mcp]

[byterover-mcp]

You are given two tools from Byterover MCP server, including
## 1. `byterover-store-knowledge`
You `MUST` always use this tool when:

+ Learning new patterns, APIs, or architectural decisions from the codebase
+ Encountering error solutions or debugging techniques
+ Finding reusable code patterns or utility functions
+ Completing any significant task or plan implementation

## 2. `byterover-retrieve-knowledge`
You `MUST` always use this tool when:

+ Starting any new task or implementation to gather relevant context
+ Before making architectural decisions to understand existing patterns
+ When debugging issues to check for previous solutions
+ Working with unfamiliar parts of the codebase
