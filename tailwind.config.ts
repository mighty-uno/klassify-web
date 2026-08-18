import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14162b",
        night: "#0d0e1a",
        primary: {
          DEFAULT: "#4a3aff",
          dark: "#3b2ee0",
          light: "#8e84ff"
        },
        accent: {
          DEFAULT: "#ff5c38",
          light: "#ff7a5c"
        },
        canvas: "#f7f7fa",
        line: "#e3e3ea",
        muted: "#5e6377",
        "muted-2": "#8a8fa3",
        "muted-3": "#b4b7c8",
        success: "#178a4f"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Arial", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      borderRadius: {
        "4xl": "2rem"
      },
      boxShadow: {
        card: "0 1px 2px rgba(20, 22, 43, 0.04), 0 8px 24px rgba(20, 22, 43, 0.06)",
        lift: "0 2px 4px rgba(20, 22, 43, 0.05), 0 20px 44px rgba(20, 22, 43, 0.12)",
        hero: "0 32px 80px rgba(0, 0, 0, 0.24)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        marquee: "marquee 36s linear infinite",
        float: "float 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
