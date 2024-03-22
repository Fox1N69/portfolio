/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      accent: "#3D56F7",
    },
    fontSize: {
      "2xl": ["25px", "1"],
      "3": ["30px", '1'],
      "7xl": ["70px", "1"],
    },
    gap: {
      7: "77px",
      11: "110px",
    },
    fontFamily: {
      "uni": "Uni-Neue", 
    },
  },
  plugins: [],
};
