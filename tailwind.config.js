/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    screens: {
      sm: "540px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        "color-dark-gray": "var(--color-dark-gray)",
        "color-light-gray": "var(--color-light-gray)",
        "color-white": "var(--color-white)",
        "color-purple": "var(--color-purple)",
        error: "var(--color-red)",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
}
