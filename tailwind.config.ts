import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Roboto Flex', 'serif'],
      },
      colors: {
        'mat-blue': '#2196F3',
        'mat-blue-accent': '#1E88E5',
        'mat-red': '#FF3A00',
        'mat-red-accent': '#F24E1E',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      boxShadow: {
        mat: '0 4px 4px 0 rgba(0, 0, 0, .25)',
      },
    },
  },
} satisfies Config;
