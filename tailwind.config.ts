import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Söhne", ...defaultTheme.fontFamily.sans],
        "ia-writer-quattro": [
          "iA Writer Quattro",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [typography],
} satisfies Config;
