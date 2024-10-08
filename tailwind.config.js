const flowbite = require("flowbite-react/tailwind")
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      flexGrow: {
        2: "2", // Add flex-grow 2
      },
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"], // Add Roboto font family
        poppins: ['"Poppins"', "sans-serif"], // Add Poppins font family
      },
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
}
