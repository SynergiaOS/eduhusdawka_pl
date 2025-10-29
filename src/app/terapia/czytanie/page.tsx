import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, ClipboardList, Home, MessageCircle, Puzzle, Smile } from "lucide-react";

import { PageShell } from "../../_components/page-shell";

const heroHighlights = [
  "Łączę sylaby, ruch i rytm, aby uruchomić wszystkie zmysły.",
  "Program obejmuje instrukcje do domu – krótkie zabawy na 5 minut dziennie.",
  "Widoczne postępy po pierwszych 6 tygodniach pracy.",
];

const benefitCards = [
  {
    title: "Czytanie sylabowe",
    description: "Dziecko odkrywa wzorce sylabowe i szybko przechodzi do całych zdań.",
    icon: BookOpen,
  },
  {
    title: "Regulacja emocji",
    description: "Zabawy rytmiczne i oddech wspierają spokój oraz pewność siebie.",
    icon: Smile,
  },
  {
    title: "Integracja zmysłów",
    description: "Łączę dotyk, wzrok i ruch, co poprawia uwagę słuchową i pamięć.",
    icon: Puzzle,
  },
];

const learningJourney = [
  "Diagnoza startowa – obserwuję reakcje na sylaby, gesty i rytm.",
  "Cykl 10 spotkań – krótkie moduły ruchowe, karty obrazkowe i gry językowe.",
  "Mini zadania do domu – rymowanki i zabawy słowne utrwalające materiał.",
  "Podsumowanie po 3 miesiącach – omawiam z Tobą dalsze kroki.",
];

const pricingTable = [
  { service: "Sesja terapeutyczna", duration: "50 min", price: "120 zł" },
  { service: "Sesja z dojazdem", duration: "50 min", price: "150 zł" },
  { service: "Pakiet 5 spotkań", duration: "5 × 50 min", price: "560 zł" },
  { service: "Pakiet 10 spotkań", duration: "10 × 50 min", price: "1080 zł" },
];

const parentSupportItems = [
  {
    title: "Kwestionariusz czytelniczy",
    description: "Pozwala zebrać informacje o mocnych stronach i trudnościach dziecka jeszcze przed spotkaniem.",
    icon: ClipboardList,
  },
  {
    title: "Plan zabaw domowych",
    description: "Co tydzień otrzymujesz listę gier językowych i ruchowych do łączenia sylab w domu.",
    icon: Home,
  },
  {
    title: "Mini konsultacje online",
    description: "Regularnie łączę się z rodzicem, aby odpowiedzieć na pytania i dopasować tempo pracy.",
    icon: MessageCircle,
  },
];

export const metadata: Metadata = {
  title: "Wczesna nauka czytania sylabami | EduHustawka.pl",
  description:
    "Metoda symultaniczno-sekwencyjna prof. Jagody Cieszyńskiej. Pomagam dzieciom z ryzykiem dysleksji i autyzmem pokochać czytanie w zaledwie 3 miesiące.",
  keywords: [
    "symultaniczno sekwencyjna białystok",
    "nauka czytania sylabami",
    "terapia ręki dla dzieci Białystok",
    "metoda cieszyńskiej białystok",
  ],
};

export default function EarlyReadingTherapyPage() {
  return (
    <PageShell variant="default" maxWidthClass="max-w-5xl" mainClassName="gap-20">
      <HeroSection />
      <BenefitsSection />
      <JourneySection />
      <PricingSection />
      <ParentSupportSection />
      <CallToAction />
    </PageShell>
  );
}

function HeroSection() {
  return (
    <section className="overflow-hidden rounded-[32px] border border-[#f1e8d1] bg-white shadow-[0_30px_80px_rgba(208,196,167,0.3)]">
      <div className="grid gap-10 @[960px]:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 px-8 py-10 sm:px-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fbeac2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6f7d]">
            Wczesna nauka czytania
          </span>
          <h1 className="font-display text-4xl text-[#1c1a16] sm:text-5xl">
            Sylabowe czytanie bez frustracji i z uśmiechem każdego dnia.
          </h1>
          <p className="text-base leading-7 text-[#4a4337] sm:text-lg">
            Program symultaniczno-sekwencyjny angażuje ruch, rytm i emocje. Dzięki temu dziecko płynniej łączy sylaby,
            chętniej słucha i zyskuje pewność, że potrafi samodzielnie czytać.
          </p>
          <ul className="space-y-3 text-sm text-[#433d32]">
            {heroHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden className="mt-[6px] inline-flex h-1.5 w-1.5 rounded-full bg-[#ff6f7d]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-[#ff6f7d] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(255,111,125,0.35)] transition hover:bg-[#f25b6a]"
            >
              Umów pierwszą sesję
            </Link>
            <Link
              href="/cennik"
              className="inline-flex items-center justify-center rounded-full border border-[#f1e8d1] px-6 py-3 text-sm font-semibold text-[#4a4337] transition hover:bg-[#faf6ed]"
            >
              Zobacz cały cennik
            </Link>
          </div>
        </div>
        <div className="relative min-h-[260px] overflow-hidden bg-[#fff7f2]">
          <Image
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80"
            alt="Dziewczynka czytająca kolorową książkę"
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
        <h2 className="font-display text-3xl text-[#1c1a16]">Kwestionariusz i materiały dla rodziców</h2>
        <p className="text-sm text-[#4a4337] sm:text-base">
          Zanim spotkamy się w gabinecie, proszę o wypełnienie krótkiego kwestionariusza. Na jego podstawie tworzę
          scenariusz zajęć i listę zabaw do domu.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {parentSupportItems.map((item) => (
          <div
            key={item.title}
            className="flex h-full flex-col gap-4 rounded-[24px] border border-[#f6eedd] bg-[#fffdfa] p-6 text-left"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffe1e5] text-[#ff6f7d]">
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
          className="inline-flex items-center justify-center rounded-full bg-[#ff6f7d] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(255,111,125,0.35)] transition hover:bg-[#f25b6a]"
        >
          Pobierz kwestionariusz
        </Link>
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-full border border-[#f1e8d1] px-6 py-3 text-sm font-semibold text-[#4a4337] transition hover:bg-[#faf6ed]"
        >
          Umów konsultację online
        </Link>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="space-y-8 rounded-[32px] border border-[#f1e8d1] bg-white p-8 shadow-[0_24px_70px_rgba(208,196,167,0.25)]">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="font-display text-3xl text-[#1c1a16]">Co zyska Twoje dziecko?</h2>
        <p className="text-sm text-[#4a4337] sm:text-base">
          Każde spotkanie łączy ruch, emocje i słowo. Dzięki temu dzieci nie tylko czytają, ale też lepiej opowiadają i
          zapamiętują szkolne treści.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {benefitCards.map((card) => (
          <div
            key={card.title}
            className="flex h-full flex-col gap-4 rounded-[24px] border border-[#f6eedd] bg-[#fffdfa] p-6 text-left"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffe1e5] text-[#ff6f7d]">
              <card.icon className="h-6 w-6" />
            </span>
            <h3 className="text-lg font-semibold text-[#1c1a16]">{card.title}</h3>
            <p className="text-sm leading-6 text-[#4a4337]">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="rounded-[32px] border border-[#f1e8d1] bg-[#fffaf1] p-8 shadow-[0_24px_70px_rgba(208,196,167,0.2)]">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="font-display text-3xl text-[#1c1a16]">Jak przebiega terapia?</h2>
        <p className="text-sm text-[#4a4337] sm:text-base">
          Przeprowadzę Cię przez cały proces – od diagnozy po domowe wskazówki do utrwalenia efektów.
        </p>
      </div>
      <ol className="mt-8 space-y-6 text-left text-sm leading-6 text-[#4a4337] sm:text-base">
        {learningJourney.map((step, index) => (
          <li key={step} className="flex items-start gap-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffe7eb] font-semibold text-[#ff6f7d]">
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
        <h2 className="font-display text-3xl text-[#1c1a16]">Cennik wczesnej nauki czytania</h2>
        <p className="text-sm text-[#4a4337] sm:text-base">
          Pakiety zawierają dostęp do materiałów domowych oraz indywidualny plan zabaw sensoryczno-językowych.
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
                <td className="px-6 py-5 font-semibold text-[#ff6f7d]">{row.price}</td>
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
    <section className="rounded-[32px] border border-[#f1e8d1] bg-gradient-to-br from-[#fff4d6] via-[#ffe7d0] to-[#ffd9df] p-10 text-center shadow-[0_24px_70px_rgba(208,196,167,0.25)]">
      <h2 className="font-display text-3xl text-[#1c1a16]">Chcesz zacząć już teraz?</h2>
      <p className="mt-4 text-sm text-[#4a4337] sm:mx-auto sm:max-w-2xl">
        Skontaktuj się, aby otrzymać pierwsze zabawy do domu oraz plan zajęć w gabinecie. Pomogę zbudować pewność siebie
        w czytaniu i mówieniu.
      </p>
      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-full bg-[#ff6f7d] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(255,111,125,0.35)] transition hover:bg-[#f25b6a]"
        >
          Zapisz dziecko na zajęcia
        </Link>
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-full border border-[#f1e8d1] px-6 py-3 text-sm font-semibold text-[#4a4337] transition hover:bg-white/70"
        >
          Zapytaj o materiały domowe
        </Link>
      </div>
    </section>
  );
}
