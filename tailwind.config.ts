// import type { Config } from "tailwindcss";

// const colors = require("tailwindcss/colors");
// const {
//   default: flattenColorPalette,
//  } = require("tailwindcss/lib/util/flattenColorPalette");


// const config: Config = {
//   content: [
//     "./src/pages/*/.{js,ts,jsx,tsx,mdx}",
//     "./src/components/*/.{js,ts,jsx,tsx,mdx}",
//     "./src/app/*/.{js,ts,jsx,tsx,mdx}",
//   ],
//   darkMode: 'class',
//   theme: {
//     animation: {
//       shimmer: "shimmer 2s linear infinite",
//     },
//     keyframes: {
//       shimmer: {
//         from: {
//           backgroundPosition: "0 0",
//         },
//         to: {
//           backgroundPosition: "-200% 0",
//         },
//       },
//     },
    
      
//       },
//   plugins: [],
//     };
// // Plugin to add each Tailwind color as a global CSS variable

// export default config;
/// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#3F72AF',
        custom:'#112D4E', // Define your custom color here
      },
    },
  },
  plugins: [ addVariablesForColors,],
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}