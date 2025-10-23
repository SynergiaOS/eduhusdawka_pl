import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["var(--font-playfair)"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.7' }],
        'lg': ['1.125rem', { lineHeight: '1.7' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        '3xl': ['1.875rem', { lineHeight: '1.4' }],
        '4xl': ['2.25rem', { lineHeight: '1.3' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // EduHus Minimalist Color Palette - Professional Design
        // Backgrounds
        "eduhus-bg-white": "#ffffff", // główne tło
        "eduhus-bg-light": "#a4efeb", // alternatywne tło sekcji - jasny cyan
        "eduhus-bg-accent": "#a4efeb", // jasny cyan akcent
        // Text
        "eduhus-text-dark": "#1a1a1a", // nagłówki
        "eduhus-text-main": "#444444", // tekst główny
        "eduhus-text-light": "#888888", // tekst jasny
        // Action Colors - Simplified to single colors
        "eduhus-accent": {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#fed102",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
          DEFAULT: "#fed102",
        }, // żółty - główny akcent
        "eduhus-secondary": "#1ebaf1", // cyan - secondary akcent
        "eduhus-tertiary": "#a4efeb", // jasny cyan
        // Icon Colors (Service-specific) - Simplified to cyan & yellow
        "eduhus-icon-johansen": "#1ebaf1", // cyan
        "eduhus-icon-neuroflow": "#1ebaf1", // cyan
        "eduhus-icon-adhd": "#fed102", // żółty
        "eduhus-icon-forbrain": "#1ebaf1", // cyan
        "eduhus-icon-autism": "#fed102", // żółty
        "eduhus-icon-hearing": "#1ebaf1", // cyan
        blue: {
          25: "#f7faff",
          50: "#f0f5ff",
          75: "#e6f0ff",
          100: "#dbeafe",
          150: "#c3dafe",
          200: "#a5b4fc",
          300: "#818cf8",
          350: "#6366f1",
          400: "#3b82f6",
          450: "#2564bc",
          500: "#1d4ed8",
          550: "#1e3a8a",
          600: "#1e40af",
          650: "#1d4ed8",
          700: "#1d3a8a",
          750: "#1e3a5f",
          800: "#1e2a5a",
          850: "#1e3a5f",
          900: "#1e293b",
          950: "#0f172a",
        },
        orange: {
          25: "#fefdf8",
          50: "#fef9f3",
          75: "#fef7ed",
          100: "#feecdc",
          150: "#fde4c1",
          200: "#fbd9a7",
          300: "#fbbf24",
          350: "#f59e0b",
          400: "#fb923c",
          450: "#f97316",
          500: "#ea580c",
          550: "#dc2626",
          600: "#fe9632",
          650: "#fe9632",
          700: "#c2410c",
          750: "#9a3412",
          800: "#7c2d12",
          850: "#431407",
          900: "#431407",
          950: "#1c0a09",
        },
        gray: {
          25: "#fcfcfc",
          50: "#fafafa",
          75: "#f7f7f7",
          100: "#f5f5f5",
          150: "#f0f0f0",
          200: "#e5e5e5",
          250: "#e8e8e8",
          300: "#d4d4d4",
          350: "#c4c4c4",
          400: "#a3a3a3",
          450: "#8a8a8a",
          500: "#737373",
          550: "#5a5a5a",
          600: "#525252",
          650: "#464646",
          700: "#404040",
          750: "#363636",
          800: "#262626",
          850: "#1f1f1f",
          900: "#171717",
          950: "#0a0a0a",
        },
        brand: {
          'blue-light': '#B5EBFB',
          'blue-medium': '#56C1E8',
          'blue-dark': '#27A7D7',
          'yellow': '#F9D14C',
          'orange': '#F0A523',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate")
  ],
} satisfies Config

export default config
