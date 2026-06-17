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
        primary: "#FAF9F6", // Warm Alabaster Off-White
        secondary: {
          DEFAULT: "#F5F3EF", // Warm Sand / Stone
          light: "#EBE8E2", // Shaded warm stone
        },
        gold: {
          light: "#E2CBB0", // Pale Champagne
          DEFAULT: "#C8A97E", // Muted Champagne Gold
          dark: "#A08156", // Antique Bronze
        },
        sage: {
          light: "#5E7060", // Soft Sage
          DEFAULT: "#3D4A3E", // Deep Sage Green
          dark: "#2E3A2F", // Dark Forest Sage
        },
        charcoal: "#1C1C1C", // High-contrast headers
        cream: "#4A4A4A", // Mapped to body text for styling compatibility
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
