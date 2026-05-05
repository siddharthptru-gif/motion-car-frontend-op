/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030406",
        panel: "#080a0f",
        panelSecondary: "#0b0d12",
        accentRed: "#ff1238",
        accentBlue: "#24b7ff",
        whiteText: "#f8fafc",
        mutedText: "rgba(255,255,255,0.65)",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
