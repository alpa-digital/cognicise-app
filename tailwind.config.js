/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#00C29D',        // --main-yellow y --main-salmon en el CSS original
        secondary: '#181E4B',      // --main-navy_blue 
        accent: '#5E6282',         // --main-light_blue
        'light-grey': '#F9F7FE',   // --light-grey
        'light-purple': '#F9F7FE', // --light-purple
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],  // Changed from poppins
        figtree: ['Figtree', 'serif'],       // Changed from volkhov
      },
      borderRadius: {
        DEFAULT: '16px',           // --border-radius
        'large': '20px',           // --border-radius-big
      },
      boxShadow: {
        'custom': '0px 0px 30px 8px rgba(0, 0, 0, 0.060)', // --box-shadow
      },
      transitionDuration: {
        'short': '0.2s',  // --animation-duration-short
        'long': '0.5s',   // --animation-duration-long
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(.34, 0, 0, 1)', // --easing
      },
      padding: {
        'big': '10vw',    // --padding-big
        'small': '2vw',   // --padding-small
      },
      fontSize: {
        'subtitle': '1.2rem',     // --text-subtitle-size
        'p': '0.8rem',            // --font-p-size
        'subtitles': '1rem',      // --font-subtitles-size
      },
      fontWeight: {
        'p': '400',               // --font-p-weight
        'subtitles': '600',       // --font-subtitles-weight 
        'titles': '700',          // --font-titles-weight
      },
    },
  },
  plugins: [],
}