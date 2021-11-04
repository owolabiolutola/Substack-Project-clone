module.exports = {
  mode:[],
  purge: [
    './docs/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
      'orange': {
        '50': '#fff7f4', 
        '100': '#fff0e8', 
        '200': '#ffd9c6', 
        '300': '#ffc2a3', 
        '400': '#ff955e', 
        '500': '#FF6719', 
        '600': '#e65d17', 
        '700': '#bf4d13', 
        '800': '#993e0f', 
       '900': '#7d320c',
      
  
          "brown": {
            "50": "#6c584e",
            "100": "#624e44",
            "200": "#58443a",
            "300": "#4e3a30",
            "400": "#443026",
            "500": "#3a261c",
            "600": "#301c12",
            "700": "#261208",
            "800": "#1c0800",
            "900": "#120000"
          },
          
              "blue": {
                "50": "#81deff",
                "100": "#77d4ff",
                "200": "#6dcaff",
                "300": "#63c0ff",
                "400": "#59b6f8",
                "500": "#4facee",
                "600": "#45a2e4",
                "700": "#3b98da",
                "800": "#318ed0",
                "900": "#2784c6"
              },
          
      
       fontFamily: {
      
        'Poppins': 'Poppins',}
      }, 
    }
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
