/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      colors: {
        primary: {
          1: "#F7EFE5",
          2: "#A6B491",
        },
        secondary: {
          1: "#D97941",
          2: "#B26136",
        },
        textColors: {
          1: "#333333",
          2: "#4B5548",
        },
        highlight: {
          1: "#F2C94C",
        },
        backgroundColors: {
          1: "#ffffff",
          2: "#E8E8E8",
        },
      },
  
  
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        dancingScript: ["Dancing-script", "script"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage:{
        'heroImg': "url('/src/assets/imgs/Hero img.png')"
      },
      fontSize: {
        mainHeading: "72px",
        heading: "64px",
        paragraph: "20px",
        button: "20px",
        nav: "26px",
        mobileMainHeading: "62px",
        mobileHeading: "26px",
        mobileParagraph: "16px",
      },
    },
  },
    plugins: [],
};
