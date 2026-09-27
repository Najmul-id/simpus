/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0879E5',    //[cite: 1]
        'dark-navy': '#102E68',       //[cite: 1]
        'light-blue': '#EAF4FF',      //[cite: 1]
        'bg-color': '#FFFFFF',        //[cite: 1]
        'text-utama': '#102E68',      //[cite: 1]
        'text-sekunder': '#60759A',   //[cite: 1]
        'accent': '#1098A6',          //[cite: 1]
      }
    },
  },
  plugins: [],
}