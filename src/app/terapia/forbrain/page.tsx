import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ClipboardList, Ear, Focus, Heart, MessageSquare, Mic2 } from "lucide-react";

import { PageShell } from "../../_components/page-shell";

const heroBenefits = [
  "Wzmacnia percepcję własnego głosu i płynność czytania.",
  "Pomaga utrzymać koncentrację dzięki filtrom dźwiękowym.",
  "Buduje pewność siebie w mówieniu i prezentowaniu się przed klasą.",
];

const therapyEffects = [
  {
    title: "Wyraźniejsza mowa",
    description: "Dziecko słyszy swój głos wyraźniej, dzięki czemu naturalnie koryguje artykulację.",
    icon: Mic2,
  },
  {
    title: "Lepsza koncentracja",
    description: "Specjalne filtry dźwiękowe ograniczają bodźce tła i pomagają skupić się na zadaniu.",
    icon: Focus,
  },
  {
    title: "Więcej pewności siebie",
    description: "Małe sukcesy w czytaniu i wystąpieniach budują poczucie sprawczości u dziecka.",
    icon: Heart,
  },
];

const pricingTable = [
  { service: "Sesja próbna Forbrain®", duration: "30 min", price: "50 zł" },
  { service: "Sesja terapeutyczna", duration: "50 min", price: "150 zł" },
  { service: "Sesja z dojazdem do domu", duration: "50 min", price: "180 zł" },
  { service: "Pakiet 5 sesji", duration: "5 × 50 min", price: "700 zł" },
  { service: "Pakiet 10 sesji", duration: "10 × 50 min", price: "1350 zł" },
];

const parentSupportItems = [
  {
    title: "Kwestionariusz startowy",
    description: "Wypełniasz go przed konsultacją, abym poznała historię rozwoju i cele terapii.",
    icon: ClipboardList,
  },
  {
    title: "Plan odsłuchów domowych",
    description: "Otrzymujesz harmonogram tygodniowy oraz checklistę odsłuchów w aplikacji lub w formie PDF.",
    icon: Ear,
  },
  {
    title: "Stały kontakt terapeuty",
    description: "Co tydzień omawiam obserwacje z domu i modyfikuję ćwiczenia poprzez wiadomości lub krótkie rozmowy.",
    icon: MessageSquare,
  },
];

export const metadata: Metadata = {
  title: "Czytanie sylabowe z Forbrain | EduHustawka.pl",
  description:
    "Czytanie sylabowe z Forbrain® łączy metodę krakowską z technologią przewodnictwa kostnego, aby rozwijać mowę, koncentrację i płynność czytania dzieci.",
  keywords: [
    "forbrain białystok",
    "terapia forbrain dla dzieci",
    "czytanie sylabowe forbrain",
    "terapia ręki dla dzieci Białystok",
  ],
};

export default function ForbrainTherapyPage() {
  return (
    <PageShell variant="default" maxWidthClass="max-w-5xl" mainClassName="gap-20">
      <HeroSection />
      <BenefitsSection />
      <PricingSection />
      <ParentSupportSection />
      <CallToAction />
    </PageShell>
  );
}

function HeroSection() {
  return (
    <section className="overflow-hidden rounded-[32px] border border-[#c7ecfa] bg-white shadow-[0_30px_80px_rgba(79,175,213,0.28)]">
      <div className="grid gap-10 @[960px]:grid-cols-[1.15fr_0.85fr]">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <div className="space-y-6 px-8 py-10 sm:px-10">
      <HeroBadge />
      <HeroHeadline />
      <HeroDescription />
      <HeroBenefits />
      <HeroActions />
    </div>
  );
}

function HeroBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#e7f9ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0f8ec9]">
      Czytanie z Forbrain®
    </span>
  );
}

function HeroHeadline() {
  return (
    <h1 className="font-display text-4xl text-[#0f2134] sm:text-5xl">
      Słuchawki, które wzmacniają percepcję głosu i tempo czytania.
    </h1>
  );
}

function HeroDescription() {
  return (
    <p className="text-base leading-7 text-[#37586b] sm:text-lg">
      Terapia z wykorzystaniem Forbrain® łączy metodę sylabową, ruch i przewodnictwo kostne. Dziecko słyszy swój głos
      wyraźniej, uczy się płynniej czytać i lepiej zapamiętuje materiał szkolny, jednocześnie budując koncentrację oraz
      pewność siebie.
    </p>
  );
}

function HeroBenefits() {
  return (
    <ul className="space-y-3 text-sm text-[#2f4b59]">
      {heroBenefits.map((benefit) => (
        <li key={benefit} className="flex items-start gap-2">
          <span aria-hidden className="mt-[6px] inline-flex h-1.5 w-1.5 rounded-full bg-[#1ebaf1]" />
          <span>{benefit}</span>
        </li>
      ))}
    </ul>
  );
}

function HeroActions() {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      <Link
        href="/kontakt"
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1ebaf1] to-[#0f8ec9] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(17,142,201,0.32)] transition hover:from-[#2ac6fd] hover:to-[#0d79ad]"
      >
        Umów sesję próbną
      </Link>
      <Link
        href="/cennik"
        className="inline-flex items-center justify-center rounded-full border border-[#c7ecfa] px-6 py-3 text-sm font-semibold text-[#0f3b52] transition hover:bg-[#e7f9ff]"
      >
        Sprawdź pełny cennik
      </Link>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative min-h-[260px] overflow-hidden bg-[#f3fbff]">
      <Image
        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
        alt="Dziecko korzystające ze słuchawek Forbrain podczas zajęć"
        fill
        className="object-cover"
        sizes="(max-width: 960px) 100vw, 40vw"
        priority
      />
    </div>
  );
}

function ParentSupportSection() {
  return (
    <section className="space-y-8 rounded-[32px] border border-[#c7ecfa] bg-white p-8 shadow-[0_24px_70px_rgba(79,175,213,0.25)]">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="font-display text-3xl text-[#0f2134]">Kwestionariusz i wsparcie dla rodziców</h2>
        <p className="text-sm text-[#37586b] sm:text-base">
          Przed rozpoczęciem terapii proszę o wypełnienie krótkiego kwestionariusza. Dzięki temu mogę przygotować
          plan odsłuchów i jasno omówić rolę rodzica w całym procesie.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {parentSupportItems.map((item) => (
          <div
            key={item.title}
            className="flex h-full flex-col gap-4 rounded-[24px] border border-[#d7f1fb] bg-[#f6fdff] p-6 text-left"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7f9ff] text-[#0f8ec9]">
              <item.icon className="h-6 w-6" />
            </span>
            <h3 className="text-lg font-semibold text-[#0f2134]">{item.title}</h3>
            <p className="text-sm leading-6 text-[#37586b]">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1ebaf1] to-[#0f8ec9] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(17,142,201,0.32)] transition hover:from-[#2ac6fd] hover:to-[#0d79ad]"
        >
          Pobierz kwestionariusz
        </Link>
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-full border border-[#c7ecfa] px-6 py-3 text-sm font-semibold text-[#0f3b52] transition hover:bg-[#e7f9ff]"
        >
          Umów rozmowę z terapeutą
        </Link>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="space-y-8 rounded-[32px] border border-[#c7ecfa] bg-white p-8 shadow-[0_24px_70px_rgba(79,175,213,0.25)]">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="font-display text-3xl text-[#0f2134]">Efekty terapii</h2>
        <p className="text-sm text-[#37586b] sm:text-base">
          Program łączy przewodnictwo kostne z ćwiczeniami sensorycznymi. Połączenie takiej technologii z metodą
          krakowską pozwala szybciej utrwalić nowe umiejętności szkolne.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {therapyEffects.map((effect) => (
          <div
            key={effect.title}
            className="flex h-full flex-col gap-4 rounded-[24px] border border-[#d7f1fb] bg-[#f6fdff] p-6 text-left"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7f9ff] text-[#0f8ec9]">
              <effect.icon className="h-6 w-6" />
            </span>
            <h3 className="text-lg font-semibold text-[#0f2134]">{effect.title}</h3>
            <p className="text-sm leading-6 text-[#37586b]">{effect.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="rounded-[32px] border border-[#c7ecfa] bg-white p-8 shadow-[0_24px_70px_rgba(79,175,213,0.25)]">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="font-display text-3xl text-[#0f2134]">Cennik zajęć Forbrain®</h2>
        <p className="text-sm text-[#37586b] sm:text-base">
          Każdy pakiet zawiera indywidualny plan ćwiczeń domowych oraz podsumowanie postępów po zakończeniu cyklu.
        </p>
      </div>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-[#c7ecfa] text-left text-sm text-[#37586b] sm:text-base">
          <thead className="bg-[#e7f9ff] text-xs uppercase tracking-[0.25em] text-[#0f8ec9]">
            <tr>
              <th className="px-6 py-4">Usługa</th>
              <th className="px-6 py-4">Czas</th>
              <th className="px-6 py-4">Cena</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#c7ecfa]">
            {pricingTable.map((row) => (
              <tr key={row.service} className="bg-white">
                <td className="px-6 py-5 font-semibold text-[#0f2134]">{row.service}</td>
                <td className="px-6 py-5">{row.duration}</td>
                <td className="px-6 py-5 font-semibold text-[#0f8ec9]">{row.price}</td>
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
    <section className="rounded-[32px] border border-[#c7ecfa] bg-gradient-to-br from-[#1ebaf1]/90 to-[#0b2f45]/90 p-10 text-center text-white shadow-[0_24px_70px_rgba(8,48,69,0.35)]">
  <h2 className="font-display text-3xl">Gotowy lub gotowa na pierwszy krok?</h2>
      <p className="mt-4 text-sm text-white/85 sm:mx-auto sm:max-w-2xl">
        Zarezerwuj sesję próbną i sprawdź, jak Forbrain® może odmienić tempo czytania oraz pewność siebie Twojego dziecka
        w ciągu kilku tygodni.
      </p>
      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0f3b52] transition hover:bg-white/90"
        >
          Umów konsultację
        </Link>
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Zapytaj o pakiet zajęć
        </Link>
      </div>
    </section>
  );
}
