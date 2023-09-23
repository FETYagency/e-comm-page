export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    screens: {
      md: "1000px",
    },
    extend: {
      spacing: {
        h_gap: "16px",
        h_gap_md: "56.5px",
        navbar_p: "25px",
        navbar_links_gap: "25px",
      },
      width: {
        navbar: "250px",
      },
    },
  },
  plugins: [],
};
