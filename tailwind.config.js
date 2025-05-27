/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alivegraff: ["Alivegraff", "sans-serif"],
        graffitistreet: ["graffitistreet", "sans-serif"],
        kenygraffiti: ["kenygraffiti", "sans-serif"],
      },
    },
  },
  plugins: [],
};
