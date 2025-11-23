/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'red-flag': '#FF4458',
        'green-flag': '#00D68F',
        'bg-dark': '#1A1A1D',
        'card-dark': '#2D2D30',
      },
    },
  },
  plugins: [],
}
