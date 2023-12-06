/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainGray: "#f8fbfa",
        mainButton: "#00cb84",
        mainLightGreen: "#c8f0e2",
        textGreen: "#6ee0b8",
      },
    },
  },
  plugins: [],
};
