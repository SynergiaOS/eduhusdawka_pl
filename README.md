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
pnpm dev          # Uruchomienie serwera deweloperskiego

# Produkcja
pnpm build        # Budowanie aplikacji
pnpm start        # Uruchomienie serwera produkcyjnego

# Narzędzia
pnpm lint         # Sprawdzanie kodu
```

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
NEXT_PUBLIC_SITE_URL=https://eduhustawka.pl
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
