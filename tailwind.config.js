/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B'
        }
      },
      boxShadow: {
        glow: '0 20px 80px rgba(16, 185, 129, 0.18)'
      },
      backgroundImage: {
        'emerald-radial': 'radial-gradient(circle at top left, rgba(16, 185, 129, 0.18), transparent 40%)',
        'emerald-glow': 'radial-gradient(circle at top right, rgba(16, 185, 129, 0.16), transparent 35%)'
      }
    }
  },
  plugins: []
}
