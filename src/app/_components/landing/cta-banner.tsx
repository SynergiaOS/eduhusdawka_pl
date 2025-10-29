import Link from "next/link";
import { ArrowRight, PhoneOutgoing } from "lucide-react";

import { CtaPopoverButton } from "./cta-popover-button";

export function CtaSection() {
  return (
    <section
      id="cta"
      className="grid gap-10 rounded-[40px] border border-[#bae7f3] bg-gradient-to-br from-[#e7f9ff] via-[#c7ecfa] to-[#f0fbff] p-10 text-[#0f2134] lg:grid-cols-[1fr_0.9fr]"
    >
      <CtaIntroColumn />
      <CtaStepsCard />
    </section>
  );
}

function CtaIntroColumn() {
  return (
    <div className="space-y-6">
      <h2 className="font-display text-3xl leading-tight sm:text-4xl">
        Zrób pierwszy krok ze mną. Umów konsultację i sprawdź, jak mogę pomóc Twojemu dziecku.
      </h2>
      <p className="max-w-xl text-sm text-[#37586b] sm:text-base">
        W trakcie 30-minutowej rozmowy przeanalizuję wyzwania i zaproponuję dalsze działania: diagnozę,
        konkretne terapie lub konsultacje dla rodziców.
      </p>
      <CtaActions />
      <CtaHighlights />
    </div>
  );
}

function CtaActions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <CtaPopoverButton label="Umów konsultację" />
      <Link
        href="tel:+48531509008"
        className="inline-flex items-center gap-2 rounded-full border border-[#0f8ec9]/40 px-6 py-3 text-sm font-semibold text-[#0f8ec9] transition hover:bg-[#e7f9ff]"
      >
        <PhoneOutgoing className="h-4 w-4" />
        +48 531 509 008
      </Link>
    </div>
  );
}

function CtaHighlights() {
  return (
    <ul className="grid gap-3 text-sm text-[#2f4b59] sm:grid-cols-2">
      <li className="rounded-[20px] bg-white/70 px-4 py-3">
  <span className="font-semibold text-[#ff8c3f]">12 lat doświadczenia</span>
  <p>Pracuję z dziećmi w spektrum autyzmu, ADHD i z trudnościami w uczeniu się.</p>
      </li>
      <li className="rounded-[20px] bg-white/70 px-4 py-3">
        <span className="font-semibold text-[#22b573]">Wsparcie dla rodziców</span>
        <p>Otrzymasz jasny plan pracy w domu i możliwość konsultacji online.</p>
      </li>
    </ul>
  );
}

function CtaStepsCard() {
  return (
    <div className="grid content-center gap-6 rounded-[32px] border border-[#c7ecfa] bg-white/85 p-8 text-[#2f4b59] shadow-[0_28px_60px_rgba(79,175,213,0.32)]">
      <h3 className="font-display text-2xl text-[#0f2134]">Jak wygląda współpraca?</h3>
      <ol className="space-y-4 text-sm">
        <li>
          <strong className="block text-[#1ebaf1]">1. Rozmowa wstępna</strong>
          <span>Spotykam się telefonicznie lub online, aby poznać Twoją rodzinę i potrzeby dziecka.</span>
        </li>
        <li>
          <strong className="block text-[#22b573]">2. Diagnoza i plan</strong>
          <span>Przygotowuję diagnozę funkcjonalną oraz propozycję zajęć i konsultacji.</span>
        </li>
        <li>
          <strong className="block text-[#ff8c3f]">3. Regularne wsparcie</strong>
          <span>Podążam za wypracowanym planem, monitorując postępy i dając wsparcie w domu.</span>
        </li>
      </ol>
      <Link
        href="/kontakt"
        className="inline-flex max-w-fit items-center gap-2 rounded-full bg-[#0f8ec9] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d79ad]"
      >
        Przejdź do kontaktu
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
