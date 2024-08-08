/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        "neutralSilver" : "#F5F7FA",
        "neutralDGray" : "#4D4D4D",
        "branPrimary" : "#4CAF4F",
        "neutralGray" : "#717171",
        "gray900" : "#18191f",
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [flowbite.plugin()],
}

