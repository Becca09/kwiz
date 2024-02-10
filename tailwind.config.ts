import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       
      },

      screens: {
        'sm': '300px',
       
      },
      colors: {
        primary: {
          50: '#160635',
          100: '#8034FA',
          200: '#00F0A5',
          300: '#FFA31D',
        },
        warning: {
          100: '#FFCC33',
        },
        error: {
          100: '#FF3366',
        },
        green: {
          100: '#00F0A5',
        },
      },

      fontFamily: {
        primary: ['var(--font-josefin)', 'san-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
