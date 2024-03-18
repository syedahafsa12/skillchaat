/// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#3F72AF', // Define your custom color here
        customDarkblue:'#2F75A2',
        custom:'#379EBB',
        dark:'#274682',
        orange:'#FE7B07'
      },
    },
  },
  plugins: [],
};

