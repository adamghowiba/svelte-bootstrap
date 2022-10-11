/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    './src/**/*.{js,svelte,ts,tsx}',
  ],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  prefix: "tw-",
  theme: {
    extend: {},
  },
  plugins: [],
}
