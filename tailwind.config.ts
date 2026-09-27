import type { Config } from "tailwindcss";

// Design intent (fill in once UI direction is locked):
// Second Self should feel calm and reflective, not alarming or "AI-flashy" —
// the intervention moment is the emotional centerpiece of the product and
// should read as a quiet, credible mirror, not a popup/alert.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // TODO: define a restrained palette + type scale once visual direction is set.
    },
  },
  plugins: [],
};

export default config;
