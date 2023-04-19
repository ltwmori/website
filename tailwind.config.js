module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      fontFamily: {
        nagelRegular: ['Nagel Regular', 'sans-serif'],
        spileCompressed: ['Spile Compressed', 'sans-serif']
      }
    },
    colors: {
      background: '#f1f1f1',
      black: '#000000',
      white: '#ffffff',
      footerGray: '#f7f7f7',
      grey1: '#a7a7a7',
      blue: '#1e90ff',
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
}
