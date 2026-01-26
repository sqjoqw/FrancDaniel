import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-newsreader)', 'serif'],
      },
      colors: {
        gray: {
          50: '#fbfbfd', // Apple background
          100: '#f5f5f7',
          900: '#1d1d1f', // Apple text black
        },
        blue: {
          600: '#0071e3', // Apple blue
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Ensure you install this: npm i @tailwindcss/typography
  ],
};
export default config;