/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    colors: {
      bg: "#0C0A3E",
      darkBlue:"#1B1A4F",
      turquiose: "#19647E",
      pink: "#FBB7C0",
      bone: "#DAD2BC",

    },
  },
  plugins: [],
};
