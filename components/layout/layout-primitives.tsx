import React from "react";

// Utility function to join class names
function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

// PageMain component
interface PageMainProps extends React.ComponentPropsWithoutRef<"main"> {
  className?: string;
}

const PageMain = ({ className, ...props }: PageMainProps) => (
  <main className={cn("pt-24 md:pt-28 overflow-x-clip", className)} {...props} />
);

// Container component
interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
}

const Container = ({ className, ...props }: ContainerProps) => (
  <div className={cn("mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", className)} {...props} />
);

// ContainerNarrow component
interface ContainerNarrowProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
}

const ContainerNarrow = ({ className, ...props }: ContainerNarrowProps) => (
  <div className={cn("mx-auto max-w-4xl px-4 sm:px-6 lg:px-8", className)} {...props} />
);

// Section component
interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  className?: string;
}

const Section = ({ className, ...props }: SectionProps) => (
  <section className={cn("py-12 sm:py-16 lg:py-20", className)} {...props} />
);

// SectionTight component
interface SectionTightProps extends React.ComponentPropsWithoutRef<"section"> {
  className?: string;
}

const SectionTight = ({ className, ...props }: SectionTightProps) => (
  <section className={cn("py-8 sm:py-12", className)} {...props} />
);

// Stack component
interface StackProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
}

const Stack = ({ className, ...props }: StackProps) => (
  <div className={cn("space-y-4 sm:space-y-6", className)} {...props} />
);

// StackTight component
interface StackTightProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
}

const StackTight = ({ className, ...props }: StackTightProps) => (
  <div className={cn("space-y-3 sm:space-y-4", className)} {...props} />
);

// H1 component
interface H1Props extends React.ComponentPropsWithoutRef<"h1"> {
  className?: string;
}

const H1 = ({ className, ...props }: H1Props) => (
  <h1 className={cn("text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 sm:mb-8", className)} {...props} />
);

// H2 component
interface H2Props extends React.ComponentPropsWithoutRef<"h2"> {
  className?: string;
}

const H2 = ({ className, ...props }: H2Props) => (
  <h2 className={cn("text-2xl sm:text-3xl lg:text-4xl leading-snug mb-4 sm:mb-6", className)} {...props} />
);

// H3 component
interface H3Props extends React.ComponentPropsWithoutRef<"h3"> {
  className?: string;
}

const H3 = ({ className, ...props }: H3Props) => (
  <h3 className={cn("text-xl sm:text-2xl mb-3 sm:mb-4", className)} {...props} />
);

// Divider component
interface DividerProps extends React.ComponentPropsWithoutRef<"hr"> {
  className?: string;
}

const Divider = ({ className, ...props }: DividerProps) => (
  <hr className={cn("my-12 sm:my-16 border-t border-muted/20", className)} {...props} />
);

// Figure component
interface FigureProps extends React.ComponentPropsWithoutRef<"figure"> {
  className?: string;
}

const Figure = ({ className, ...props }: FigureProps) => (
  <figure className={cn("overflow-hidden rounded-xl", className)} {...props} />
);

// Presets
const presets = {
  gridHero: "grid lg:grid-cols-2 gap-8 sm:gap-10",
  gridCards: "grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3",
  gridTwoCol: "grid gap-6 md:grid-cols-2",
  mediaBase: "w-full rounded-xl object-cover aspect-[4/3] sm:aspect-video",
  ctaBox: "mt-8 sm:mt-10 p-6 sm:p-8 rounded-lg text-center",
  cardBase: "bg-white p-6 sm:p-8 rounded-xl shadow-md",
  cardEmphasisTeal: "bg-white p-6 sm:p-8 rounded-xl shadow-md border-l-4 border-eduhus-secondary",
  divider: "my-12 sm:my-16 border-t border-muted/20",
  figure: "overflow-hidden rounded-xl",
};

// Exports
export {
  PageMain,
  Container,
  ContainerNarrow,
  Section,
  SectionTight,
  Stack,
  StackTight,
  H1,
  H2,
  H3,
  Divider,
  Figure,
  presets,
};