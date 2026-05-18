import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: "var(--apple-bg)",
          section: "var(--apple-section)",
          ink: "var(--apple-ink)",
          muted: "var(--apple-muted)",
          subtle: "var(--apple-subtle)",
          border: "var(--apple-border)",
          line: "var(--apple-line)",
          card: "var(--apple-card)",
          header: "var(--apple-header)",
          footer: "var(--apple-footer)",
          blue: "var(--apple-blue)",
          "blue-hover": "var(--apple-blue-hover)",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          '"SF Pro Display"',
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        apple: "0 2px 8px rgba(0, 0, 0, 0.04), 0 12px 40px rgba(0, 0, 0, 0.06)",
        "apple-sm": "var(--apple-shadow-sm)",
      },
    },
  },
  plugins: [],
};

export default config;
