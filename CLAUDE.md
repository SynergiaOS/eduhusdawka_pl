<<<<<<< HEAD
=======
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

[byterover-mcp]

## Important
always use byterover-retrieve-knowledge tool to get the related context before any tasks
always use byterover-store-knowledge to store all the critical informations after sucessful tasks

## EduHustawka - Next.js Therapy Center Website

## Development Commands

```bash
# Development
pnpm dev              # Standard development server
pnpm dev:https        # HTTPS development server  
pnpm dev:turbo        # With Turbopack
pnpm dev:https-turbo  # HTTPS + Turbopack

# Production
pnpm build            # Build for production
pnpm start            # Start production server

# Testing
pnpm test             # Run Jest tests
pnpm test:watch       # Watch mode
pnpm test:coverage    # With coverage report
pnpm test:ci          # CI mode

# Code Quality
pnpm lint             # ESLint check
```

## Architecture Overview

### Core Structure

- **Next.js 15** with App Router and React Server Components
- **TypeScript** with strict configuration
- **Tailwind CSS** with custom design system using teal color palette
- **shadcn/ui** components with Radix UI primitives
- **React Compiler** enabled for optimization

### Key Directories

- `app/` - App Router pages with nested layouts and server components
- `components/` - Reusable React components (40+ components)
- `lib/` - Utilities, services, and business logic
- `app/actions/` - Next.js Server Actions for form handling

### Component Architecture

- **Server Components by default** - Most components are RSCs for performance
- **Client components** marked with 'use client' for interactivity
- **Layout primitives** (`layout-primitives.tsx`) - Reusable layout components with presets
- **Error boundaries** and fallback components throughout

### Form Handling

- **React Hook Form** with Zod validation
- **Server Actions** in `app/actions/` for secure form processing
- **Spam protection** with honeypot fields and rate limiting
- **SMS/Email notifications** via Twilio/Resend integration

### Performance Optimizations

- **Image optimization** with Next.js Image component and custom optimization utilities
- **Bundle optimization** with package imports optimization in next.config.mjs
- **CSP headers** and security middleware configured
- **Framer Motion** for animations with lazy loading

### Testing Setup

- **Jest** with React Testing Library
- **MSW** for API mocking
- Test files in `__tests__/` directories alongside components
- Coverage collection from app/, components/, lib/, hooks/ directories

### Services Integration

- **Google Analytics/GTM** - Analytics tracking with GDPR compliance
- **Google Maps** - Embedded maps with directions
- **YouTube embeds** - Lazy-loaded video content
- **SMS queue system** - Background job processing for notifications

### Environment Variables

Required `.env.local` variables:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics
- SMS/email service credentials for Twilio/Resend
- Production URL configuration

### Content Management

- **Static content** in page components with Polish language
- **Blog system** with dynamic routing `/blog/[slug]`
- **Service pages** with consistent structure and SEO optimization
- **Structured data** for better search engine visibility

## Development Notes

### Styling Guidelines

- Uses CSS custom properties for theming
- Extended Tailwind config with custom teal color palette (25-950 shades)
- Typography scale optimized for readability
- Responsive design with mobile-first approach

### Security Features

- Comprehensive CSP headers in next.config.mjs
- XSS protection and security headers
- Input validation with Zod schemas
- Rate limiting on forms and API endpoints

### SEO & Accessibility

- Complete OpenGraph and Twitter Card metadata
- Structured data for local business
- ARIA labels and semantic HTML
- Skip navigation links for screen readers
>>>>>>> 6315968e45f9c31c7849f5ffac10195e30caa8dc

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
