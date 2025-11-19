// tailwind.config.js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkbg: "#000000",     // pure black
        darkcard: "#0a0a0a",   // slightly lifted black
        darktext: "#ffffff",   // white text
      }
    }
  },
  plugins: [],
};
