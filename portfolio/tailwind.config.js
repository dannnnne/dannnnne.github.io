export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bmjua: ['BMJUA', 'sans-serif'], // ✅ 커스텀 폰트 등록
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
