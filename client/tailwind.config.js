// tailwind.config.js
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"  // This ensures Tailwind scans all your JS/TS/JSX/TSX files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        skyBlue: '#66A3FF',
        skyHover: '#215CB5'
      },
    },
  },
  plugins: [],
}

