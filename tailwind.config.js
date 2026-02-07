/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        'brand': {
          DEFAULT: '#3A82F9',
          hover: '#2B6FE8',
          light: '#E8F2FF',
        },
        'text-gray': '#A2A3A5',
      },
      fontFamily: {
        'pingfang': ['PingFang SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

