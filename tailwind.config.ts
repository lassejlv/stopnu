import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        dark: "#1a202c",
        darker: "#171923",
      },
    },
  },
  plugins: [],
};

export default config;
