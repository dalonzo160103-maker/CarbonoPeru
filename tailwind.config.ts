import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surface hierarchy — TGR Carbon palette
        surface: "#131313",
        "surface-low": "#1C1B1B",
        "surface-lowest": "#0E0E0E",
        "surface-high": "#2A2A2A",
        "surface-highest": "#353534",
        "surface-bright": "#3C3B3B",
        // Racing Red — primary
        primary: "#FFB3AF",
        "primary-container": "#E4002B",
        "on-primary": "#FFFFFF",
        "primary-dark": "#930018",
        // Neutral text
        "on-surface": "#E8E6E3",
        "on-surface-variant": "#9E9C99",
        outline: "#5C5A57",
        "outline-variant": "#3A3937",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      letterSpacing: {
        telemetry: "0.1em",
        display: "-0.02em",
      },
      borderRadius: {
        none: "0px",
        DEFAULT: "0px",
      },
      backdropBlur: {
        glass: "20px",
      },
      boxShadow: {
        "red-glow": "0 0 64px 0 rgba(228,0,43,0.05)",
        "red-focus": "0 2px 12px 0 rgba(228,0,43,0.4)",
        lift: "0 4px 0 0 #0E0E0E",
      },
      keyframes: {
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-in": "slide-in 0.4s ease-in forwards",
        "fade-up": "fade-up 0.5s ease-in forwards",
      },
    },
  },
  plugins: [],
};

export default config;
