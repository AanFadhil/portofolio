module.exports = {
  purge: [
    './pages/**/*.js', 
    './pages/*.js', 
    './components/**/*.js', 
    './components/*.js', 
    './hoc/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      transform: ['group-hover'],
      scale: ['group-hover'],
      translate: ['group-hover']
    }
  },
  plugins: [],
}
