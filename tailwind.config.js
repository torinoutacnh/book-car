/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: { colors: { main: "#0060C4", rgbaBlack: "rgba(0, 0, 0, 0.6)" } },
    },
    plugins: [],
    mode: "jit",
};
