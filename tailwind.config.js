/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}",
    "./dist/views/*.{html,js}",
    "./dist/views/Information/*{html,js}",
    "./dist/views/Login-Register-view/*{html,js}",
    "./dist/views/Main-View/*{html,js}",
    "./dist/views/Statistic-view/*{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

