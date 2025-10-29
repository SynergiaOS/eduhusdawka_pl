import type { ComponentType } from "react";

import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Brain,
  BookOpen,
  Briefcase,
  HeartHandshake,
  Sparkles,
  Users,
} from "lucide-react";

import { PageShell } from "../_components/page-shell";
import { CtaPopoverButton } from "../_components/landing/cta-popover-button";

export const metadata: Metadata = {
  title: "O mnie | EduHuśtawka",
  description:
    "Asia z EduHuśtawki – pedagog specjalny i terapeutka z wieloletnim doświadczeniem w pracy z dziećmi z niepełnosprawnością intelektualną, spektrum autyzmu, zaburzeniami zachowania i trudnościami w uczeniu się.",
};

const timeline: Array<{
  title: string;
  period: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}> = [
  {
    title: "Pedagog specjalny",
    period: "Poradnia Psychologiczno-Pedagogiczna • 2020 – obecnie",
    description:
      "Diagnoza i terapia dzieci z trudnościami edukacyjnymi, ASD i ADHD. Prowadzenie warsztatów dla rodziców i nauczycieli.",
    icon: Briefcase,
  },
  {
    title: "Terapeutka integracji sensorycznej",
    period: "Gabinet terapeutyczny • 2018 – 2020",
    description:
      "Zajęcia indywidualne, plany terapeutyczne i konsultacje z rodzicami pozwalające na pracę w domu.",
    icon: Users,
  },
  {
    title: "Nauczyciel wspomagający",
    period: "Szkoła podstawowa z oddziałami integracyjnymi • 2016 – 2018",
    description:
      "Codzienne wsparcie uczniów ze specjalnymi potrzebami edukacyjnymi w klasie integracyjnej.",
    icon: BookOpen,
  },
];

const specialisations: Array<{
  title: string;
  description: string;
  focus: string[];
  icon: ComponentType<{ className?: string }>;
}> = [
  {
    title: "Dzieci w spektrum autyzmu",
    description:
      "Indywidualne programy terapeutyczne nastawione na komunikację, samoregulację i współpracę z rodziną.",
    focus: [
      "diagnoza funkcjonalna i planowanie wsparcia",
      "praca nad komunikacją alternatywną, w tym PECS",
      "strategia współpracy dom–przedszkole/szkoła",
    ],
    icon: Sparkles,
  },
  {
    title: "Niepełnosprawność intelektualna",
    description:
      "Terapia i edukacja oparta na interdyscyplinarnych metodach wspierających rozwój poznawczy i społeczny.",
    focus: [
      "tworzenie indywidualnych programów edukacyjno-terapeutycznych",
      "wczesne wspomaganie rozwoju",
      "ćwiczenia wzmacniające samodzielność i komunikację",
    ],
    icon: Brain,
  },
  {
    title: "Zaburzenia zachowania",
    description:
      "Łączenie treningu umiejętności społecznych z elementami treningu zastępowania agresji i terapii behawioralnej.",
    focus: [
      "diagnoza emocji i zachowań (KOZE, KOJR)",
      "programy TUS i TZA dopasowane do grupy wiekowej",
      "wsparcie rodziców w budowaniu konsekwentnej struktury dnia",
    ],
    icon: Users,
  },
  {
    title: "Trudności w uczeniu się",
    description:
      "Kompleksowa pomoc dla dzieci z dysleksją, CAPD oraz zaburzeniami koncentracji uwagi.",
    focus: [
      "symultaniczno-sekwencyjna nauka czytania",
      "treningi słuchowe Johansen IAS i Neuroflow",
      "terapia ręki oraz wsparcie grafomotoryki",
    ],
    icon: BookOpen,
  },
];

const postgraduateStudies: string[] = [
  "Pedagogika opiekuńczo-wychowawcza z pomocą psychologiczno-pedagogiczną",
  "Pedagogika korekcyjna",
  "Edukacja i rewalidacja osób ze spektrum autyzmu",
  "Wczesne wspomaganie rozwoju dziecka",
];

const masterStudies: string[] = [
  "Edukacja i rehabilitacja osób z niepełnosprawnością intelektualną – Akademia Pedagogiki Specjalnej im. Marii Grzegorzewskiej",
];

const courses: string[] = [
  "Trening słuchowy Neuroflow",
  "Indywidualna Stymulacja Słuchu Johansena IAS",
  "Karty Oceny Zachowania i Emocji (KOZE)",
  "Karty Oceny Jakościowej Rozwoju (KOJR)",
  "Zaburzenia przetwarzania słuchowego (C)APD – diagnoza i terapia",
  "Karty Oceny Rozwoju Psychoruchowego (KORP)",
  "Kurs Kierownika Wypoczynku (Gaudeamus, Warszawa)",
  "Symultaniczno-Sekwencyjna Nauka Czytania (Centrum Edukacji Nauczycieli w Białymstoku)",
  "Terapia Ręki – diagnoza i działania terapeutyczne (MODM Białystok)",
  "Trening Umiejętności Społecznych (TUS) – PODN Białystok",
  "PECS poziom 1 – system komunikacji alternatywnej",
  "Trening Zastępowania Agresji (TZA) – MODM Białystok",
  "Terapia behawioralna w teorii i praktyce – 3-modułowy kurs Stosowanej Analizy Zachowania",
];

export default function AboutPage() {
  return (
    <PageShell maxWidthClass="max-w-5xl" mainClassName="gap-16">
      <HeroSection />
      <MissionBanner />
      <TimelineSection />
      <SpecialisationsSection />
      <EducationSection />
      <ClosingCta />
    </PageShell>
  );
}

function HeroSection() {
  return (
    <section className="grid gap-10 rounded-[36px] border border-[#e6dec5] bg-white/85 p-8 shadow-[0_28px_70px_rgba(205,192,166,0.4)] @[960px]:grid-cols-[1fr_1fr] @[960px]:items-center">
      <div className="order-2 @[960px]:order-1 space-y-6">
        <p className="inline-block rounded-full bg-[#fbeac2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#e5563c]">
          O mnie
        </p>
        <h1 className="font-display text-4xl text-[#17140f] sm:text-5xl">
          Jestem pedagogiem specjalnym i terapeutką z wieloletnim doświadczeniem.
        </h1>
        <p className="text-base text-[#5a5346] sm:text-lg">
          Jako terapeutka i pedagog pracuję z dziećmi o zróżnicowanych potrzebach rozwojowych i edukacyjnych: od
          niepełnosprawności intelektualnej, przez spektrum autyzmu i zaburzenia zachowania, po trudności w uczeniu się.
          Każde spotkanie łączę z diagnozą, terapią i wsparciem rodziny, aby zmiana była zauważalna w domu oraz szkole.
        </p>
        <p className="text-base text-[#5a5346] sm:text-lg">
          Jestem absolwentką Akademii Pedagogiki Specjalnej im. Marii Grzegorzewskiej w Warszawie na kierunku edukacja i
          rehabilitacja osób z niepełnosprawnością intelektualną. Kolejne studia podyplomowe i szkolenia pozwalają mi
          poszerzać wachlarz metod, z których korzystam w codziennej terapii.
        </p>
        <div className="rounded-[28px] border border-[#efe4c9] bg-[#faf6ed] p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#837659]">Specjalizuję się w</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#433d32]">
            <li>Dzieciach z niepełnosprawnością intelektualną</li>
            <li>Dziećmi w spektrum autyzmu i z zaburzeniami zachowania</li>
            <li>Trudnościach w uczeniu się i koncentracji</li>
            <li>Wczesnym wspomaganiu rozwoju dziecka i pracy z rodziną</li>
          </ul>
        </div>
      </div>
      <div className="order-1 @[960px]:order-2 overflow-hidden rounded-[32px] border border-[#efe4c9] bg-[#fdfaf2] p-4">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px]">
          <Image
            src="/images/asia-profilowe.png"
            alt="Asia – pedagog specjalny i terapeutka EduHuśtawki"
            fill
            className="object-cover"
            sizes="(max-width: 960px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function MissionBanner() {
  return (
    <section className="rounded-[32px] border border-[#e6dec5] bg-[#f1f4d9] p-8 text-center shadow-[0_24px_60px_rgba(176,201,156,0.35)]">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#3a7a5a] shadow-[0_12px_30px_rgba(92,132,100,0.35)]">
        <HeartHandshake className="h-8 w-8" />
      </div>
      <h2 className="mt-6 font-display text-3xl text-[#17140f]">Pracuję systemowo – razem z rodziną</h2>
      <p className="mt-3 text-base text-[#5a5346] sm:mx-auto sm:max-w-2xl">
        Włączam rodziców w każdy etap wsparcia: od diagnozy, przez konsultacje, po plan bezpiecznego wdrożenia zmian.
        Dzięki temu dziecko czuje spójność w domu, przedszkolu i szkole, a ja mogę świętować stałe postępy.
      </p>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="space-y-6">
      <h2 className="font-display text-3xl text-[#17140f]">Doświadczenie zawodowe</h2>
      <div className="relative border-l-2 border-[#e6dec5] pl-6">
        {timeline.map((item, index) => (
          <article key={item.title} className="relative mb-10 last:mb-0">
            <span className="absolute -left-[38px] flex h-8 w-8 items-center justify-center rounded-full bg-[#3a7a5a] text-white shadow-[0_10px_24px_rgba(92,132,100,0.35)]">
              <item.icon className="h-4 w-4" />
            </span>
            <h3 className="text-lg font-semibold text-[#17140f]">{item.title}</h3>
            <p className="text-xs uppercase tracking-[0.18em] text-[#837659]">{item.period}</p>
            <p className="mt-3 text-sm text-[#433d32]">{item.description}</p>
            {index !== timeline.length - 1 && <span className="absolute -left-[21px] top-9 h-full w-[2px] bg-[#e6dec5]" aria-hidden />}
          </article>
        ))}
      </div>
    </section>
  );
}

function SpecialisationsSection() {
  return (
    <section className="space-y-6">
      <h2 className="font-display text-3xl text-[#17140f]">Specjalizacje</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {specialisations.map((item) => (
          <div
            key={item.title}
            className="flex h-full flex-col gap-4 rounded-[28px] border border-[#e6dec5] bg-white p-6 shadow-[0_22px_55px_rgba(205,192,166,0.35)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fbeac2] text-[#e5563c]">
              <item.icon className="h-7 w-7" />
            </div>
            <h3 className="font-semibold text-[#17140f]">{item.title}</h3>
            <p className="text-sm text-[#5a5346]">{item.description}</p>
            <ul className="mt-auto space-y-2 text-sm text-[#433d32]">
              {item.focus.map((focusPoint) => (
                <li key={focusPoint} className="flex items-start gap-2">
                  <span aria-hidden className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-[#e5563c]" />
                  <span>{focusPoint}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="space-y-6">
      <h2 className="font-display text-3xl text-[#17140f]">Wykształcenie i kwalifikacje</h2>
      <div className="grid gap-6 lg:grid-cols-3">
        <QualificationCard
          title="Studia podyplomowe"
          icon={BookOpen}
          items={postgraduateStudies}
        />
        <QualificationCard title="Studia magisterskie" icon={Award} items={masterStudies} />
        <QualificationCard title="Kursy i szkolenia" icon={HeartHandshake} items={courses} compact />
      </div>
    </section>
  );
}

type QualificationCardProps = {
  title: string;
  icon: ComponentType<{ className?: string }>;
  items: string[];
  compact?: boolean;
};

function QualificationCard({ title, icon: Icon, items, compact }: QualificationCardProps) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-[28px] border border-[#e6dec5] bg-white p-6 shadow-[0_20px_50px_rgba(205,192,166,0.3)]">
      <div className="flex items-center gap-3 text-[#17140f]">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1f4d9] text-[#3a7a5a]">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <ul className={`space-y-2 text-sm text-[#433d32] ${compact ? "max-h-64 overflow-y-auto pr-1" : ""}`}>
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span aria-hidden className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-[#e5563c]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ClosingCta() {
  return (
    <section className="rounded-[32px] border border-[#e6dec5] bg-gradient-to-br from-[#faf6ed] via-[#fde9c9] to-[#f1f4d9] p-10 text-center shadow-[0_28px_60px_rgba(205,192,166,0.4)]">
  <h3 className="font-display text-3xl text-[#17140f]">Gotowy lub gotowa na wspólną drogę?</h3>
      <p className="mt-4 text-sm text-[#5a5346] sm:mx-auto sm:max-w-2xl">
        Z przyjemnością poznam Twoją rodzinę i pomogę dobrać najlepszy plan wsparcia. Zacznijmy od krótkiej rozmowy –
        wystarczy zostawić kontakt.
      </p>
      <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <CtaPopoverButton label="Umów konsultację" />
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 rounded-full border border-[#e6dec5] px-6 py-3 text-sm font-semibold text-[#3a7a5a] transition hover:bg-white/60"
        >
          Przejdź do formularza
        </Link>
      </div>
    </section>
  );
}
