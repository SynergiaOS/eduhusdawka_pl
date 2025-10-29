import Link from "next/link";
import type { Metadata } from "next";

import { PageShell } from "../_components/page-shell";

type TableText = string | string[];

type PricingRow = {
  service: string;
  summary: string;
  studio: TableText;
  home: TableText;
  note: TableText;
};

export const metadata: Metadata = {
  title: "Cennik terapii | EduHustawka.pl",
  description:
    "Poznaj przejrzysty cennik terapii i zajęć EduHustawka.pl. Terapia pedagogiczna, wczesna nauka czytania, Forbrain, terapia ręki oraz treningi słuchowe w gabinecie i w domu.",
  keywords: [
    "cennik terapii białystok",
    "terapia pedagogiczna cena",
    "terapia ręki dla dzieci Białystok",
    "trening słuchowy johansen cena",
    "neuroflow cena",
  ],
};

const pricingRows: PricingRow[] = [
  {
    service: "Terapia Pedagogiczna",
    summary:
      "Trudności w czytaniu, pisaniu, liczeniu, koncentracji, pamięci oraz rozwój emocjonalno-społeczny.",
    studio: "120 zł / 50 min",
    home: "150 zł / 50 min",
    note: [
      "Indywidualne zajęcia dla przedszkolaków i dzieci wczesnoszkolnych.",
      "Pakiet 5 spotkań – 560 zł (ważny 6 miesięcy).",
      "Pakiet 10 spotkań – 1080 zł.",
    ],
  },
  {
    service: "Wczesna Nauka Czytania (Metoda Symultaniczno-Sekwencyjna)",
    summary:
      "Nauka sylabami dla dzieci z ryzykiem dysleksji, opóźnioną mową, autyzmem, afazją lub dwujęzycznością.",
    studio: "120 zł / 50 min",
    home: "150 zł / 50 min",
    note: [
      "Łączy zabawę, ruch i sensorykę – pierwsze efekty zwykle po 3 miesiącach.",
      "Pakiet 5 spotkań – 560 zł (praca z zadaniami domowymi).",
      "Pakiet 10 spotkań – 1080 zł.",
    ],
  },
  {
    service: "Czytanie Sylabowe z Forbrain (Fobian)",
    summary:
      "Rozwój mowy, myślenia i płynności czytania dzięki innowacyjnym słuchawkom Forbrain.",
    studio: "150 zł / 50 min",
    home: "180 zł / 50 min",
    note: [
      "Sesja próbna – 50 zł / 30 min.",
      "Pakiet 5 sesji – 700 zł.",
      "Pakiet 10 sesji – 1350 zł (możliwe sesje online).",
    ],
  },
  {
    service: "Terapia Ręki",
    summary:
      "Ćwiczenia motoryki małej i dużej, poprawa chwytu pisarskiego oraz samoobsługi przez zabawę.",
    studio: "120 zł / 50 min",
    home: "150 zł / 50 min",
    note: [
      "Dla dzieci z dyspraksją, autyzmem, porażeniem mózgowym lub trudnościami manualnymi.",
      "Pakiet 5 sesji – 560 zł (w tym konsultacje z rodzicem).",
      "Pakiet 10 sesji – 1080 zł.",
    ],
  },
  {
    service: "Trening Słuchowy Johansen IAS",
    summary:
      "Indywidualne programy stymulacji słuchu poprawiające mowę, artykulację i koncentrację.",
    studio: ["Diagnoza pełna: 300 zł", "Diagnoza uproszczona: 300 zł", "Płyta indywidualna: 250-290 zł"],
    home: "-",
    note: [
      "Etap I – 470 zł, Etap II – 460 zł, Etap III – 450 zł.",
      "Kontrole co 4 tygodnie i aktualizacja nagrań w cenie programu.",
    ],
  },
  {
    service: "Trening Słuchowy Neuroflow",
    summary:
      "Ćwiczenia percepcji słuchowej, koncentracji i pamięci dla dzieci z ADHD, autyzmem czy porażeniem mózgowym.",
    studio: ["Diagnoza pełna: 300 zł", "Diagnoza uproszczona: 300 zł", "Płyta indywidualna: 250-290 zł"],
    home: "-",
    note: [
      "Etap I – 470 zł, Etap II – 460 zł, Etap III – 450 zł (moduły online).",
      "Stały monitoring terapeuty i korekta ćwiczeń w trakcie programu.",
    ],
  },
  {
    service: "Trening Muzyczno-Ruchowy (TMR)",
    summary:
      "Redukcja napięcia i stresu u dzieci z nadwrażliwością słuchową oraz wsparcie w regulacji emocji.",
    studio: ["Etap I: 170 zł", "Etap II: 160 zł", "Etap III: 150 zł"],
    home: "-",
    note: "Program do pracy w domu – relaksacyjne sesje z ruchem i muzyką.",
  },
];

function renderCellContent(value: TableText) {
  if (Array.isArray(value)) {
    return value.map((line) => (
      <span key={line} className="block">
        {line}
      </span>
    ));
  }

  return value;
}

export default function PricingPage() {
  return (
    <PageShell variant="therapy" maxWidthClass="max-w-[1100px]" mainClassName="gap-20">
      <section className="rounded-[32px] border border-white/15 bg-white/10 p-10 shadow-[0_35px_80px_rgba(14,10,56,0.35)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#fed102]">Cennik EduHustawka.pl</p>
        <h1 className="mt-6 font-display text-4xl leading-tight text-white sm:text-5xl">
          Prosty i jasny cennik 2025 – wartość w przyjaznej atmosferze domowej
        </h1>
        <p className="mt-6 max-w-3xl text-base text-white/80 sm:text-lg">
          Każdą sesję prowadzę w klimacie domowej swobody. Wybierz zajęcia w gabinecie w Białymstoku albo u siebie w domu – zawsze z tym samym zaangażowaniem i planem terapii dopasowanym do Twojego dziecka.
        </p>
      </section>

      <section className="rounded-[32px] border border-white/10 bg-white/5 p-0 shadow-[0_25px_60px_rgba(18,11,63,0.4)]">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-white/10 text-left text-sm text-white/90">
            <thead className="bg-white/10 text-xs uppercase tracking-[0.2em] text-[#fed102]">
              <tr>
                <th scope="col" className="px-6 py-4">Usługa</th>
                <th scope="col" className="px-6 py-4">Opis krótki</th>
                <th scope="col" className="px-6 py-4">Cena u terapeuty</th>
                <th scope="col" className="px-6 py-4">Cena w domu klienta</th>
                <th scope="col" className="px-6 py-4">Uwagi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {pricingRows.map((row) => (
                <tr key={row.service} className="bg-white/5">
                  <td className="px-6 py-5 font-semibold text-white">{row.service}</td>
                  <td className="px-6 py-5 text-white/80">{row.summary}</td>
                  <td className="px-6 py-5 text-white/80">{renderCellContent(row.studio)}</td>
                  <td className="px-6 py-5 text-white/80">{renderCellContent(row.home)}</td>
                  <td className="px-6 py-5 text-white/80">{renderCellContent(row.note)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-8 rounded-[32px] border border-white/15 bg-white/10 p-10 text-white/85">
        <div>
          <h2 className="font-display text-3xl text-white">Rabaty pakietowe</h2>
          <p className="mt-4 text-white/80">
            Wspieram regularność terapii. Pakiety obejmują dowolne zajęcia 50-minutowe i można je wykorzystać w ciągu 6 miesięcy od zakupu.
          </p>
        </div>
        <ul className="grid gap-3 text-base text-white/80">
          <li>
            <strong className="text-[#fed102]">10 sesji:</strong> -10% (np. terapia pedagogiczna: 1080 zł zamiast 1200 zł).
          </li>
          <li>
            <strong className="text-[#fed102]">20 sesji:</strong> -15%.
          </li>
          <li>
            <strong className="text-[#fed102]">Diagnoza + 5 sesji:</strong> -20%.
          </li>
        </ul>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1ebaf1]/90 to-[#0b2f45]/90 p-10 shadow-[0_25px_55px_rgba(8,48,69,0.55)]">
        <h2 className="font-display text-3xl text-white">Masz pytania? Umów konsultację</h2>
        <p className="text-white/85">
          Zadzwoń pod <strong>531 509 008</strong> lub napisz wiadomość – dobiorę odpowiedni program i sprawdzę dostępne terminy.
        </p>
        <Link
          href="/kontakt"
          className="inline-flex max-w-fit items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0f3b52] transition hover:bg-white/90"
        >
          📞 Umów i oszczędź
        </Link>
      </section>
    </PageShell>
  );
}

