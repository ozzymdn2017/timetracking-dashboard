module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
        }
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'card-accent': 'var(--color-card-accent)',
          'card-accent-hover': 'var(--color-card-accent-hover)',
          'card-work': 'var(--color-card-work)',
          'card-play': 'var(--color-card-play)',
          'card-study': 'var(--color-card-study)',
          'card-exercise': 'var(--color-card-exercise)',
          'card-social': 'var(--color-card-social)',
          'card-selfcare': 'var(--color-card-selfcare)',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
