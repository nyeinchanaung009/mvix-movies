/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        accent1 : '#2f81f7',
        accent2 : '#21262d',
        hovercolor : '#475569',

        bg1 : '#010409',
        cardbg : '#0d1117',

        // bordercolor : '#30363d',
        bordercolor : '#404851',
        bordermute : '#262b33',
        
        textpri : '#e6edf3',
        textmute : '#c9d1d9',

        icon1 : '#7d8590',
        icon2 : '#6e7681'
      }
    },
  },
  plugins: [],
}