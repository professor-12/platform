/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
          primary: "#818cf8",
          primaryContent: "#FFFFFF",
          accent: "#50E3C2",
          accentContent: "#FFFFFF",
          neutral: "#121212",
          neutralContent: "#E0E0E0",
          base100: "#292929",
          base200: "#222222",
          base300: "#1c1c1c",
          baseContent: '#CFCFCF',
          baseContentSecondary: '#ACACAC',
          info: "#3498DB",
          infoContent: "#ECF0F1",
          success: "#27AE60",
          successContent: "#FFFFFF",
          warning: "#F39C12",
          warningContent: "#FFFFFF",
          error: "#E74C3C",
          errorContent: "#FFFFFF",
          light: "#FFFFFF",
    }
  },
},
plugins: [
  require('daisyui')
]
}
