import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const rotateY = plugin(function ({ addUtilities }: any) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".rotate-y-0": {
      transform: "rotateY(0deg)",
    },
  });
});

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-cover": "url('../public/assets/images/bg-cover.png')",
        "front-cover": "url('../public/assets/images/card-front.svg')",
      },
      width: {
        "150": "150px",
        "900": "900px",
        "170": "170px",
        "60": "60px",
      },
      height: {
        "150": "150px",
        "40": "40px",
        "60": "60px",
      },
    },
  },
  plugins: [rotateY],
};
export default config;
