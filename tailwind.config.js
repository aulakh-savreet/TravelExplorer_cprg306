module.exports = {
  darkMode: 'class', // Enables dark mode
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D3B66',    // Deep Blue for trust and adventure
        secondary: '#FAF3DD',  // Warm Light Cream for balance
        accent: '#F4D35E',     // Bright Yellow for energy and excitement
        highlight: '#EE964B',  // Warm Orange for exploration and vibrance
        neutral: '#F2F4F3',    // Soft Gray-White for clean backgrounds
        dark: '#2E2F2F',       // Charcoal Gray for dark mode themes
        success: '#7CB518',    // Vibrant Green for positivity
        warning: '#C72C41',    // Deep Red for alerts or warnings
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Modern and clean font
        serif: ['Roboto Slab', 'serif'], // Classic and bold
      },
    },
  },
  plugins: [],
};
