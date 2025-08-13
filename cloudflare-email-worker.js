export default {
  async email(message, env, ctx) {
    // Konfiguracja dla EduHustawka
    const ADMIN_EMAIL = "j.swirydowicz.eduhustawka2024@gmail.com"; // Docelowy adres Gmail
    const DOMAIN = "eduhustawka.pl";
    
    // Sprawdź, czy email jest skierowany do naszej domeny
    if (!message.to.includes(DOMAIN)) {
      message.setReject("Email nie jest skierowany do eduhustawka.pl");
      return;
    }
    
    try {
      // Pobierz szczegóły wiadomości
      const from = message.from;
      const to = message.to;
      const subject = message.headers.get("subject") || "Brak tematu";
      
      // Przygotuj treść do przekazania
      const emailContent = `
=== NOWA WIADOMOŚĆ Z EDUHUSTAWKA.PL ===

Od: ${from}
Do: ${to}
Temat: ${subject}
Data: ${new Date().toLocaleString('pl-PL')}

--- TREŚĆ WIADOMOŚCI ---
${await message.text()}

--- KONIEC WIADOMOŚCI ---

Ta wiadomość została automatycznie przekazana przez system Cloudflare Email Routing.
      `.trim();
      
      // Przekaż email do głównego adresu
      await message.forward(ADMIN_EMAIL, {
        headers: {
          "X-Forwarded-From": to,
          "X-Original-Subject": subject
        }
      });
      
      // Opcjonalnie: wyślij automatyczną odpowiedź
      if (to.includes("kontakt@") || to.includes("info@")) {
        const autoReply = new EmailMessage(
          "noreply@eduhustawka.pl",
          from,
          "Potwierdzenie otrzymania wiadomości - EduHustawka"
        );
        
        autoReply.setBody(`
Dzień dobry!

Dziękujemy za wiadomość wysłaną do EduHustawka.

Otrzymaliśmy Państwa zapytanie i odpowiemy na nie w ciągu 24 godzin w dni robocze.

W pilnych sprawach prosimy o kontakt telefoniczny:
📞 531 509 008

Z poważaniem,
Joanna Świrydowicz
EduHustawka - Centrum terapii i rozwoju dziecka

---
ul. Polna 17, 18-106 Pomigacze
www.eduhustawka.pl
        `);
        
        await autoReply.send();
      }
      
      console.log(`Email przekazany: ${from} -> ${to} -> ${ADMIN_EMAIL}`);
      
    } catch (error) {
      console.error("Błąd przetwarzania emaila:", error);
      // W przypadku błędu, przekaż email bez dodatkowego przetwarzania
      await message.forward(ADMIN_EMAIL);
    }
  }
}

// Konfiguracja routingu emaili dla EduHustawka:
// kontakt@eduhustawka.pl -> j.swirydowicz.eduhustawka2024@gmail.com
// rezerwacja@eduhustawka.pl -> j.swirydowicz.eduhustawka2024@gmail.com  
// terapia@eduhustawka.pl -> j.swirydowicz.eduhustawka2024@gmail.com
// diagnoza@eduhustawka.pl -> j.swirydowicz.eduhustawka2024@gmail.com
// info@eduhustawka.pl -> j.swirydowicz.eduhustawka2024@gmail.com
