import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#800020", // Borgonha
          dark: "#600018",
          light: "#955251", // Marsala
          xlight: "#f5e6e8",
        },
        accent: {
          DEFAULT: "#F4D7C5", // Laranja Pastel Queimado (Terracotta suave)
          dark: "#EBCAB3",
        },
        brand: {
          dark: "#2a000a",
          mid: "#4a101a",
          gray: "#333333", // Cinza grafite escuro solicitado
          light: "#FDF5F0", // Fundo Terracotta bem leve
          terracotta: "#F4D7C5",
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0d1b2a 0%, #164d6b 50%, #20668b 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
