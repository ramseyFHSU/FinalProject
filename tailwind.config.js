import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple-dark": "#190019",
        "custom-purple": "#2B124C",
        "custom-lilac": "#522B5B",
        "custom-mauve": "#854F6C",
        "custom-pink": "#DFB6B2",
        "custom-peach": "#FBE4D8",
      },
    },
  },
  plugins: [],
});
