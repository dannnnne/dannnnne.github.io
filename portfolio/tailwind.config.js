export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bmjua: ['BMJUA', 'sans-serif'], // ✅ 커스텀 폰트 등록
      },
    },
  },
  plugins: [],
};
