module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D6AD60',
        dark: "#090909",
        html: "#e34c26",
        git: "#f14e32",
        python: '#3776AB',
        screens: {
          'xs': '320px', // Custom breakpoint for 320px screens
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [],
}
