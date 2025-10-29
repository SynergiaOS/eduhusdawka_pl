import type { ReactNode } from "react";

import Link from "next/link";
import { CircleX, CheckCircle, MessageCircle } from "lucide-react";

import { CtaPopoverButton } from "./cta-popover-button";
import { heroChallenges, heroSuccesses } from "./data";

export function HeroSection() {
  return (
    <section className="grid gap-12 rounded-[40px] border border-[#bae7f3] bg-white/85 p-10 shadow-[0_35px_80px_rgba(79,175,213,0.35)] backdrop-blur-lg lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <HeroIntro />
      <HeroVisual />
    </section>
  );
}

function HeroIntro() {
  return (
    <div className="flex flex-col gap-8">
      <div className="inline-flex max-w-fit items-center gap-2 rounded-full bg-[#e7f9ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0f8ec9]">
        Empatyczne wsparcie na co dzień
      </div>
  <h1 className="font-display text-4xl leading-tight text-[#0f2134] sm:text-5xl lg:text-[56px]">
        EduHuśtawka – miejsce, w którym dzieci i rodzice wracają do równowagi.
      </h1>
  <p className="max-w-xl text-base leading-7 text-[#37586b] sm:text-lg">
        Pomagam dzieciom z trudnościami w uczeniu się, koncentracji oraz komunikacji. Pracuję w oparciu o diagnozę,
        indywidualne terapie i czułą współpracę z rodzicami.
      </p>
  <div className="grid gap-6 rounded-[28px] bg-[#e7f9ff] p-6 sm:grid-cols-2">
        <HeroList
          title="Problemy, przy których wspieram"
          items={heroChallenges}
          icon={<CircleX className="h-4 w-4 text-[#ff8c3f]" aria-hidden />}
        />
        <HeroList
          title="Cele, które osiągasz ze mną"
          items={heroSuccesses}
          icon={<CheckCircle className="h-4 w-4 text-[#22b573]" aria-hidden />}
        />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <CtaPopoverButton label="Umów bezpłatną konsultację" />
        <Link
          href="https://wa.me/48531509008"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f8ec9] underline-offset-4 transition hover:text-[#0c6e9d] hover:underline"
        >
          <MessageCircle className="h-4 w-4" />
          Napisz do mnie na WhatsApp (+48 531 509 008)
        </Link>
      </div>
    </div>
  );
}

type HeroListProps = {
  title: string;
  items: string[];
  icon: ReactNode;
};

function HeroList({ title, items, icon }: HeroListProps) {
  return (
    <div className="flex flex-col gap-3">
  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4a6a7a]">{title}</h3>
  <ul className="space-y-2 text-sm text-[#2f4b59]">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-[2px] flex-shrink-0">{icon}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-6">
  <div className="absolute -left-20 -top-20 hidden h-48 w-48 rounded-full bg-[#fed102]/35 blur-3xl lg:block" />
  <div className="absolute -bottom-16 -right-16 hidden h-48 w-48 rounded-full bg-[#1ebaf1]/25 blur-3xl lg:block" />
  <div className="relative w-full overflow-hidden rounded-[32px] border border-[#c7ecfa] bg-[#f6fdff] shadow-[0_30px_70px_rgba(79,175,213,0.35)]">
        <div
          className="aspect-square w-full bg-cover bg-center"
          aria-hidden
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDAy9V7fMWXTz9vEnZ7ZqR8Di7KC-oQSHYYut5x0Ei-9dyLNafbV9xkKgQ4GjRga9MqJA5VcXjpYF0P1vWdWIZPQeNwJDWVbh7_RkYfucVh8Ur0Q6q6KiusTV2FNvKJa1Euf25THasjtfNlT5AYfae-jH90z42fTwHDcEAWiiwL7vTStSkv11fbFdV656rtA3BmR2n_wO8DMKQhxx4I3rI-I5vpyVEP57jfrf7CrKY_WyDum4qPCzEUJQjpHcf1-z8RoXM6XNRRgnIp')",
          }}
        />
      </div>
    </div>
  );
}
