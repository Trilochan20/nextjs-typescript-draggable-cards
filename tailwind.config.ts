import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
    },
  },
  safelist: [
     'border-red-500',
    'border-blue-500',
     'border-purple-500',
    'border-green-500'
  ],
  plugins: [],
};
export default config;
