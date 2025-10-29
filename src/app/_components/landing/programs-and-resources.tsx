import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { services } from "./data";

export function ServicesSection() {
  return (
  <section id="uslugi" className="space-y-8">
      <div className="flex flex-col gap-3 text-center sm:text-left">
        <span className="mx-auto rounded-full bg-[#e7f9ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0f8ec9] sm:mx-0">
          Jak pomagam dzieciom
        </span>
        <h2 className="font-display text-3xl text-[#0f2134] sm:text-4xl">
          Indywidualne terapie i programy wsparcia dopasowuję do potrzeb Twojej rodziny.
        </h2>
        <p className="max-w-3xl text-sm text-[#37586b] sm:text-base">
          Łączę diagnozę, specjalistyczne narzędzia i czułe relacje, aby dzieci mogły w bezpiecznym rytmie rozwijać
          koncentrację, mowę oraz umiejętności społeczne.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#bae7f3] bg-white shadow-[0_24px_60px_rgba(79,175,213,0.3)] transition hover:-translate-y-1 hover:shadow-[0_32px_70px_rgba(79,175,213,0.38)]"
          >
            <div
              className="aspect-video w-full bg-cover bg-center"
              aria-hidden
              style={{ backgroundImage: `url('${service.image}')` }}
            />
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl text-[#0f2134]">{service.title}</h3>
                <ArrowUpRight
                  className="h-5 w-5 text-[#7ccde5] transition group-hover:text-[#0f8ec9]"
                  aria-hidden
                />
              </div>
              <p className="text-sm text-[#37586b]">{service.description}</p>
              <Link
                href={service.href}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#0f8ec9] transition hover:text-[#0c6e9d]"
              >
                Dowiedz się więcej
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
