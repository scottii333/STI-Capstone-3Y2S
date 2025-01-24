/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 1.5s infinite",
        loading: "loading 4s ease-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
        loading: {
          "0%": { width: "0%" },
          "80%": { width: "100%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};
