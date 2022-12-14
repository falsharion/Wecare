/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontSize: {
      'tiny' : '1.5rem',
      'tinies': '1.875rem',
      'larges': '13vw',
      'largee': '10vw',
      'inbet': '4vw',
      'midd': '5vw',
      'seventy': '70%', 
      'bigger': '11vw',
      'mids' : '10vw',
      'halfves': '1.28rem',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88% 59%)',
        black: '#000000',
        grey: '#696c74',
        redd: '#3c1704',
        darkks: '#6307018f',
        burntred: '#f7584b',
        pinki: 'e9b7cd',

      },
      height:{
        '50h': '50vh'
      },
      width:{
        '50w': '46.5vh'
      },
      animation: {
        steady: "steady 4s infinite",
        steadyr: "steadyr 9s infinite",
        steadyx: "steadyx 9s infinite",
        steadyl: "steadyl 9s infinite",
      },
      keyframes: {
        steady: {
          "0%" : {
            transform: "translate(0px, 0px) scale(2.5)"
          },
          "33%" : {
            transform: "translate(30px, -50px) scale(1.9)"
          },
          "66%" : {
            transform: "translate(-20px, 20px) scale(2.9)"
          },
          "100%" : {
            transform: "translate(0px, 0px) scale(2.5)"
          },
        },
        steadyr: {
          "0%" : {
            transform: "translate(0px, 0px) scale(2.7)"
          },
          "33%" : {
            transform: "translate(90px, -30px) scale(1.7)"
          },
          "66%" : {
            transform: "translate(20px, -60px) scale(2.5)"
          },
          "100%" : {
            transform: "translate(0px, 0px) scale(2.7)"
          },
        },
        steadyx: {
          "0%" : {
            transform: "translate(0px, 0px) scale(2.5)"
          },
          "33%" : {
            transform: "translate(130px, -30px) scale(1.1)"
          },
          "66%" : {
            transform: "translate(40px, -90px) scale(1.8)"
          },
          "100%" : {
            transform: "translate(0px, 0px) scale(2.5)"
          },
        },
        steadyl: {
          "0%" : {
            transform: "translate(0px, 0px) scale(2.5)"
          },
          "33%" : {
            transform: "translate(30px, -50px) scale(1.9)"
          },
          "66%" : {
            transform: "translate(-20px, 20px) scale(2.9)"
          },
          "100%" : {
            transform: "translate(0px, 0px) scale(2.5)"
          },
        }
      }
    },
  },
  plugins: [

  ],
}
