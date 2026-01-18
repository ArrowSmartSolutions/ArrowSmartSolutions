/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '0.875rem',
        sm: '1.025rem',
        base: '1.125rem',
        lg: '1.375rem',
        xl: '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.25rem',
        '4xl': '2.875rem',
        '5xl': '3.5rem',
      },
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

