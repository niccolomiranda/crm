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
        primary: {
          DEFAULT: "#567AFB",
          light: "#C2DEFF", 
        },
        dark: {
          DEFAULT: "#0F1E54",
          muted: "rgba(15, 30, 84, 0.75)",
        },
        accent: {
          blue: "#5D73C5",
          green: "#369F34",
        },
        background: {
          light: "#FFFFFF",
          blue: "#ECF5FF",
          blueMuted: "rgba(236, 245, 255, 0.25)",
          green: "#D2FFD2",
          grayBlue: "#C6D9EE",
          lightBlue: "#FAFCFF",
        },
        text: {
          primary: "#0F1E54",
          secondary: "rgba(15, 30, 84, 0.75)",
          muted: "rgba(236, 245, 255, 0.75)",
          active: "#4B577F",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        card: "0px 5px 15px 0px rgba(86, 122, 251, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config; 