import { ReactNode } from "react";

import { SiteFooter } from "./landing/footer";
import { SiteHeader } from "./landing/header";

type PageShellProps = {
  children: ReactNode;
  maxWidthClass?: string;
  mainClassName?: string;
  variant?: "default" | "therapy";
};

const MAIN_BASE = "mx-auto flex w-full flex-1 flex-col gap-16 px-6 pb-24 pt-20 lg:px-12";
const DEFAULT_BG =
  "relative flex min-h-screen flex-col overflow-hidden bg-[var(--background)] text-[var(--foreground)]";
const THERAPY_BG =
  "relative flex min-h-screen flex-col overflow-hidden bg-[#031f33] text-white";
const THERAPY_GRADIENT =
  "pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(30,186,241,0.32),_transparent_62%),radial-gradient(circle_at_bottom,_rgba(164,239,235,0.3),_transparent_55%)]";
const DEFAULT_GRADIENT =
  "pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_8%,rgba(30,186,241,0.2),transparent_58%),radial-gradient(circle_at_84%_12%,rgba(164,239,235,0.22),transparent_60%),radial-gradient(circle_at_52%_95%,rgba(254,209,2,0.16),transparent_62%)]";

export function PageShell({ children, maxWidthClass, mainClassName, variant = "default" }: PageShellProps) {
  const widthClass = maxWidthClass ?? "max-w-[900px]";
  const mainClasses = [MAIN_BASE, widthClass, mainClassName].filter(Boolean).join(" ").trim();
  const containerClasses = variant === "therapy" ? THERAPY_BG : DEFAULT_BG;
  const gradientClasses = variant === "therapy" ? THERAPY_GRADIENT : DEFAULT_GRADIENT;
  const headerVariant = variant === "therapy" ? "dark" : "light";

  return (
    <div className={containerClasses}>
      <div className={gradientClasses} />
      <SiteHeader variant={headerVariant} />
      <main className={mainClasses}>{children}</main>
      <SiteFooter />
    </div>
  );
}
