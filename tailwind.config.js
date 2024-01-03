/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "close-menu": "url('../../public/menu.svg')",
        "hero": "url('../../public/Design.svg')"
      },
      colors: {
        "nav": '#000',
      },
    },
  },
  plugins: [],
}
