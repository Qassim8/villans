const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'ping': 'ping 1s 5',
      },
      keyframes:{
        ping : {
          '0%' : {
    opacity: 0.8
}
        }
      }
    },
  },
  plugins: [],
};
