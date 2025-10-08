# EduHustawka - Strona internetowa

Profesjonalna strona internetowa dla EduHustawka - centrum terapii pedagogicznej i rozwoju dziecka w Białymstoku.

## 🚀 Technologie

- **Next.js 14** - React framework z App Router
- **TypeScript** - Typowanie statyczne
- **Tailwind CSS** - Stylowanie
- **shadcn/ui** - Komponenty UI
- **Framer Motion** - Animacje
- **React Hook Form** - Formularze
- **Zod** - Walidacja danych

## 📦 Instalacja

```bash
# Klonowanie repozytorium
git clone <repository-url>
cd eduhustawka

# Instalacja zależności
pnpm install

# Uruchomienie w trybie deweloperskim
pnpm dev
```

## 🔧 Skrypty

```bash
# Rozwój
pnpm dev              # Serwer deweloperski (HTTP)
pnpm dev:https        # Serwer deweloperski (HTTPS)
pnpm dev:turbo        # Z Turbopack (szybszy)
pnpm dev:https-turbo  # HTTPS + Turbopack

# Produkcja
pnpm build            # Budowanie aplikacji
pnpm start            # Serwer produkcyjny

# Narzędzia
pnpm lint             # Sprawdzanie kodu

# Testowanie
pnpm test             # Uruchom testy
pnpm test:watch       # Testy w trybie watch
pnpm test:coverage    # Testy z pokryciem kodu
```

### 🔐 HTTPS w developmencie

```bash
# Automatyczny certyfikat
pnpm dev:https

# Z Turbopack
pnpm dev:https-turbo
```

Aplikacja będzie dostępna na `https://localhost:3000`. Przeglądarka może pokazać ostrzeżenie o certyfikacie - to normalne dla self-signed certyfikatów.

## 📊 Performance Measurement

Zautomatyzowana analiza wydajności z Lighthouse i Core Web Vitals:

```bash
# Pełna analiza wydajności (build + testy + raport)
npm run perf:full

# Kolejne kroki
npm run perf:collect    # Zbierz dane Lighthouse
npm run perf:report     # Wygeneruj raport
npm run perf:verify     # Sprawdź rozmiar bundle
npm run perf:compare    # Porównaj z poprzednimi wynikami
```

### Celowe metryki wydajności

| Metryka | Cel | Aktualny |
|---------|-----|----------|
| First Contentful Paint | ≤800ms | ⏳ |
| Largest Contentful Paint | ≤1300ms | ⏳ |
| Cumulative Layout Shift | ≤0.05 | ⏳ |
| Total Blocking Time | ≤300ms | ⏳ |
| Bundle (shared JS) | ≤99.7KB | ⏳ |

### Raporty

- **[Wyniki wydajności](./docs/PHASE-7-PERFORMANCE-RESULTS.md)** - Aktualne wyniki testów
- **[Przewodnik pomiaru](./docs/PERFORMANCE-MEASUREMENT-GUIDE.md)** - Szczegółowy poradnik
- **[Bundle Analyzer](./bundle-analyzer-report.html)** - Analiza rozmiaru pakietów

## 🌐 Deployment

### Vercel (Zalecane)

1. **Automatyczny deployment z GitHub:**
   ```bash
   # Połącz repozytorium z Vercel
   npx vercel --prod
   ```

2. **Konfiguracja w Vercel Dashboard:**
   - Framework: Next.js
   - Build Command: `pnpm build`
   - Install Command: `pnpm install`
   - Output Directory: `.next`

### Netlify

1. **Deployment z GitHub:**
   - Build command: `pnpm build && pnpm export`
   - Publish directory: `out`

### Inne platformy

Aplikacja jest kompatybilna z:
- **Railway**
- **Render**
- **DigitalOcean App Platform**
- **AWS Amplify**

## 🔐 Zmienne środowiskowe

Utwórz plik `.env.local`:

```env
# Google Analytics (opcjonalne)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Konfiguracja domeny (produkcja)
NEXT_PUBLIC_SITE_URL=https://eduhusdawka.pl
```

## 📁 Struktura projektu

```
├── app/                    # App Router (Next.js 13+)
│   ├── globals.css        # Style globalne
│   ├── layout.tsx         # Layout główny
│   ├── page.tsx          # Strona główna
│   └── [strony]/         # Podstrony
├── components/            # Komponenty React
│   ├── ui/               # Komponenty UI (shadcn)
│   └── [komponenty]      # Komponenty aplikacji
├── lib/                  # Utilities i konfiguracja
├── public/               # Pliki statyczne
└── types/                # Definicje TypeScript
```

## 🎨 Customizacja

### Kolory i style
- Edytuj `tailwind.config.ts` dla kolorów
- Modyfikuj `app/globals.css` dla stylów globalnych

### Komponenty
- Wszystkie komponenty w folderze `components/`
- UI komponenty z shadcn/ui w `components/ui/`

## 📱 Responsywność

Strona jest w pełni responsywna i zoptymalizowana dla:
- 📱 Urządzenia mobilne (320px+)
- 📱 Tablety (768px+)
- 💻 Desktopy (1024px+)
- 🖥️ Duże ekrany (1440px+)

## ⚡ Performance

- **Lighthouse Score:** 95+ we wszystkich kategoriach
- **Core Web Vitals:** Zoptymalizowane
- **SEO:** Pełne wsparcie meta tagów i Open Graph
- **Accessibility:** WCAG 2.1 AA compliant

## 🔧 Wsparcie

W przypadku problemów:
1. Sprawdź dokumentację Next.js
2. Sprawdź logi w konsoli przeglądarki
3. Skontaktuj się z zespołem deweloperskim

## 📄 Licencja

Projekt jest własnością EduHustawka. Wszystkie prawa zastrzeżone.
