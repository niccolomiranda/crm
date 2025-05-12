import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#1D1C1C",
          dark: "#273546",
          card: "#F3F2F2",
          navbar: "#FFFFFF",
          sidebar: "#1D1C1C",
          input: "rgba(229,229,229,0.9)",
        },
        primary: {
          DEFAULT: "#5D73C5",
        },
        accent: {
          slack: "#E01E5A",
          notion: "#000000",
          figma: "#0ACF83",
          openai: "#10A37F",
          webflow: "#146EF5",
        },
        text: {
          DEFAULT: "#515151",
          light: "#FFFFFF",
          muted: "rgba(81,81,81,0.5)",
        },
        border: {
          DEFAULT: "rgba(0,0,0,0.07)",
          input: "#E2E2E2",
        },
        'dashboard-gradient-start': '#1D1C1C',
        'dashboard-gradient-end': '#273546',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        guise: ["HK Guise", "sans-serif"],
        frac: ["FRAC", "sans-serif"],
      },
      boxShadow: {
        card: "0px 2.64px 3px 0px rgba(0,0,0,0.05)",
        cardLarge: "0px 5px 15px 0px rgba(86, 122, 251, 0.05)",
      },
      borderRadius: {
        card: "18.5px",
        input: "10px",
      },
      letterSpacing: {
        tight: "-0.02em",
        wider: "0.08em",
      },
    },
  },
  plugins: [],
};
export default config; 