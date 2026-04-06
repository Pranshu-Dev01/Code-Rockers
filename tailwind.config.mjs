/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E293B', // Midnight Blue
          dark: '#0F172A', // Deep Slate
        },
        accent: {
          DEFAULT: '#10B981', // Emerald
          light: '#34D399', // Teal
        },
        background: '#F8FAFC',
        text: '#0F172A',
        success: '#D1FAE5',
        warning: '#FEF3C7',
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '24px',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #10B981 0%, #064E3B 100%)',
      },
    },
  },
  plugins: [],
}
