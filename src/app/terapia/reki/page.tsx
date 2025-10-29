import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ClipboardList, Dumbbell, Feather, Hand, Home, MessageSquare } from "lucide-react";

import { PageShell } from "../../_components/page-shell";

const heroHighlights = [
  "Diagnoza obejmuje chwyt pisarski, napięcie mięśni i koordynację całego ciała.",
  "Rodzice otrzymują zestaw ćwiczeń do kuchni i łazienki – krótkie aktywności na co dzień.",
  "Widoczne efekty już po 6–8 spotkaniach dzięki konsekwencji i zabawie.",
];

const skillBlocks = [
  {
    title: "Stabilny chwyt",
    description: "Ćwiczę nadgarstek i palce przy użyciu gniotków, szczypiec oraz naturalnych materiałów.",
    icon: Hand,
  },
  {
    title: "Lekkość ruchu",
    description: "Techniki oddechowe i ruchowe zmniejszają napięcie, dzięki czemu pismo staje się płynniejsze.",
    icon: Feather,
  },
  {
    title: "Siła i koordynacja",
    description: "Tor przeszkód i zadania oporowe wzmacniają barki, tułów oraz integrują obie półkule.",
    icon: Dumbbell,
  },
];

const therapyFlow = [
  "Diagnoza motoryczna – obserwacja funkcji dłoni i testy integracji sensorycznej.",
  "Plan 8–12 spotkań – moduły manualne, proprioceptywne i zadania bilateralne.",
  "Domowe rytuały – wskazówki do posiłków, zabaw kuchennych i ubierania się.",
  "Kontrola postępów – korekta chwytu i adaptacja zadań po każdym cyklu.",
];

const pricingTable = [
  { service: "Sesja terapeutyczna", duration: "50 min", price: "120 zł" },
  { service: "Sesja z dojazdem", duration: "50 min", price: "150 zł" },
  { service: "Pakiet 5 sesji", duration: "5 × 50 min", price: "560 zł" },
  { service: "Pakiet 10 sesji", duration: "10 × 50 min", price: "1080 zł" },
];

const parentSupportItems = [
  {
    title: "Kwestionariusz motoryczny",
    description: "Zbieram informacje o samoobsłudze, piśmie i preferowanych aktywnościach dziecka.",
    icon: ClipboardList,
  },
  {
    title: "Instrukcje do kuchni i łazienki",
    description: "Proponuję krótkie zadania podczas posiłków i kąpieli, które wzmacniają chwyt i czucie dłoni.",
    icon: Home,
  },
  {
    title: "Kontakt między sesjami",
    description: "Możesz przesłać zdjęcia chwytu czy film z ćwiczeń – na bieżąco koryguję ułożenie dłoni.",
    icon: MessageSquare,
  },
];

export const metadata: Metadata = {
  title: "Terapia ręki dla dzieci Białystok | EduHustawka.pl",
  description:
    "Nowa usługa EduHustawka.pl: terapia ręki dla dzieci w Białymstoku. Ćwiczenia motoryki, chwytu pisarskiego i samoobsługi prowadzone w formie zabawy.",
  keywords: [
    "terapia ręki dla dzieci Białystok",
    "motoryka mała ćwiczenia",
    "chwyt pisarski terapia",
    "samodzielność dziecka",
  ],
};

export default function HandTherapyPage() {
  return (
    <PageShell variant="default" maxWidthClass="max-w-5xl" mainClassName="gap-20">
      <HeroSection />
      <SkillsSection />
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
      <div className="grid gap-10 @[960px]:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-6 px-8 py-10 sm:px-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fbeac2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#d88d19]">
            Terapia ręki
          </span>
          <h1 className="font-display text-4xl text-[#1c1a16] sm:text-5xl">
            Małe dłonie, wielkie postępy w samodzielności i piśmie.
          </h1>
          <p className="text-base leading-7 text-[#4a4337] sm:text-lg">
            Terapia ręki łączy ćwiczenia manualne, elementy integracji sensorycznej i zabawy ruchowe. Wzmacniam mięśnie,
            buduję precyzję i uczę nowych nawyków podczas codziennych czynności.
          </p>
          <ul className="space-y-3 text-sm text-[#433d32]">
            {heroHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden className="mt-[6px] inline-flex h-1.5 w-1.5 rounded-full bg-[#d88d19]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-[#d88d19] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(216,141,25,0.35)] transition hover:bg-[#c47b0f]"
            >
              Umów diagnozę
            </Link>
            <Link
              href="/cennik"
              className="inline-flex items-center justify-center rounded-full border border-[#f1e8d1] px-6 py-3 text-sm font-semibold text-[#4a4337] transition hover:bg-[#faf6ed]"
            >
              Poznaj pakiety
            </Link>
          </div>
        </div>
        <div className="relative min-h-[260px] overflow-hidden bg-[#fff8ea]">
          <Image
            src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80"
            alt="Chłopiec ćwiczący motorykę dłoni z terapeutą"
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
        <h2 className="font-display text-3xl text-[#1c1a16]">Kwestionariusz i wskazówki dla rodziców</h2>
        <p className="text-sm text-[#4a4337] sm:text-base">
          Pracuję zespołowo – rodzic ma dostęp do kwestionariusza startowego, codziennych checklist i konsultacji po
          każdym spotkaniu.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {parentSupportItems.map((item) => (
          <div
            key={item.title}
            className="flex h-full flex-col gap-4 rounded-[24px] border border-[#f6eedd] bg-[#fffdfa] p-6 text-left"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffe6bf] text-[#d88d19]">
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
          className="inline-flex items-center justify-center rounded-full bg-[#d88d19] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(216,141,25,0.35)] transition hover:bg-[#c47b0f]"
        >
          Pobierz kwestionariusz
        </Link>
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-full border border-[#f1e8d1] px-6 py-3 text-sm font-semibold text-[#4a4337] transition hover:bg-[#faf6ed]"
        >
          Skonsultuj domowe ćwiczenia
        </Link>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="space-y-8 rounded-[32px] border border-[#f1e8d1] bg-white p-8 shadow-[0_24px_70px_rgba(208,196,167,0.25)]">
      <div className="flex flex-col gap-3 text-center">
  <h2 className="font-display text-3xl text-[#1c1a16]">Jakie umiejętności rozwijam?</h2>
        <p className="text-sm text-[#4a4337] sm:text-base">
          Program obejmuje zarówno pracę manualną, jak i zadania z dużą dozą ruchu, aby wzmocnić całe ciało.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {skillBlocks.map((block) => (
          <div
            key={block.title}
            className="flex h-full flex-col gap-4 rounded-[24px] border border-[#f6eedd] bg-[#fffdfa] p-6 text-left"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffe6bf] text-[#d88d19]">
              <block.icon className="h-6 w-6" />
            </span>
            <h3 className="text-lg font-semibold text-[#1c1a16]">{block.title}</h3>
            <p className="text-sm leading-6 text-[#4a4337]">{block.description}</p>
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
        <h2 className="font-display text-3xl text-[#1c1a16]">Jak wygląda proces?</h2>
        <p className="text-sm text-[#4a4337] sm:text-base">
          Każde dziecko otrzymuje plan dopasowany do wieku, diagnozy i codziennych rutyn domowych.
        </p>
      </div>
      <ol className="mt-8 space-y-6 text-left text-sm leading-6 text-[#4a4337] sm:text-base">
        {therapyFlow.map((step, index) => (
          <li key={step} className="flex items-start gap-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffe6bf] font-semibold text-[#d88d19]">
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
        <h2 className="font-display text-3xl text-[#1c1a16]">Cennik terapii ręki</h2>
        <p className="text-sm text-[#4a4337] sm:text-base">
          Pakiety obejmują instruktaż domowy oraz konsultację telefoniczną po każdym cyklu ćwiczeń.
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
                <td className="px-6 py-5 font-semibold text-[#d88d19]">{row.price}</td>
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
    <section className="rounded-[32px] border border-[#f1e8d1] bg-gradient-to-br from-[#fff4d6] via-[#ffe7d0] to-[#ffdcb0] p-10 text-center shadow-[0_24px_70px_rgba(208,196,167,0.25)]">
      <h2 className="font-display text-3xl text-[#1c1a16]">Zadbaj o sprawność dłoni</h2>
      <p className="mt-4 text-sm text-[#4a4337] sm:mx-auto sm:max-w-2xl">
        Umów spotkanie, aby otrzymać indywidualny plan ćwiczeń i gotowe zabawy do domu. Pomogę zadbać o samodzielność
        Twojego dziecka.
      </p>
      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-full bg-[#d88d19] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(216,141,25,0.35)] transition hover:bg-[#c47b0f]"
        >
          Skontaktuj się ze mną
        </Link>
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-full border border-[#f1e8d1] px-6 py-3 text-sm font-semibold text-[#4a4337] transition hover:bg-white/70"
        >
          Zapytaj o zestaw domowy
        </Link>
      </div>
    </section>
  );
}
