/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        'primary-button': '#C9F270',
        secondary: '#E8F0FE',
        link: '#3365e6',
        'create-button': '#4774e9',
        'primary-text': '#0e0e0e',
        primary: '#FAFAFA',
        'gray-hover': '#f2f2f2',
        'gray-border': '#dadada',
        'secondary-text': '#666',
        'gray-text': '#a6a6a6',
        'secondary-button': '#DAF996',
        'text-red': '#cc3341',
        'light-gray': '#DADADA',
        'light-red': '#FFF9FA',
        dot: '#4bcdbc',
        brown: '#949494',
        'light-purple': '#F0e6FF',
        'dark-green': '#001E1E',
      },
      backgroundImage: {
        'signup-banner': "url('../assets/signupbanner.png')",
        'signin-banner': "url('../assets/loginbanner.png')",
      },
      transitionTimingFunction: {
        'in-out-expo': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      backgroundPosition: {
        'bottom-left-signup': 'bottom 35% left 50% ',
      },
      screens: {
        'mobile-md': '440px',
        'mobile-lg': '512px',
        'mobile-xl': '568px',
        'tablet-lg': '880px',
        xs: '440px',
        xw: '300px',
        xr: '580px',
        xv: '520px',
        xh: '390px',
        'small-lg': '992px',
      },
      boxShadow: {
        nav: '0 2px 8px rgba(0, 0, 0, 0.16)',
        card: '0 2px 10px rgba(45, 42, 61, 0.1)',
        button: '0 1px 4px rgba(0, 0, 0, 0.16)',
        search: '0 1px 8px rgba(0, 0, 0, 0.16)',
        onboard: '0 2px 32px rgba(0, 0, 0, 0.08)',
        comment: '0px 0px 12px rgba(0, 0, 0, 0.16)',
      },
      gridTemplateColumns: {
        '1/2': '1.5fr 1fr',
        auto: 'auto 1fr',
      },

      boxShadow: {
        nav: '0 2px 8px rgba(0, 0, 0, 0.16)',
        card: '0 2px 10px rgba(45, 42, 61, 0.1)',
        field: '0 0 0 1px #0e0e0e',
      },

      fontFamily: {
        'CabinetGrotesk-Variable': ['CabinetGrotesk-Variable', 'sans-serif'],
        'CabinetGrotesk-Thin': ['CabinetGrotesk-Thin', 'sans-serif'],
        'CabinetGrotesk-Extralight': [
          'CabinetGrotesk-Extralight',
          'sans-serif',
        ],
        'CabinetGrotesk-Light': ['CabinetGrotesk-Light', 'sans-serif'],
        'CabinetGrotesk-Regular': ['CabinetGrotesk-Regular', 'sans-serif'],
        'CabinetGrotesk-Medium': ['CabinetGrotesk-Medium', 'sans-serif'],
        'CabinetGrotesk-Bold': ['CabinetGrotesk-Bold', 'sans-serif'],
        'CabinetGrotesk-Extrabold': ['CabinetGrotesk-Extrabold', 'sans-serif'],
        'CabinetGrotesk-Black': ['CabinetGrotesk-Black', 'sans-serif'],
        'HelveticaNeueLTStd-Lt': ['HelveticaNeueLTStd-Lt', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },

      animation: {
        'fade-out-in': 'fade-out-in 4s ease-in-out',
        'fade-in': 'fade-in 4s ease-in-out ',
      },

      keyframes: {
        'fade-out-in': {
          '0%': { transform: 'translateX(-36px)' },
          '10%': { transform: 'translateX(0px)' },
          '82%': { transform: 'translateX(0px)' },
          '95%': { transform: 'translateX(-42px)' },
          '100%': { transform: 'translateX(-42px)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '21%': { opacity: 0 },
          '25%': { opacity: 1 },
          '80%': { opacity: 1 },
          '80.1%': { opacity: 0 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
