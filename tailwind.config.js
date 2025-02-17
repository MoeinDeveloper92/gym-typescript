/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Colors configuration
      //we add our color pallete here
      colors: {
        "gray-20": "#faf4eb",
        "gray-50": "#efe6e6",
        "gray-100": "#dfcccc",
        "gray-500": "#5e0000",
        "primary-100": "#ffe1e0",
        "priamry-300": "#ffa6a3",
        "primary-500": "#ff6b66",
        "secondary-400": "#ffcd58",
        "secondary-500": "#ffc132"
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg,#ff616a 0%, #ffc837 100%)",
        "mobile-home": "url('./assets/HomePageGraphics.png')"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        evolvtext: "url('./assets/EvolveText.ong')",
        abstractWaves: "url('./assets/AbstractWaves.png')",
        sparkels: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}


//Whenevr you have ad esign or a mock up you should stick to 3 or more colors that are the main colors
//then you should stick to the shade of colors....