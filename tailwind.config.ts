import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-90%)" },
        },
      },
      boxShadow: {
        informativePrimaryBtn: [
          "0px 2px 4px 0px #007BFF30",
          "0px 7px 7px 0px #007BFF2B",
          "0px 16px 10px 0px #007BFF1A",
          "0px 28px 11px 0px #007BFF08",
          "0px 44px 12px 0px #007BFF00",
        ].join(", "),
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondaryText: "#0A0A0AB2",
        inputBg: "#0A0A0A0A",
        dark: "#1D1D1D",
        checkedRadio: "#0A0A0A",
        borderColor: "#EBEBEB",
        textPrimary: "#171717",
        textSecondary: "#303030A3",
        grayBg: "#F9F9F9",
        borderGray: "#30303033",
        textTeritary: "#303030",
        footerBg: "#202020",
        textBrand: "#4338CA",
        bgPrimary: "#131313",
        headerBorderB: "#0A0A0A12",
        primaryGreen: "#3A9A16",
        secondaryGreen: "#ECFBCB",
        ghostBorder: "#ECFBCB",
        informativePrimary: "#1487FA",
        heroBg: "#F4F9FF",
        primaryBlue: "#1380ED",
        footerBlue: "#161F53",
        invertedSecondary: "#FFFFFFA3",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
