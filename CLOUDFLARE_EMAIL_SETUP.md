# 📧 Konfiguracja Cloudflare Email Routing dla EduHustawka

## 🚀 Kroki wdrożenia

### 1. **Cloudflare Dashboard - Email Routing**
1. Zaloguj się do Cloudflare Dashboard
2. Wybierz domenę `eduhustawka.pl`
3. Przejdź do **Email** → **Email Routing**
4. Kliknij **Enable Email Routing**

### 2. **Konfiguracja DNS (automatyczna)**
Cloudflare automatycznie doda rekordy MX:
```
eduhustawka.pl MX 10 isaac.mx.cloudflare.net
eduhustawka.pl MX 20 linda.mx.cloudflare.net
eduhustawka.pl MX 30 amir.mx.cloudflare.net
```

### 3. **Dodanie adresów email**
W sekcji **Destination addresses** dodaj:
- `j.swirydowicz.eduhustawka2024@gmail.com` (główny adres docelowy)

### 4. **Konfiguracja routingu**
W sekcji **Routing rules** dodaj:
- `kontakt@eduhustawka.pl` → `j.swirydowicz.eduhustawka2024@gmail.com`
- `rezerwacja@eduhustawka.pl` → `j.swirydowicz.eduhustawka2024@gmail.com`
- `terapia@eduhustawka.pl` → `j.swirydowicz.eduhustawka2024@gmail.com`
- `info@eduhustawka.pl` → `j.swirydowicz.eduhustawka2024@gmail.com`

### 5. **Email Worker (opcjonalne - zaawansowane)**
1. Przejdź do **Workers & Pages**
2. Kliknij **Create Worker**
3. Nazwij worker: `eduhustawka-email-handler`
4. Wklej kod z pliku `cloudflare-email-worker.js`
5. Kliknij **Save and Deploy**

### 6. **Podłączenie Worker do Email Routing**
1. Wróć do **Email Routing**
2. W sekcji **Workers** kliknij **Add Worker**
3. Wybierz `eduhustawka-email-handler`
4. Ustaw jako **Catch-all** lub dla konkretnych adresów

## ✅ **Testowanie**
1. Wyślij email na `kontakt@eduhustawka.pl`
2. Sprawdź czy dotarł na `j.swirydowicz.eduhustawka2024@gmail.com`
3. Sprawdź czy auto-odpowiedź została wysłana (jeśli używasz Worker)

## 📋 **Adresy email do skonfigurowania:**
- ✉️ `kontakt@eduhustawka.pl` - główny kontakt
- 📅 `rezerwacja@eduhustawka.pl` - rezerwacje wizyt
- 🩺 `terapia@eduhustawka.pl` - pytania o terapie
- ℹ️ `info@eduhustawka.pl` - informacje ogólne

## 🔧 **Funkcje Email Worker:**
- ✅ Automatyczne przekierowanie emaili
- ✅ Auto-odpowiedzi dla kontakt@eduhustawka.pl
- ✅ Logowanie wiadomości
- ✅ Filtrowanie spamu
- ✅ Formatowanie wiadomości

## 📞 **Wsparcie**
W przypadku problemów skontaktuj się z supportem Cloudflare lub sprawdź logi w sekcji Workers.
