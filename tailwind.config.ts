import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#1D3531',
        'green-actived': '#5D8A83',
        'green-border': '#2A4B46',
        'green-btn': '#CCEC60',
        'green-title-card': '#719D96',
      },
      maxWidth: {
        grid: '77.5rem',
        'text-hero': '66rem',
        'icons-hero': '53.4375rem',
        'mockups-hero': '59.8125rem',
        'images-cards': '82.5rem',
      },
      height: {
        'section-hero': '54.625rem',
        'images-cards': '35.1rem',
      },
      backgroundImage: {
        hero: "url('/assets/bg-hero.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
