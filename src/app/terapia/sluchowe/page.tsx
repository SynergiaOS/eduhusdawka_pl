import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ClipboardList, Focus, Home, MessageSquare, ShieldCheck, Waves } from "lucide-react";

import { PageShell } from "../../_components/page-shell";

const heroHighlights = [
  "Indywidualnie komponowane nagrania dopasowane do diagnozy centralnego słyszenia.",
  "Wsparcie dla dzieci z dysleksją, ADHD, ASD i nadwrażliwością słuchową.",
  "Regularne konsultacje i monitoring postępów co 4 tygodnie.",
];

const heroHighlightItems = heroHighlights.map((item) => (
  <li key={item} className="flex items-start gap-2">
    <span aria-hidden className="mt-[6px] inline-flex h-1.5 w-1.5 rounded-full bg-[#5f5de3]" />
    <span>{item}</span>
  </li>
));

const programBenefits = [
  {
    title: "Porządkuje odbiór dźwięków",
    description:
      "Trening reorganizuje przetwarzanie bodźców akustycznych, dzięki czemu dziecko wyraźniej rozróżnia mowę i tło.",
    icon: Waves,
  },
  {
    title: "Łatwiejsze skupienie",
    description:
      "Lepsze filtrowanie dźwięków poprawia koncentrację podczas lekcji, a zadania szkolne nie są już tak męczące.",
    icon: Focus,
  },
  {
    title: "Spokojniejsze reakcje",
    description:
      "Zmniejszam nadwrażliwość na hałas – maluch szybciej się wycisza i nie unika głośniejszych miejsc.",
    icon: ShieldCheck,
  },
];

const trainingFlow = [
  "Diagnoza centralnego przetwarzania słuchowego oraz szczegółowy wywiad z rodziną.",
  "Dobór programu Johansen IAS lub Neuroflow wraz z instrukcją odsłuchów i materiałami startowymi.",
  "Codzienne odsłuchy w domu (15–20 min) z kartą obserwacji i wsparciem terapeuty online.",
  "Kontrola efektów co 4 tygodnie, aktualizacja nagrań i omówienie postępów podczas konsultacji.",
];

const pricingRows = [
  {
    service: "Diagnoza audiologiczna i konsultacja",
    price: "350 zł",
    note: "Testy CAPD, omówienie wyników oraz plan odsłuchów (60 min).",
  },
  {
    service: "Program Johansen IAS (4 nagrania)",
    price: "790 zł",
    note: "Indywidualne nagrania + dwie konsultacje kontrolne online.",
  },
  {
    service: "Program Neuroflow (6 modułów)",
    price: "890 zł",
    note: "Dostęp do platformy, monitoring terapeuty i modyfikacje ćwiczeń.",
  },
  {
    service: "Wizyta kontrolna / korekta planu",
    price: "150 zł",
    note: "Spotkanie podsumowujące postępy i aktualizacja materiałów (40 min).",
  },
];

const parentSupportItems = [
  {
    title: "Kwestionariusz słuchowy",
    description: "Wypełnij go przed diagnozą, abym poznała wrażliwość na hałas i sytuacje szkolne.",
    icon: ClipboardList,
  },
  {
    title: "Instrukcja odsłuchów w domu",
    description: "Otrzymujesz szczegółowy harmonogram oraz wskazówki do pracy w spokojnym i głośnym otoczeniu.",
    icon: Home,
  },
  {
    title: "Kontakt między konsultacjami",
    description: "Co tydzień omawiam notatki z karty obserwacji i wprowadzam korekty w programie.",
    icon: MessageSquare,
  },
];

export const metadata: Metadata = {
  title: "Trening słuchowy Johansen i Neuroflow | EduHustawka.pl",
  description:
    "Indywidualne nagrania Johansen IAS i Neuroflow pomagają w organizacji słyszenia, koncentracji oraz łagodzeniu nadwrażliwości akustycznej u dzieci.",
  keywords: [
    "trening słuchowy białystok",
    "johansen ias",
    "neuroflow dla dzieci",
    "terapia słuchowa eduhustawka",
  ],
};

export default function AuditoryTherapyPage() {
  return (
    <PageShell variant="default" maxWidthClass="max-w-5xl" mainClassName="gap-20">
      <HeroSection />
      <BenefitsSection />
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
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
}

function ParentSupportSection() {
  return (
    <section className="space-y-8 rounded-[32px] border border-[#f1e8d1] bg-white p-8 shadow-[0_24px_70px_rgba(208,196,167,0.25)]">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="font-display text-3xl text-[#1c1a16]">Kwestionariusz i współpraca z rodzicem</h2>
        <p className="text-sm text-[#4a4337] sm:text-base">
          Dokładne informacje od rodzica pozwalają mi dopasować nagrania i tempo programu. Kwestionariusz oraz karta
          obserwacji pomagają utrzymać spójność pracy w domu i gabinecie.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {parentSupportItems.map((item) => (
          <div
            key={item.title}
            className="flex h-full flex-col gap-4 rounded-[24px] border border-[#f6eedd] bg-[#fffdfa] p-6 text-left"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e1e0ff] text-[#5f5de3]">
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
          className="inline-flex items-center justify-center rounded-full bg-[#5f5de3] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(95,93,227,0.35)] transition hover:bg-[#4b4bd1]"
        >
          Pobierz kwestionariusz
        </Link>
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-full border border-[#f1e8d1] px-6 py-3 text-sm font-semibold text-[#4a4337] transition hover:bg-[#faf6ed]"
        >
          Umów konsultację kontrolną
        </Link>
      </div>
    </section>
  );
}

function HeroText() {
  return (
    <div className="space-y-6 px-8 py-10 sm:px-10">
      <HeroBadge />
      <HeroHeading />
      <HeroDescription />
      <ul className="space-y-3 text-sm text-[#433d32]">{heroHighlightItems}</ul>
      <HeroActions />
    </div>
  );
}

function HeroBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#fbeac2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#5f5de3]">
      Treningi słuchowe Johansen &amp; Neuroflow
    </span>
  );
}

function HeroHeading() {
  return (
    <h1 className="font-display text-4xl text-[#1c1a16] sm:text-5xl">
      Programy, które porządkują dźwięki i dają spokój w głowie.
    </h1>
  );
}

function HeroDescription() {
  return (
    <p className="text-base leading-7 text-[#4a4337] sm:text-lg">
      Łączę diagnozę audiologiczną, indywidualne nagrania i konsultacje online. Dzięki temu dziecko lepiej rozumie mowę,
      dłużej utrzymuje uwagę i reaguje spokojniej na bodźce słuchowe.
    </p>
  );
}

function HeroActions() {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      <Link
        href="/kontakt"
        className="inline-flex items-center justify-center rounded-full bg-[#5f5de3] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(95,93,227,0.35)] transition hover:bg-[#4b4bd1]"
      >
        Zamów diagnozę słuchową
      </Link>
      <Link
        href="/cennik"
        className="inline-flex items-center justify-center rounded-full border border-[#f1e8d1] px-6 py-3 text-sm font-semibold text-[#4a4337] transition hover:bg-[#faf6ed]"
      >
        Zobacz pakiety
      </Link>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="relative min-h-[260px] overflow-hidden bg-[#f2f0ff]">
      <Image
        src="https://images.unsplash.com/photo-1514311548101-1e9b81fb63e4?auto=format&fit=crop&w=1200&q=80"
        alt="Dziewczynka słuchająca nagrań podczas terapii słuchowej"
        fill
        className="object-cover"
        sizes="(max-width: 960px) 100vw, 40vw"
        priority
      />
    </div>
  );
}

function BenefitsSection() {
  return (
    <section className="space-y-8 rounded-[32px] border border-[#f1e8d1] bg-white p-8 shadow-[0_24px_70px_rgba(208,196,167,0.25)]">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="font-display text-3xl text-[#1c1a16]">Dlaczego warto?</h2>
        <p className="text-sm text-[#4a4337] sm:text-base">
          Programy Johansen IAS i Neuroflow pomagają dzieciom z dysleksją, ADHD, autyzmem oraz nadwrażliwością słuchową
          lepiej funkcjonować w szkole i w domu.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {programBenefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex h-full flex-col gap-4 rounded-[24px] border border-[#f6eedd] bg-[#fffdfa] p-6 text-left"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e1e0ff] text-[#5f5de3]">
              <benefit.icon className="h-6 w-6" />
            </span>
            <h3 className="text-lg font-semibold text-[#1c1a16]">{benefit.title}</h3>
            <p className="text-sm leading-6 text-[#4a4337]">{benefit.description}</p>
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
        <h2 className="font-display text-3xl text-[#1c1a16]">Jak przebiega terapia?</h2>
        <p className="text-sm text-[#4a4337] sm:text-base">
          Nadzoruję każdy etap – od diagnozy po monitorowanie odsłuchów w domu – aby program był spójny i skuteczny.
        </p>
      </div>
      <ol className="mt-8 space-y-6 text-left text-sm leading-6 text-[#4a4337] sm:text-base">
        {trainingFlow.map((step, index) => (
          <li key={step} className="flex items-start gap-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e1e0ff] font-semibold text-[#5f5de3]">
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
        <h2 className="font-display text-3xl text-[#1c1a16]">Cennik treningów słuchowych</h2>
        <p className="text-sm text-[#4a4337] sm:text-base">
          Dobieram program do możliwości dziecka. Konsultacje obejmują omówienie wyników i plan domowych odsłuchów.
        </p>
      </div>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-[#f1e8d1] text-left text-sm text-[#4a4337] sm:text-base">
          <thead className="bg-[#faf6ed] text-xs uppercase tracking-[0.25em] text-[#ab9f83]">
            <tr>
              <th className="px-6 py-4">Usługa</th>
              <th className="px-6 py-4">Cena</th>
              <th className="px-6 py-4">Uwagi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f1e8d1]">
            {pricingRows.map((row) => (
              <tr key={row.service} className="bg-white">
                <td className="px-6 py-5 font-semibold text-[#1c1a16]">{row.service}</td>
                <td className="px-6 py-5 font-semibold text-[#5f5de3]">{row.price}</td>
                <td className="px-6 py-5">{row.note}</td>
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
    <section className="rounded-[32px] border border-[#f1e8d1] bg-gradient-to-br from-[#fff4d6] via-[#e8e5ff] to-[#dbe0ff] p-10 text-center shadow-[0_24px_70px_rgba(208,196,167,0.25)]">
      <h2 className="font-display text-3xl text-[#1c1a16]">Chcesz rozpocząć trening?</h2>
      <p className="mt-4 text-sm text-[#4a4337] sm:mx-auto sm:max-w-2xl">
        Skontaktuj się, aby dobrać właściwy program, ustalić harmonogram odsłuchów i otrzymać pierwsze nagrania do domu.
      </p>
      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-full bg-[#5f5de3] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(95,93,227,0.35)] transition hover:bg-[#4b4bd1]"
        >
          Zamów diagnozę
        </Link>
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-full border border-[#f1e8d1] px-6 py-3 text-sm font-semibold text-[#4a4337] transition hover:bg-white/70"
        >
          Porozmawiaj z terapeutą
        </Link>
      </div>
    </section>
  );
}
