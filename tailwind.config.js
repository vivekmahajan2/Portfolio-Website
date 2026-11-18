/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: '#0B1120',
          sidebar: '#050B14',
          card: '#111827',
          cardHover: '#172033',
          cardBorder: '#1F293D',
          accent: '#00A6D6',
          accentHover: '#0090BB',
          accentMuted: 'rgba(0, 166, 214, 0.15)',
          text: '#FFFFFF',
          secondary: '#9CA3AF',
          muted: '#6B7280',
          darkBlue: '#070E1A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

