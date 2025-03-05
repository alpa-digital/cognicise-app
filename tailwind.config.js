/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: '#00C29D',
        secondary: '#181E4B',
        accent: '#5E6282',
        lightGrey: '#F9F7FE',
        lightPurple: '#F9F7FE',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '16px',
        large: '20px',
      },
      boxShadow: {
        custom: '0px 0px 30px 8px rgba(0, 0, 0, 0.060)',
      },
      transitionDuration: {
        short: '0.2s',
        long: '0.5s',
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(.34, 0, 0, 1)',
      },
      padding: {
        big: '10vw',
        small: '2vw',
      },
      fontSize: {
        subtitle: '1.2rem',
        base: '1rem',
        p: '0.8rem',
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '700',
        p: '400',
        subtitles: '600',
        titles: '700',
      },
    },
  },
  plugins: [],
};