import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      colors: {
        blue: "#3B82F6",
        gray: "#64748B",
        lightGray: "#F1F5F9",
      },
      lineHeight: {
        3: "2.2rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xl: "0rem",
        },
      },
    },
  },
};
export default config;
