export default {
    content: ["./src/**/*.{astro,js,ts,jsx,tsx,html}"],
    theme: {
      extend: {
        fontFamily: {
          shrikhand: ["Shrikhand", "cursive"],
          roboto: ["Roboto", "sans-serif"],
        },
        colors: {
            yellow: {
              DEFAULT: "#f7c948",
            },
            gray: {
              DEFAULT: "#f5f5f5",
            },
          blueLight: "#00c8e5",
          blueDark: "#00a3c2",
        },
      },
    },
    plugins: [],
  };
  