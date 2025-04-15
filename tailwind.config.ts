import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1296px",
      },
    },
    extend: {
      fontFamily: {
        noto: ["var(--font-noto-sans)"],
      },
      keyframes: {},
      animation: {},
      colors: {
        input: "#D4D4D8",
        ring: "#0F514E",
        black: {
          DEFAULT: "#18181B",
          foreground: "hsl(var(--black-foreground))",
        },
        white: {
          DEFAULT: "#FDFBF8",
          pure: "#FFFFFF",
          foreground: "hsl(var(--white-foreground))",
        },
        gray: {
          DEFAULT: "#71717A",
          100: "#F4F4F5",
          200: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-to-top-desktop":
          "linear-gradient(to top, #d6f4f0 267px, transparent 0%)",
        "gradient-to-top-mobile":
          "linear-gradient(to top, #d6f4f0 363px, transparent 0%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
