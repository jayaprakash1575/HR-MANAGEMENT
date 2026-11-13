/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F4F3FF',
          100: '#EBE9FE',
          200: '#D9D6FE',
          300: '#BDB4FE',
          400: '#9B8AFB',
          500: '#7A5AF8',
          600: '#6938EF', // Main purple
          700: '#5925DC', // Dark purple
          800: '#4A1FB8',
          900: '#3E1C96',
        },
        ink: {
          DEFAULT: '#101828',
          muted: '#667085',
          light: '#98A2B3',
        },
        surface: {
          DEFAULT: '#F9FAFB',
          gray: '#F1F3F8',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0px 2px 8px rgba(16, 24, 40, 0.05), 0px 1px 2px rgba(16, 24, 40, 0.04)',
        'elevated': '0px 12px 28px -4px rgba(16, 24, 40, 0.12), 0px 4px 10px -2px rgba(16, 24, 40, 0.06)',
        'purple-glow': '0px 8px 24px -4px rgba(105, 56, 239, 0.35)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      }
    },
  },
  plugins: [],
}

