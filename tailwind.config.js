/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ZYNCO Brand Colors (from logo)
        // Near Black - Dominant color for major sections, footer
        dark: {
          DEFAULT: '#1A1A1A',
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#BDBDBD',
          300: '#9E9E9E',
          400: '#757575',
          500: '#616161',
          600: '#424242',
          700: '#303030',
          800: '#1A1A1A',
          900: '#0D0D0D',
        },
        // Gold - Highlight color for CTAs, main headings
        gold: {
          50: '#FFF9E6',
          100: '#FFEDB3',
          200: '#FFE180',
          300: '#FFD54D',
          400: '#FFC91A',
          500: '#E6B800',  // Main gold
          600: '#B39200',
          700: '#806C00',
          800: '#4D4100',
          900: '#1A1600',
        },
        // Silver - Accent for secondary info, borders, dividers
        silver: {
          50: '#FAFAFA',
          100: '#F0F0F0',
          200: '#E0E0E0',
          300: '#CCCCCC',
          400: '#A0A0A0',
          500: '#808080',  // Main silver
          600: '#606060',
          700: '#404040',
          800: '#202020',
          900: '#101010',
        },
      },
    },
  },
  plugins: [],
};
