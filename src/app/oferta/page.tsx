import Link from "next/link";
import type { Metadata } from "next";

import { PageShell } from "../_components/page-shell";

type PriceLine = {
  label: string;
  value: string;
};

type OfferService = {
  title: string;
  emoji: string;
  summary: string;
  focus: string[];
  pricing: PriceLine[];
};

type TableText = string | string[];

type OfferPricingRow = {
  service: string;
  scope: string;
  studio: TableText;
  home: TableText;
};

const offerServices: OfferService[] = [
  {
    title: "Terapia pedagogiczna",
    emoji: "📖",
    summary:
      "Specjalistyczne zajęcia wspierające dzieci, które potrzebują spokojnej, indywidualnej pracy nad czytaniem, pisaniem i koncentracją.",
    focus: [
      "Trudności w nauce czytania, pisania i liczenia.",
      "Zaburzenia koncentracji i pamięci roboczej.",
      "Wyzwania w rozwoju emocjonalno-społecznym i pewności siebie.",
    ],
    pricing: [
      { label: "Cena u terapeuty", value: "120 zł / 50 min" },
      { label: "Cena w domu klienta", value: "150 zł / 50 min" },
    ],
  },
  {
    title: "Wczesna nauka czytania – Metoda Symultaniczno-Sekwencyjna",
    emoji: "🔡",
    summary:
      "Skuteczna metoda sylabowa, która wciąga dzieci w czytanie poprzez ruch, rytm i historie – bez frustracji i z presją dopasowaną do tempa dziecka.",
    focus: [
      "Dzieci z ryzykiem dysleksji lub trudnościami szkolnymi.",
      "Maluchy z opóźnionym rozwojem mowy i afazją.",
      "Dzieci w spektrum autyzmu potrzebujące przewidywalnej struktury.",
    ],
    pricing: [
      { label: "Cena u terapeuty", value: "120 zł / 50 min" },
      { label: "Cena w domu klienta", value: "150 zł / 50 min" },
    ],
  },
  {
    title: "Czytanie sylabowe ze słuchawkami Forbrain (Fobian)",
    emoji: "🎧",
    summary:
      "Połączenie słuchawek Forbrain z treningiem sylabowym pomaga przyspieszyć tempo czytania i rozwój mowy – także u dzieci z większymi wyzwaniami komunikacyjnymi.",
    focus: [
      "Rozwój czytania pełnymi wyrazami i zdaniami.",
      "Wspomaganie mowy i myślenia u dzieci z autyzmem.",
      "Wsparcie przy opóźnionym rozwoju mowy i trudnościach szkolnych.",
    ],
    pricing: [
      { label: "Cena u terapeuty", value: "150 zł / 50 min" },
      { label: "Cena w domu klienta", value: "180 zł / 50 min" },
    ],
  },
  {
    title: "Terapia ręki",
    emoji: "✋",
    summary:
      "Manualne i sensoryczne ćwiczenia wzmacniające motorykę małą i dużą, aby codzienne czynności stawały się łatwiejsze i przyjemniejsze.",
    focus: [
      "Problemy w motoryce małej i dużej, które utrudniają zabawę i naukę.",
      "Nieprawidłowy chwyt pisarski oraz zmęczenie dłoni.",
      "Trudności w samoobsłudze – jedzenie, ubieranie, wiązanie butów.",
    ],
    pricing: [
      { label: "Cena u terapeuty", value: "120 zł / 50 min" },
      { label: "Cena w domu klienta", value: "150 zł / 50 min" },
    ],
  },
  {
    title: "Treningi słuchowe: Johansen IAS i Neuroflow",
    emoji: "🧠",
    summary:
      "Indywidualna stymulacja słuchu i koncentracji dla dzieci, które potrzebują wsparcia w przetwarzaniu dźwięków, rozumieniu mowy i regulacji napięcia.",
    focus: [
      "Trudności w rozwoju mowy, artykulacji i percepcji słuchowej.",
      "Dysleksja, problemy szkolne, ADHD oraz zaburzenia uwagi.",
      "Autyzm, porażenie mózgowe, wady genetyczne i nadwrażliwość słuchowa.",
    ],
    pricing: [
      { label: "Diagnoza (pełna lub uproszczona)", value: "300 zł" },
      { label: "Indywidualna płyta Johansen IAS/Neuroflow", value: "250–290 zł" },
      { label: "Neuroflow – etapy I/II/III", value: "470 zł / 460 zł / 450 zł" },
      { label: "Trening muzyczno-ruchowy (TMR) – etapy I/II/III", value: "170 zł / 160 zł / 150 zł" },
    ],
  },
];

const offerPricing: OfferPricingRow[] = [
  {
    service: "Terapia pedagogiczna",
    scope:
      "Trudności w czytaniu, pisaniu, liczeniu, koncentracji, pamięci oraz wsparcie emocjonalno-społeczne.",
    studio: "120 zł / 50 min",
    home: "150 zł / 50 min",
  },
  {
    service: "Wczesna nauka czytania – Metoda symultaniczno-sekwencyjna",
    scope: "Nauka sylabami dla dzieci z ryzykiem dysleksji, opóźnionym rozwojem mowy, afazją i autyzmem.",
    studio: "120 zł / 50 min",
    home: "150 zł / 50 min",
  },
  {
    service: "Czytanie sylabowe z Forbrain (Fobian)",
    scope:
      "Nauka czytania całymi wyrazami i zdaniami, rozwój mowy i myślenia, wsparcie dla dzieci z ASD i trudnościami szkolnymi.",
    studio: "150 zł / 50 min",
    home: "180 zł / 50 min",
  },
  {
    service: "Terapia ręki",
    scope: "Ćwiczenia motoryki małej i dużej, korekta chwytu pisarskiego oraz trening samoobsługi.",
    studio: "120 zł / 50 min",
    home: "150 zł / 50 min",
  },
  {
    service: "Trening słuchowy Johansen IAS",
    scope:
      "Stymulacja słuchu i mowy, poprawa koncentracji oraz redukcja nadwrażliwości na dźwięki.",
    studio: ["Diagnoza pełna – 300 zł", "Diagnoza uproszczona – 300 zł", "Płyta indywidualna – 250–290 zł"],
    home: "—",
  },
  {
    service: "Trening słuchowy Neuroflow",
    scope:
      "Ćwiczenia percepcji słuchowej i uwagi dla dzieci z ADHD, dysleksją, autyzmem i porażeniem mózgowym.",
    studio: ["Diagnoza pełna – 300 zł", "Diagnoza uproszczona – 300 zł", "Płyta indywidualna – 250–290 zł"],
    home: "—",
  },
  {
    service: "Trening muzyczno-ruchowy (TMR)",
    scope: "Program redukujący napięcie i stres u dzieci z nadwrażliwością słuchową.",
    studio: ["Etap I – 170 zł", "Etap II – 160 zł", "Etap III – 150 zł"],
    home: "—",
  },
];

export const metadata: Metadata = {
  title: "Oferta terapii i diagnozy dla dzieci | EduHustawka.pl",
  description:
    "Indywidualne zajęcia terapeutyczne i diagnostyczne dla dzieci w przyjaznej, domowej atmosferze. Terapia pedagogiczna, wczesna nauka czytania, Forbrain, terapia ręki oraz treningi słuchowe Johansen i Neuroflow.",
  keywords: [
    "oferta terapii białystok",
    "terapia pedagogiczna oferta",
    "trening słuchowy neuroflow cena",
    "czytanie sylabowe forbrain",
    "terapia ręki dla dzieci Białystok",
  ],
};

export default function OfferPage() {
  return (
  <PageShell variant="therapy" maxWidthClass="max-w-[1050px]" mainClassName="gap-20">
      <OfferHero />
      <OfferServices />
      <OfferPricing />
      <OfferContact />
    </PageShell>
  );
}

function OfferHero() {
  return (
    <section className="rounded-[32px] border border-white/15 bg-gradient-to-br from-[#1ebaf1]/85 to-[#0b2f45]/85 p-10 shadow-[0_35px_80px_rgba(8,48,69,0.55)]">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#fed102]">Oferta Terapii i Diagnozy</p>
      <h1 className="mt-6 font-display text-4xl leading-tight text-white sm:text-5xl">
        Oferta EduHustawka.pl – indywidualne wsparcie dla Twojego dziecka
      </h1>
      <p className="mt-6 max-w-3xl text-base text-white/85 sm:text-lg">
        Pomagam dzieciom pokonywać trudności i rozwijać ich potencjał w przyjaznej, domowej atmosferze. Każdy program
        dobieram do wieku, potrzeb i możliwości – od diagnozy po plan terapii gotowy do realizacji w gabinecie lub w domu.
      </p>
    </section>
  );
}

function OfferServices() {
  return (
    <section className="grid gap-10 rounded-[32px] border border-white/15 bg-white/10 p-10">
      <header className="space-y-4">
  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#fed102]">Diagnoza i terapia</p>
        <h2 className="font-display text-3xl text-white sm:text-[40px]">W czym mogę pomóc?</h2>
        <p className="max-w-3xl text-white/80">
          Oferta obejmuje indywidualne zajęcia dla dzieci w wieku przedszkolnym i wczesnoszkolnym. Łączę zabawę, ruch i
          konkretne strategie terapeutyczne, aby dziecko krok po kroku zyskiwało poczucie sprawczości.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        {offerServices.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}

type ServiceCardProps = {
  service: OfferService;
};

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col gap-6 rounded-[28px] border border-white/12 bg-white/5 p-8 shadow-[0_25px_60px_rgba(18,12,60,0.35)]">
      <div className="space-y-3">
        <h3 className="font-display text-2xl text-white">
          <span className="mr-2" aria-hidden>
            {service.emoji}
          </span>
          {service.title}
        </h3>
        <p className="text-sm text-white/75">{service.summary}</p>
      </div>
      <div>
  <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#fed102]">Dla kogo?</h4>
        <ul className="mt-3 space-y-2 text-sm text-white/80">
          {service.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4">
  <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#fed102]">Cennik</h4>
        <ul className="mt-3 space-y-2 text-sm text-white/85">
          {service.pricing.map((price) => (
            <li key={`${service.title}-${price.label}`} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <span className="text-white/70">{price.label}</span>
              <span className="font-semibold text-white">{price.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function OfferPricing() {
  return (
    <section className="rounded-[32px] border border-white/10 bg-white/5 p-0 shadow-[0_25px_55px_rgba(24,18,70,0.45)]">
      <div className="border-b border-white/10 bg-white/10 px-8 py-6">
        <h2 className="font-display text-3xl text-white">Szczegółowy cennik usług</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/75">
          Przejrzyj wszystkie formy wsparcia – od terapii stacjonarnych po programy słuchowe online. Diagnoza obejmuje
          konsultację, omówienie wyników i plan dalszej pracy.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/10 text-left text-sm text-white/90">
          <thead className="bg-white/10 text-xs uppercase tracking-[0.25em] text-[#fed102]">
            <tr>
              <th className="px-6 py-4">Rodzaj usługi</th>
              <th className="px-6 py-4">Zakres wsparcia</th>
              <th className="px-6 py-4">Cena u terapeuty</th>
              <th className="px-6 py-4">Cena w domu klienta</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {offerPricing.map((row) => (
              <tr key={row.service} className="bg-white/5">
                <td className="px-6 py-5 font-semibold text-white">{row.service}</td>
                <td className="px-6 py-5 text-white/80">{row.scope}</td>
                <td className="px-6 py-5 text-white/85">{renderCell(row.studio)}</td>
                <td className="px-6 py-5 text-white/85">{renderCell(row.home)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function OfferContact() {
  return (
    <section className="grid gap-6 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1ebaf1]/90 to-[#0b2f45]/90 p-10 text-white shadow-[0_25px_55px_rgba(8,48,69,0.45)]">
      <h2 className="font-display text-3xl">Nie czekaj, aż trudności staną się większe</h2>
      <p className="text-base text-white/85">
        Zadzwoń pod <Link href="tel:531509008" className="font-semibold underline">531 509 008</Link> lub napisz wiadomość.
        Ustalę dogodny termin diagnozy, omówię potrzeby i dobiorę plan wsparcia.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0f3b52] transition hover:bg-white/90"
        >
          Umów spotkanie
        </Link>
        <Link
          href="/cennik"
          className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Zobacz pełen cennik
        </Link>
      </div>
    </section>
  );
}

function renderCell(value: TableText) {
  if (Array.isArray(value)) {
    return value.map((line) => (
      <span key={line} className="block">
        {line}
      </span>
    ));
  }

  return value;
}
