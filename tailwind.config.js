/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-gray-1": "#1e1f22",
        "main-gray-2": "#232428",
        "main-gray-3": "#2A2D31",
        "main-gray-4": "#303338",
        // --
        "main-blue": "#5764F2",
        // --
        "main-white-1": "#f2f3f5",
        "main-white-2": "#dbdee1",
        "main-white-3": "#939BA4",
        // --
        "item-selected": "#3F4248",
        "item-hover": "#35373C",
      },
    },
  },
  plugins: [],
};
