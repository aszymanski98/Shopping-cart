/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                'card': '200px',
                'nav': '64px',
                'cart-width': '125px',
                'cart-height': '75px',
            }
        },
    },
    plugins: [],
}
