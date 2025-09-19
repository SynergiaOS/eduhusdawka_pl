# 🚀 ACTION PLAN - IMMEDIATE NEXT STEPS

**Priorytet**: KRYTYCZNY  
**Czas realizacji**: 2-3 dni  
**Cel**: Poprawa LCP o 40-50%  

## 📋 FAZA 7.1: IMAGE OPTIMIZATION (DZISIAJ/JUTRO)

### Krok 1: Audit wszystkich obrazów
```bash
# Znajdź wszystkie <img> w projekcie
grep -r "<img" --include="*.tsx" --include="*.jsx" app/ components/

# Wynik - 8 lokalizacji do naprawy:
# 1. app/uslugi/terapia-dla-dzieci-z-autyzmem/page.tsx:67
# 2. app/uslugi/trening-sluchowy-johansena/page.tsx:35  
# 3. app/uslugi/wczesna-nauka-czytania/page.tsx:35
# 4. components/printable-directions.tsx:39
# 5. components/recommended-services.tsx:24
# 6. components/youtube-embed.tsx:55
# 7. components/hero-section.tsx (jeśli istnieje)
# 8. components/about-section.tsx (jeśli istnieje)
```

### Krok 2: Przygotowanie obrazów
```bash
# Stwórz folder dla zoptymalizowanych obrazów
mkdir -p public/images/optimized

# Zainstaluj narzędzia do optymalizacji (opcjonalnie)
npm install --save-dev @next/bundle-analyzer imagemin imagemin-webp
```

### Krok 3: Zamiana <img> na <Image> - Template
```tsx
// PRZED (przykład z terapia-dla-dzieci-z-autyzmem)
<img 
  src="/images/terapia-autyzm.jpg" 
  alt="Terapia dla dzieci z autyzmem"
  className="w-full h-64 object-cover rounded-lg"
/>

// PO - zoptymalizowane
import Image from 'next/image'

<Image
  src="/images/terapia-autyzm.jpg"
  alt="Terapia dla dzieci z autyzmem" 
  width={800}
  height={400}
  className="w-full h-64 object-cover rounded-lg"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority={false} // true tylko dla above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..." // opcjonalnie
/>
```

### Krok 4: Konkretne pliki do edycji

#### 1. app/uslugi/terapia-dla-dzieci-z-autyzmem/page.tsx
```tsx
// Linia 67 - zamień <img> na <Image>
// Dodaj import: import Image from 'next/image'
// Dodaj width={600} height={400}
// Dodaj sizes="(max-width: 768px) 100vw, 50vw"
```

#### 2. app/uslugi/trening-sluchowy-johansena/page.tsx  
```tsx
// Linia 35 - zamień <img> na <Image>
// Podobne parametry jak powyżej
```

#### 3. components/youtube-embed.tsx
```tsx
// Linia 55 - thumbnail YouTube
// Specjalne traktowanie - może zostać <img> z loading="lazy"
// Lub zamiana na <Image> z external URL handling
```

### Krok 5: Critical Images - Priority Loading
```tsx
// Dla hero images i above-the-fold content
<Image
  src="/images/hero-image.jpg"
  alt="EduHustawka - Terapia Pedagogiczna"
  width={1200}
  height={600}
  priority={true} // WAŻNE: tylko dla critical images
  className="w-full h-96 object-cover"
/>
```

## 📋 FAZA 7.2: CRITICAL CSS (DZIEŃ 2)

### Krok 1: Identyfikacja Critical CSS
```bash
# Zainstaluj narzędzie do analizy critical CSS
npm install --save-dev critical

# Lub użyj online tool: https://www.sitelocity.com/critical-path-css-generator
```

### Krok 2: Ekstrakcja Above-the-Fold Styles
```css
/* critical.css - styles dla above-the-fold content */
/* Header styles */
.header { /* ... */ }
.nav { /* ... */ }

/* Hero section styles */  
.hero { /* ... */ }
.hero-title { /* ... */ }

/* Critical layout styles */
.container { /* ... */ }
.grid { /* ... */ }

/* Critical typography */
h1, h2 { /* ... */ }
p { /* ... */ }
```

### Krok 3: Implementacja w layout.tsx
```tsx
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <head>
        {/* Critical CSS inline */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS here - minified */
            .header{position:fixed;top:0;width:100%;z-index:50}
            .hero{min-height:100vh;display:flex;align-items:center}
            /* ... więcej critical styles */
          `
        }} />
        
        {/* Preload non-critical CSS */}
        <link
          rel="preload"
          href="/styles/non-critical.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
```

## 📋 FAZA 7.3: RESOURCE HINTS (DZIEŃ 2-3)

### Krok 1: Preload Critical Resources
```tsx
// app/layout.tsx - dodaj do <head>
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="" />
<link rel="preload" href="/images/hero-image.webp" as="image" />
<link rel="preload" href="/api/critical-data" as="fetch" crossOrigin="" />
```

### Krok 2: DNS Prefetch dla External Domains
```tsx
// app/layout.tsx - dodaj do <head>
<link rel="dns-prefetch" href="//fonts.googleapis.com" />
<link rel="dns-prefetch" href="//www.google-analytics.com" />
<link rel="dns-prefetch" href="//maps.googleapis.com" />
```

### Krok 3: Prefetch dla Navigation
```tsx
// components/header.tsx - dodaj prefetch dla głównych stron
import Link from 'next/link'

<Link href="/uslugi" prefetch={true}>
  Usługi
</Link>
<Link href="/o-mnie" prefetch={true}>
  O mnie  
</Link>
```

## 🔧 QUICK WINS - RÓWNOLEGLE

### 1. Unused Variables Cleanup (30 min)
```bash
# Znajdź wszystkie unused variables
npx eslint . --ext .ts,.tsx --format=compact | grep "is defined but never used"

# Usuń lub skomentuj unused imports/variables
# Przykłady z build output:
# - components/interactive-services-map.tsx: Target, Stethoscope
# - app/uslugi/forbrain/page.tsx: Users
# - components/lazy-components.tsx: OptimizedSpinner
```

### 2. TypeScript Any Types (1h)
```typescript
// Zamień 'any' na konkretne typy
// Przykłady z build output:

// lib/analytics.ts - zamiast any:
interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

// lib/performance-utils.ts - zamiast any:
type ThrottleCallback = (...args: unknown[]) => void
```

### 3. React Hooks Dependencies (30 min)
```tsx
// Napraw missing dependencies w useEffect
// Przykład z components/testimonials.tsx:
useEffect(() => {
  const interval = setInterval(goToNext, 5000)
  return () => clearInterval(interval)
}, [goToNext]) // Dodaj goToNext do dependencies
```

## 📊 MEASUREMENT PLAN

### Przed rozpoczęciem (Baseline)
```bash
# Uruchom Lighthouse audit
npx lighthouse http://localhost:3000 --output=json --output-path=./lighthouse-before.json

# Bundle analysis
npm run build
npm run analyze # jeśli skonfigurowane

# Core Web Vitals
# Użyj PageSpeed Insights: https://pagespeed.web.dev/
```

### Po każdej fazie (Progress Tracking)
```bash
# Lighthouse po każdej zmianie
npx lighthouse http://localhost:3000 --output=json --output-path=./lighthouse-after-phase7.json

# Porównanie wyników
# LCP improvement target: 2.5s → 1.0s
# FCP improvement target: 1.2s → 0.7s
# Bundle size tracking
```

## ⏰ TIMELINE

### Dzień 1 (Dzisiaj)
- [ ] **9:00-10:00**: Image audit i przygotowanie listy
- [ ] **10:00-12:00**: Zamiana pierwszych 4 `<img>` na `<Image>`
- [ ] **14:00-16:00**: Zamiana pozostałych 4 `<img>` na `<Image>`
- [ ] **16:00-17:00**: Testing i build verification

### Dzień 2 (Jutro)
- [ ] **9:00-11:00**: Critical CSS extraction
- [ ] **11:00-12:00**: Critical CSS implementation w layout
- [ ] **14:00-15:00**: Resource hints implementation
- [ ] **15:00-16:00**: Quick wins (unused variables)
- [ ] **16:00-17:00**: Performance measurement

### Dzień 3 (Pojutrze)
- [ ] **9:00-10:00**: Final testing i optimization
- [ ] **10:00-11:00**: Performance comparison (before/after)
- [ ] **11:00-12:00**: Documentation i next steps planning

## 🎯 SUCCESS CRITERIA

### Minimalne cele (MUST HAVE)
- [ ] Wszystkie 8 `<img>` zamienione na `<Image>`
- [ ] LCP improvement o minimum 30%
- [ ] Build bez błędów TypeScript
- [ ] Wszystkie strony działają poprawnie

### Optymalne cele (SHOULD HAVE)  
- [ ] LCP < 1.5s (target: 1.0s)
- [ ] FCP < 1.0s (target: 0.7s)
- [ ] Critical CSS zaimplementowane
- [ ] Resource hints skonfigurowane

### Stretch goals (NICE TO HAVE)
- [ ] WebP/AVIF images wdrożone
- [ ] Blur placeholders dla wszystkich obrazów
- [ ] Bundle size reduction o 5+ kB

---

**Gotowy do rozpoczęcia?** Mogę pomóc w implementacji każdego z tych kroków! 🚀
