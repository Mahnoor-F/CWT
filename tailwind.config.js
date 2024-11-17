/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      screens: {
        'sm': {'min':'400px','max':'1024px'},
      },
      boxShadow: {
        'white': '0 4px 6px rgba(255, 255, 255, 0.5)',
      },
      borderWidth:{
        '10': '10px',
      },
      scale:{
        '175':'1.75',
        '185':'1.85',
        '195':'1.95',
      },
      
    },
      
      
    },
    plugins: [],
  }
  

