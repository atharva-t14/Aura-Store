/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: "#F7A620",
                    dark: "#C07C32",
                },
            },
        },
    },
    plugins: [],
};
