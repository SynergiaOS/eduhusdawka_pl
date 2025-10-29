import { SiteHeader } from "./_components/landing/header";
import { HeroSection } from "./_components/landing/hero";
import { ServicesSection } from "./_components/landing/programs-and-resources";
import { TestimonialsSection } from "./_components/landing/experiences";
import { CtaSection } from "./_components/landing/cta-banner";
import { SiteFooter } from "./_components/landing/footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_8%,rgba(30,186,241,0.2),transparent_58%),radial-gradient(circle_at_84%_12%,rgba(164,239,235,0.22),transparent_60%),radial-gradient(circle_at_52%_95%,rgba(254,209,2,0.16),transparent_62%)]" />
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-20 px-4 pb-24 pt-16 sm:px-6 lg:px-12">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
