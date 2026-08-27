/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
       primary: "#1e438a",
       secondary: "#ed801c",
       light: "#f7f7f7",
       dark: "#333333",
       dark2: "#999999" 
      },
      container: {
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem",
        }
      }
    },
  },
  plugins: [],
}

