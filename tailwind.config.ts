import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'brand-blue': '#053B50',
        'brand-blue-2': '#176B87',
        'brand-blue-3': '#64CCC5',
        'brand-white': '#EEEEEE',
        'neutral-medium': '#262626',
        'neutral-soft': '#7C7C7C',
        'neutral-ultrasoft': '#CCCCCC',
        'warning-hard': '#DD2525'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
    }
  },
  plugins: [],
}
export default config
