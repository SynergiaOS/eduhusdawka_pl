# Plan Refaktoryzacji Struktury Komponentów

## Obecna struktura
Wszystkie komponenty są w jednym folderze `components/` co utrudnia nawigację i zarządzanie.

## Proponowana nowa struktura

```
components/
├── ui/                          # Komponenty UI (shadcn/ui) - bez zmian
├── layout/                      # Komponenty layoutu
│   ├── header.tsx
│   ├── footer.tsx
│   ├── layout-primitives.tsx
│   └── page-transition.tsx
├── sections/                    # Sekcje strony
│   ├── about-section.tsx
│   ├── blog-section.tsx
│   ├── faq-section.tsx
│   ├── pricing-section.tsx
│   ├── testimonials-section.tsx
│   ├── service-articles-section.tsx
│   └── simple-contact-section.tsx
├── forms/                       # Formularze
│   ├── contact-form.tsx
│   ├── appointment-form.tsx
│   └── mobile-form-enhancements.tsx
├── media/                       # Komponenty mediów
│   ├── unified-image.tsx
│   ├── youtube-embed.tsx
│   └── google-map.tsx
├── navigation/                  # Nawigacja i breadcrumbs
│   ├── enhanced-breadcrumb.tsx
│   ├── interactive-services-map.tsx
│   └── directions-info.tsx
├── analytics/                   # Analytics i tracking
│   ├── google-analytics.tsx
│   ├── google-tag-manager.tsx
│   ├── analytics-test.tsx
│   └── service-view-tracker.tsx
├── animations/                  # Animacje
│   ├── animated-section.tsx
│   ├── animated-page-section.tsx
│   ├── animated-stats.tsx
│   └── development-timeline.tsx
├── feedback/                    # Opinie i testimonials
│   ├── testimonials.tsx
│   └── recommended-services.tsx
├── loading/                     # Loading states
│   ├── loading-spinner.tsx
│   ├── loading-states.tsx
│   ├── optimized-loading-states.tsx
│   └── lazy-components.tsx
├── error/                       # Error handling
│   ├── error-boundary.tsx
│   ├── enhanced-error-boundary.tsx
│   └── error-fallbacks.tsx
├── preferences/                 # User preferences
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   ├── cookie-banner.tsx
│   ├── first-visit-preferences.tsx
│   └── preferences-collector.tsx
├── blog/                        # Blog components
│   ├── blog-card.tsx
│   └── blog-post-modal.tsx
├── admin/                       # Admin components
│   ├── sms-queue-stats.tsx
│   └── printable-directions.tsx
├── mobile/                      # Mobile optimizations
│   ├── mobile-optimizations.tsx
│   └── welcome-notification.tsx
└── common/                      # Wspólne komponenty
    ├── structured-data.tsx
    ├── social-icons.tsx
    └── service-recommendation-section.tsx
```

## Korzyści z nowej struktury

1. **Lepsze grupowanie** - komponenty pogrupowane według funkcjonalności
2. **Łatwiejsza nawigacja** - szybsze znajdowanie komponentów
3. **Lepsze zarządzanie** - łatwiejsze dodawanie nowych komponentów
4. **Czytelność** - jasne rozdzielenie odpowiedzialności
5. **Skalowanie** - struktura przygotowana na rozwój

## Plan implementacji

### Faza 1: Utworzenie nowych folderów
- Utworzenie struktury folderów
- Przeniesienie komponentów do odpowiednich folderów

### Faza 2: Aktualizacja importów
- Aktualizacja wszystkich importów w aplikacji
- Sprawdzenie czy wszystko działa poprawnie

### Faza 3: Aktualizacja testów
- Przeniesienie testów do odpowiednich folderów
- Aktualizacja ścieżek w testach

### Faza 4: Dokumentacja
- Aktualizacja README.md
- Dodanie dokumentacji nowej struktury
