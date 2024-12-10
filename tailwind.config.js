// tailwind.config.js

module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D3B66',    
        secondary: '#FAF3DD',  
        accent: '#F4D35E',     
        highlight: '#EE964B',  
        neutral: '#F2F4F3',    
        success: '#7CB518',    
        warning: '#C72C41',    
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
        serif: ['Roboto Slab', 'serif'], 
      },
    },
  },
  plugins: [],
};
