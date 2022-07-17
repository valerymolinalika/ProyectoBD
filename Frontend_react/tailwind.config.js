/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#EA1F01",

          "secondary": "#FFFF",

          "accent": "#1FB2A6",

          "neutral": "#191D24",

          "base-100": "#FFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#6b0000",
        },
      },
    ],
  },
}
