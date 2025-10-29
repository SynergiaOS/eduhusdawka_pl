import Image from "next/image";
import Link from "next/link";

import { footerNavigation } from "./data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#c7ecfa] bg-[#f3fbff]">
      <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-14 text-[#2f4b59] sm:px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_6px_20px_rgba(17,142,201,0.18)]">
                <Image src="/images/logo.svg" alt="EduHuśtawka" width={40} height={40} className="h-10 w-10 object-contain" />
              </div>
              <span className="font-display text-2xl text-[#0f2134]">EduHuśtawka</span>
            </Link>
            <p className="max-w-sm text-sm text-[#37586b]">
              Empatyczne wsparcie terapeutyczne i edukacyjne dla dzieci z Białegostoku i okolic. Pracuję z rodzinami,
              które chcą wrócić do równowagi i budować spokojniejszą codzienność.
            </p>
            <div className="space-y-1 text-sm text-[#2f4b59]">
              <p>
                <strong className="text-[#0f2134]">Telefon:</strong> <Link href="tel:+48531509008">+48 531 509 008</Link>
              </p>
              <p>
                <strong className="text-[#0f2134]">E-mail:</strong> <Link href="mailto:kontakt@eduhustawka.pl">kontakt@eduhustawka.pl</Link>
              </p>
              <p>
                <strong className="text-[#0f2134]">Adres gabinetu:</strong> ul. Ludwika Zamenhofa 4/U2, Białystok
              </p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-3 text-sm">
              <p className="font-semibold text-[#0f2134]">Nawigacja</p>
              <ul className="space-y-2">
                {footerNavigation.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <Link href={item.href} className="transition hover:text-[#1ebaf1]">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="transition text-[#37586b]">{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 text-sm">
              <p className="font-semibold text-[#0f2134]">Godziny konsultacji</p>
              <ul className="space-y-2 text-[#37586b]">
                <li>Poniedziałek–Piątek: 9:00 – 18:00</li>
                <li>Sobota (online): 9:00 – 12:00</li>
                <li>Niedziela: dyżur wiadomości (odpisuję następnego dnia).</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-[#c7ecfa] pt-6 text-xs text-[#4a6a7a] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} EduHuśtawka. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-4">
            <Link href="https://www.facebook.com" className="transition hover:text-[#1ebaf1]">
              Facebook
            </Link>
            <Link href="https://www.instagram.com" className="transition hover:text-[#1ebaf1]">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
