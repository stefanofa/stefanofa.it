import type { Config } from "tailwindcss";

const withOpacity = (variableName: string) => `rgb(var(${variableName}) / <alpha-value>)`;

const config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: withOpacity("--primary"),
        "primary-content": withOpacity("--primary-content"),
        "base-1": withOpacity("--base-1"),
        "base-content": withOpacity("--base-content"),
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
