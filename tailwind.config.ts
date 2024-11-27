import type { Config } from "tailwindcss";
import tailwindcssTextShadow from "tailwindcss-textshadow";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    tailwindcssTextShadow, // Menambahkan plugin text-shadow
  ],
} satisfies Config;
