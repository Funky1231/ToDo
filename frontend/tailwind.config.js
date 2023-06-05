/** @type {import('tailwindcss').Config} */

import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'color-navbar': 'var(--color-navbar)',
      },
    },
  },
  plugins: [ flowbitePlugin ],
};
