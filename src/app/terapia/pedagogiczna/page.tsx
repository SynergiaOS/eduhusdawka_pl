import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Brain, ClipboardList, Home, Lightbulb, MessageSquare, Users } from "lucide-react";

import { PageShell } from "../../_components/page-shell";

const heroHighlights = [
  "Diagnoza obejmuje koncentrację, emocje i styl uczenia się.",
  "Rodzic otrzymuje krótkie zadania domowe i raporty postępów.",
  "Łączę zabawę, ruch i rozmowę – bez szkolnego stresu.",
];

const supportPillars = [
  {
    title: "Strategie uczenia się",
    description: "Uczę planować zadania, dzielić je na kroki i korzystać z checklist.",
    icon: Lightbulb,
  },
  {
    title: "Emocje i relacje",
    description: "Ćwiczę komunikację, pewność siebie i rozwiązywanie konfliktów.",
    icon: Users,
  },
  {
    title: "Funkcje wykonawcze",
    description: "Wzmacniam pamięć roboczą, koncentrację i elastyczność myślenia.",
    icon: Brain,
  },
];

const approachSteps = [
  "Konsultacja startowa – poznaję potrzeby rodziny i omawiam dokumentację szkolną.",
  "Plan 10 spotkań – moduły rozwijające uwagę, organizację oraz motywację dziecka.",
  "Mikro-zadania domowe – krótkie nawyki i rutyny wspierające samodzielność.",
  "Ewaluacja – raport dla rodzica i wskazówki, jakie terapie dodatkowe mogą pomóc.",
];

const pricingTable = [
  { service: "Sesja terapeutyczna", duration: "50 min", price: "120 zł" },
  { service: "Sesja z dojazdem", duration: "50 min", price: "150 zł" },
  { service: "Pakiet 5 spotkań", duration: "5 × 50 min", price: "560 zł" },
  { service: "Pakiet 10 spotkań", duration: "10 × 50 min", price: "1080 zł" },
];

const parentSupportItems = [
  {
    title: "Kwestionariusz rodzinny",
    description: "Pomaga zebrać informacje o stylu uczenia się dziecka, relacjach w domu i motywacji do pracy.",
    icon: ClipboardList,
  },
  {
    title: "Plan rutyn domowych",
    description: "Otrzymujesz sugestie porannych i wieczornych rytuałów, które wspierają organizację dnia.",
    icon: Home,
  },
  {
    title: "Szybkie konsultacje",
    description: "Między spotkaniami jestem dostępna na wiadomości – monitoruję emocje i postępy szkolne.",
    icon: MessageSquare,
  },
];

export const metadata: Metadata = {
  title: "Terapia pedagogiczna dla dzieci | EduHustawka.pl",
  description:
    "Indywidualna terapia pedagogiczna w Białymstoku. Pomagam dzieciom pokonać trudności w czytaniu, pisaniu i emocjach w przyjaznej, domowej atmosferze.",
  keywords: [
    "terapia pedagogiczna białystok",
    "trudności w nauce dziecka",
    "terapia ręki dla dzieci Białystok",
    "terapia emocji i koncentracji",
  ],
};

export default function PedagogicalTherapyPage() {
  return (
    <PageShell variant="default" maxWidthClass="max-w-5xl" mainClassName="gap-20">
      <HeroSection />
      <PillarsSection />
      <ProcessSection />
      <PricingSection />
      <ParentSupportSection />
      <CallToAction />
    </PageShell>
  );
}

function HeroSection() {
  return (
    <section className="overflow-hidden rounded-[32px] border border-[#f1e8d1] bg-white shadow-[0_30px_80px_rgba(208,196,167,0.3)]">
      <div className="grid gap-10 @[960px]:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6 px-8 py-10 sm:px-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fbeac2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#e48f2f]">
            Terapia pedagogiczna
          </span>
          <h1 className="font-display text-4xl text-[#1c1a16] sm:text-5xl">
            Indywidualne wsparcie, które przywraca radość z nauki i relacji.
          </h1>
          <p className="text-base leading-7 text-[#4a4337] sm:text-lg">
            Zajęcia łączą elementy coachingu edukacyjnego, ćwiczenia ruchowe i rozmowy o emocjach. Dziecko odkrywa swoje
            mocne strony, a rodzic dostaje jasne wskazówki, jak wspierać zmiany na co dzień.
          </p>
          <ul className="space-y-3 text-sm text-[#433d32]">
            {heroHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden className="mt-[6px] inline-flex h-1.5 w-1.5 rounded-full bg-[#e48f2f]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-[#e48f2f] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(228,143,47,0.35)] transition hover:bg-[#cf7c20]"
            >
              Zarezerwuj konsultację
            </Link>
            <Link
              href="/cennik"
              className="inline-flex items-center justify-center rounded-full border border-[#f1e8d1] px-6 py-3 text-sm font-semibold text-[#4a4337] transition hover:bg-[#faf6ed]"
            >
              Zobacz ofertę pakietów
            </Link>
          </div>
        </div>
        <div className="relative min-h-[260px] overflow-hidden bg-[#fff7ec]">
          <Image
            src="https://images.unsplash.com/photo-1588075600411-023ef5f3f0d6?auto=format&fit=crop&w=1200&q=80"
            alt="Chłopiec pracujący z terapeutką pedagogiczną"
            fill
            className="object-cover"
            sizes="(max-width: 960px) 100vw, 40vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function ParentSupportSection() {
  return (
    <section className="space-y-8 rounded-[32px] border border-[#f1e8d1] bg-white p-8 shadow-[0_24px_70px_rgba(208,196,167,0.25)]">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="font-display text-3xl text-[#1c1a16]">Kwestionariusz i wsparcie dla rodzica</h2>
        <p className="text-sm text-[#4a4337] sm:text-base">
          Cały proces zaczynam od kwestionariusza rodzinnego. Na jego podstawie ustalam cele i wspieram Cię w
          budowaniu nowych nawyków w domu.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {parentSupportItems.map((item) => (
          <div
            key={item.title}
            className="flex h-full flex-col gap-4 rounded-[24px] border border-[#f6eedd] bg-[#fffdfa] p-6 text-left"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffe7c7] text-[#e48f2f]">
              <item.icon className="h-6 w-6" />
            </span>
            <h3 className="text-lg font-semibold text-[#1c1a16]">{item.title}</h3>
            <p className="text-sm leading-6 text-[#4a4337]">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-full bg-[#e48f2f] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(228,143,47,0.35)] transition hover:bg-[#cf7c20]"
        >
          Pobierz kwestionariusz
        </Link>
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-full border border-[#f1e8d1] px-6 py-3 text-sm font-semibold text-[#4a4337] transition hover:bg-[#faf6ed]"
        >
          Umów rozmowę wspierającą
        </Link>
      </div>
    </section>
  );
}

function PillarsSection() {
  return (
    <section className="space-y-8 rounded-[32px] border border-[#f1e8d1] bg-white p-8 shadow-[0_24px_70px_rgba(208,196,167,0.25)]">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="font-display text-3xl text-[#1c1a16]">Na czym skupiam terapię?</h2>
        <p className="text-sm text-[#4a4337] sm:text-base">
          Każde spotkanie obejmuje pracę poznawczą, emocjonalną i społeczną, dzięki czemu zmiany są trwałe zarówno w
          szkole, jak i w domu.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {supportPillars.map((pillar) => (
          <div
            key={pillar.title}
            className="flex h-full flex-col gap-4 rounded-[24px] border border-[#f6eedd] bg-[#fffdfa] p-6 text-left"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffe7c7] text-[#e48f2f]">
              <pillar.icon className="h-6 w-6" />
            </span>
            <h3 className="text-lg font-semibold text-[#1c1a16]">{pillar.title}</h3>
            <p className="text-sm leading-6 text-[#4a4337]">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="rounded-[32px] border border-[#f1e8d1] bg-[#fffaf1] p-8 shadow-[0_24px_70px_rgba(208,196,167,0.2)]">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="font-display text-3xl text-[#1c1a16]">Jak prowadzę zajęcia?</h2>
        <p className="text-sm text-[#4a4337] sm:text-base">
          Proces obejmuje stały kontakt z rodzicem i modyfikację planu na podstawie obserwacji z gabinetu oraz domu.
        </p>
      </div>
      <ol className="mt-8 space-y-6 text-left text-sm leading-6 text-[#4a4337] sm:text-base">
        {approachSteps.map((step, index) => (
          <li key={step} className="flex items-start gap-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffe7c7] font-semibold text-[#e48f2f]">
              {index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="rounded-[32px] border border-[#f1e8d1] bg-white p-8 shadow-[0_24px_70px_rgba(208,196,167,0.25)]">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="font-display text-3xl text-[#1c1a16]">Cennik terapii pedagogicznej</h2>
        <p className="text-sm text-[#4a4337] sm:text-base">
          W pakietach otrzymujesz raporty postępów oraz konsultacje telefoniczne między sesjami.
        </p>
      </div>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-[#f1e8d1] text-left text-sm text-[#4a4337] sm:text-base">
          <thead className="bg-[#faf6ed] text-xs uppercase tracking-[0.25em] text-[#ab9f83]">
            <tr>
              <th className="px-6 py-4">Usługa</th>
              <th className="px-6 py-4">Czas</th>
              <th className="px-6 py-4">Cena</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f1e8d1]">
            {pricingTable.map((row) => (
              <tr key={row.service} className="bg-white">
                <td className="px-6 py-5 font-semibold text-[#1c1a16]">{row.service}</td>
                <td className="px-6 py-5">{row.duration}</td>
                <td className="px-6 py-5 font-semibold text-[#e48f2f]">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="rounded-[32px] border border-[#f1e8d1] bg-gradient-to-br from-[#fff4d6] via-[#ffe7d0] to-[#ffd9c9] p-10 text-center shadow-[0_24px_70px_rgba(208,196,167,0.25)]">
  <h2 className="font-display text-3xl text-[#1c1a16]">Gotowy lub gotowa na pierwszy krok?</h2>
      <p className="mt-4 text-sm text-[#4a4337] sm:mx-auto sm:max-w-2xl">
        Umów konsultację, aby omówić potrzeby dziecka i zaplanować pierwszy cykl zajęć. Otrzymasz listę wskazówek do
        pracy w domu, aby zmiany były spójne.
      </p>
      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-full bg-[#e48f2f] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(228,143,47,0.35)] transition hover:bg-[#cf7c20]"
        >
          Umów konsultację
        </Link>
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-full border border-[#f1e8d1] px-6 py-3 text-sm font-semibold text-[#4a4337] transition hover:bg-white/70"
        >
          Zapytaj o plan działań
        </Link>
      </div>
    </section>
  );
}
