import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        paper: "var(--color-bg)",
        accent: "var(--color-accent)",
        accent2: "var(--color-accent-2)",
        muted: "var(--color-muted)",
        card: "var(--color-card-bg)",
        cardBorder: "var(--color-card-border)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "760px",
      },
    },
  },
  plugins: [],
};
export default config;
