/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/**/*.{md,html,js,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}

