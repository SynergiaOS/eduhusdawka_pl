import { Star } from "lucide-react";

import { testimonials } from "./data";

export function TestimonialsSection() {
  return (
  <section id="opinie" className="rounded-[36px] border border-[#bae7f3] bg-white/85 p-10 shadow-[0_32px_70px_rgba(79,175,213,0.35)]">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="rounded-full bg-[#e7f9ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0f8ec9]">
          Głosy rodziców
        </span>
        <h2 className="font-display text-3xl text-[#0f2134] sm:text-4xl">
          Zobacz, jakie zmiany rodziny zauważają po współpracy ze mną.
        </h2>
        <p className="max-w-2xl text-sm text-[#37586b] sm:text-base">
          Każdy program zaczynam od diagnozy i jasnego planu. Wspieram również rodziców, aby efekty zajęć utrzymywały się
          w domu i szkole.
        </p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.author}
            className="flex h-full flex-col gap-5 rounded-[28px] border border-[#c7ecfa] bg-[#e7f9ff] p-8 shadow-[0_20px_50px_rgba(79,175,213,0.3)]"
          >
            <div className="flex items-center gap-1 text-[#fed102]" aria-hidden>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="text-sm leading-7 text-[#2f4b59]">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-auto text-sm font-semibold text-[#0f2134]">
              {testimonial.author}
              <span className="block text-xs font-normal text-[#4a6a7a]">{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
