import Link from "next/link";
import { PageShell } from "../_components/page-shell";
import { services } from "../_components/landing/data";

export default function ForParentsPage() {
  return (
    <PageShell maxWidthClass="max-w-6xl">
      <header className="space-y-3">
        <p className="inline-block rounded-full bg-[#fbeac2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#e5563c]">
          Dla rodziców
        </p>
        <h1 className="font-display text-4xl text-[#17140f] sm:text-5xl">Materiały i wsparcie dla rodziców</h1>
        <p className="max-w-2xl text-base text-[#5a5346] sm:text-lg">
          Zestaw prostych narzędzi, kwestionariuszy i wskazówek, które pomogą Ci w codziennej pracy z dzieckiem.
          Znajdziesz tu także linki do usług i formularzy przygotowanych specjalnie dla rodzin.
        </p>
      </header>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <section className="rounded-[24px] border border-[#e6dec5] bg-white p-6 shadow-[0_20px_50px_rgba(205,192,166,0.35)]">
          <h2 className="font-semibold text-lg text-[#17140f]">Szybkie zasoby</h2>
          <ul className="mt-4 space-y-3 text-sm text-[#433d32]">
            <li>Kwestionariusze startowe dla różnych terapii (czytanie, ręka, słuchowe).</li>
            <li>Codzienne checklisty i ćwiczenia do pracy w domu.</li>
            <li>Poradnik: jak przygotować dziecko do sesji terapeutycznej.</li>
          </ul>
          <div className="mt-4">
            <h3 className="font-medium text-sm text-[#17140f]">Kwestionariusze zewnętrzne</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="https://www.urszulawarzocha.pl/kwestionariusz-autyzm/" target="_blank" rel="noopener noreferrer" className="text-[#0f8ec9] hover:underline">
                  Kwestionariusz – autyzm (Urszula Warzocha)
                </a>
              </li>
              <li>
                <a href="https://www.urszulawarzocha.pl/kwestionariusz-adhd/" target="_blank" rel="noopener noreferrer" className="text-[#0f8ec9] hover:underline">
                  Kwestionariusz – ADHD (Urszula Warzocha)
                </a>
              </li>
            </ul>
          </div>
          <Link href="/kontakt" className="mt-6 inline-block rounded-full bg-[#0f8ec9] px-5 py-3 text-sm font-semibold text-white">
            Skontaktuj się — umów konsultację
          </Link>
        </section>

        <section className="rounded-[24px] border border-[#e6dec5] bg-white p-6 shadow-[0_20px_50px_rgba(205,192,166,0.35)]">
          <h2 className="font-semibold text-lg text-[#17140f]">Usługi dopasowane do rodziców</h2>
          <p className="mt-2 text-sm text-[#5a5346]">Wybierz obszar, w którym potrzebujesz wsparcia — niżej znajdziesz powiązane materiały i strony usług.</p>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.title} className="flex items-center justify-between gap-4 rounded-lg border border-[#f1f1f1] p-3">
                <div>
                  <div className="font-medium text-[#17140f]">{s.title}</div>
                  <div className="text-xs text-[#5a5346]">{s.description}</div>
                </div>
                <Link href={s.href} className="text-sm text-[#0f8ec9]">Zobacz</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
