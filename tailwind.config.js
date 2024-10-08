const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      flexGrow: {
        2: "2", // Add flex-grow 2
      },
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
