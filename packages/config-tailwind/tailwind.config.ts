import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #ff9500 0deg, #0040ff 180deg, #0040ff 360deg)",
      },
    },
  },
  plugins: [],
};
export default config;

// #ff9500
// #0040ff