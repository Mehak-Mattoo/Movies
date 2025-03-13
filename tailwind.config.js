/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    colors: {
      bg: "#504746",
      midLightBrown: "#B89685",
      lightBrown: "#BFADA3",
      pink: "#FBB7C0",
      magenta: "#B6244F",
      warning: "#f39c12",
    
    },
  },
  plugins: [],
};
