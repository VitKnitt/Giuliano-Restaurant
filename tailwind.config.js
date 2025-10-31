/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Kde Tailwind hledá třídy, aby je zahrnul do buildu
  ],
  theme: {
    extend: {
      colors: {
        one: "#000000",
        two: "#799be4ff",
        three: "#fca311",
        four: "#e5e5e5",
        five: "#ffffff",
        six: "white",
        seven: "black",
      },
      fontFamily: {
        sans: ["Cormorant Garamond", "serif"],
        body: ["Italiana", "sans-serif"],
      },
      spacing: {
        128: "32rem", // vlastní rozměry
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem", // vlastní zaoblení rohů
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 7))" },
        },
      },
      animation: {
        scroll: "scroll 40s linear infinite",
      },
    },
  },
};
