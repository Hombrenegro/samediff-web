/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: [
        "Roboto",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
        "pixelmix",
      ],
      archivo: ["archivo-black", "sans-serif"],
      "space-mono": ["space-mono", "monospace"],
      "space-grotesk": ["space-grotesk", "monospace"],
    },
    extend: {
      backgroundImage: {
        example: "url('../assets/dots.webp')",
      },
      colors: {
        "sd-black": "#0d1212",
        "sd-yellow": "#c9fc00",
        "sd-gray": "#cbcbcb",
      },
    },
  },
  plugins: [],
};
