/** @type {import('tailwindcss').Config} */
export default {
darkMode: 'class',
content: ['./index.html', './src/**/*.{ts,tsx}'],
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
},
boxShadow: {
card: '0 10px 25px rgba(0,0,0,0.08)',
},
},
},
plugins: [],
}