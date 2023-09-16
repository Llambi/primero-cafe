const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

module.exports = withMT({
    content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
    theme: {
        extend: {},
    },
    plugins: [],
});
