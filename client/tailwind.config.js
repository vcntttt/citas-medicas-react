export default {
  content: [
    "./index.html",
    "./src/**/*/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "130": "130px",
        "375": "375px",
        "500": "500px",
        "1536": "1536px",
        "80%": "80%"
      },
      maxWidth: {
        "1200": "1200px",
      },

      height: {
        "105": "105px",
        "680": "680px",
        "690": "690px",
        "722": "722px",
        "750": "750px",
        "740": "740px",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
      },

      borderRadius: {
        "20": "20px",
      },

      gap: {
        "200": "200px",
      },

      margin: {
        "17": "17px",
        "30": "30px",
        "50": "50px",
        "82": "82px",
        "153": "153px",
      },
      
      backgroundColor:{
        'onahau': {    
          "400": "#84bef9",
          "500": '#C1FFFF', 
          "600": "#55ccc9",   
        },
        "greycus":{
          "300": "#323232",
          "500": "#979696",
          "800": "#2E3238",
        },
      },

      boxShadow: {
        "custom": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}