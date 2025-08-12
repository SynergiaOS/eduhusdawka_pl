# Konfiguracja Google Tag Manager (GTM)

## Przygotowanie środowiska

1. **Dodaj zmienną środowiskową:**
   ```bash
   # W pliku .env.local
   NEXT_PUBLIC_GTM_ID=GTM-WTB4KR5X
   ```

2. **Restart aplikacji** po dodaniu zmiennej.

## Konfiguracja w GTM (gtm.google.com)

### 1. Zmienne (Variables)
- **GA4_MEASUREMENT_ID** (Constant): `G-XXXXXXXXXX` (Twój GA4 ID)

### 2. Wyzwalacze (Triggers)
Utwórz Custom Event triggers dla:
- `call_click`
- `whatsapp_click` 
- `scroll_to_form`
- `maps_click`
- `contact_form_submit`

### 3. Tagi (Tags)

#### GA4 Configuration Tag
- **Type:** GA4 Configuration
- **Measurement ID:** `{{GA4_MEASUREMENT_ID}}`
- **Trigger:** All Pages

#### GA4 Event Tags (po jednym dla każdego eventu)
- **Type:** GA4 Event
- **Configuration Tag:** GA4 Configuration
- **Event Name:** `call_click` (lub odpowiedni)
- **Event Parameters:**
  - `event_category`: `{{Event Category}}`
  - `event_label`: `{{Event Label}}`
- **Trigger:** Custom Event → `call_click`

### 4. Eventy śledzone automatycznie
- `call_click` - kliknięcia w przyciski "Zadzwoń"
- `whatsapp_click` - kliknięcia w WhatsApp
- `scroll_to_form` - przewijanie do formularza
- `maps_click` - kliknięcia w nawigację Google Maps
- `contact_form_submit` - wysłanie formularza kontaktowego

### 5. Test
1. **GTM Preview Mode** → sprawdź czy eventy są wysyłane
2. **GA4 Realtime** → potwierdź odbiór eventów
3. **Oznacz jako Conversion** w GA4: `call_click`, `whatsapp_click`, `contact_form_submit`

## Consent Mode (opcjonalnie)
GTM respektuje ustawienia zgody z cookie bannera - eventy są wysyłane tylko po akceptacji "Analityczne".

## Implementacja zakończona ✅

### Status środowiska:
- ✅ NEXT_PUBLIC_GTM_ID=GTM-WTB4KR5X ustawione w .env.local
- ✅ Komponent GoogleTagManager zintegrowany
- ✅ Wszystkie eventy CTA skonfigurowane
- ✅ Consent management działający

### Następne kroki w GTM Dashboard:
1. **Zaloguj się do GTM** (tagmanager.google.com)
2. **Wybierz kontener GTM-WTB4KR5X**
3. **Skonfiguruj tagi według instrukcji powyżej**
4. **Opublikuj zmiany w GTM**
5. **Przetestuj w Preview Mode**
6. **Oznacz conversions w GA4**

### Eventy gotowe do śledzenia:
- call_click (5 lokalizacji)
- whatsapp_click (3 lokalizacje)
- scroll_to_form (2 lokalizacje)
- maps_click (nawigacja)
- contact_form_submit (formularz)

**Implementacja techniczna zakończona. Wymagana tylko konfiguracja w GTM Dashboard.**
