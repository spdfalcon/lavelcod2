/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "dana-font": ["dana-font"],
      "ray-font": ["ray-font"],
    },
    extend: {
      colors: {
        "main-blue": "#3431CE",
        "footer-blue": "#3500AA",
        "main-text-dark": "#292D32",
        "main-text-gray": "#474C52",
        "text-gray": "#595757",
        "main-text-white": "#fff",
        "main-bg-input": "#F9F9F9",
        "bg-btn": "#F9F9F9",
      },
    },
  },
  plugins: [],
}

