module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5fafc",
          100: "#ecf4fa",
          200: "#cfe4f2",
          300: "#b2d3eb",
          400: "#78b3db",
          500: "#3e92cc",
          600: "#3883b8",
          700: "#2f6e99",
          800: "#25587a",
          900: "#1e4864",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
