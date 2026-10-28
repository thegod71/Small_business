/** Design tokens live here. Change colours/fonts once, the whole site follows. */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        leaf: { 50: '#EEF5F0', 100: '#D9EADF', 500: '#2F7D55', 600: '#25663F', 700: '#1D5233', 900: '#12301F' },
        marigold: { 100: '#FFF1CC', 400: '#F7B500', 500: '#F29F05', 600: '#D98300' },
        rani: { 50: '#FDEAF1', 100: '#FAD0E0', 500: '#C2185B', 600: '#A3134B' },
        ivory: '#FAFAF6',
        ink: '#1D2A24',
        muted: '#5B6B63',
        line: '#E4E8E2',
      },
      fontFamily: {
        display: ['Fraunces', '"Noto Serif Devanagari"', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
