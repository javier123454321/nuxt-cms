/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      spacing: {
        50: '50px',
        200: '200px',
        400: '400px',
        600: '600px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
      },
      fontFamily: {
        sans: ['Prompt', ...defaultTheme.fontFamily.sans],
        mono: ['PT Mono', ...defaultTheme.fontFamily.mono]
      },
      screens: {
        'md+': '896px',
        'lg+': '1152px',
        '2xl': '1440px'
      },
      translate: {
        '80': '20rem'
      },
      colors: {
        yellow: {
          ...defaultTheme.colors.yellow,
          400: '#FFF974'
        },
        blue:{
          ...defaultTheme.colors.blue,
          400: '#00DBE9'
        },
        bg:{
          light: "#ffffff"
        },
        primary: {
          100: '#ECEFF5',
          200: '#CBD2E1',
          300: '#ABB6CD',
          400: '#8C9AB7',
          500: '#6F7FA0',
          default: '#526488',
          600: '#3E4F70',
          700: '#2C3A57',
          800: '#1C263B',
          900: '#0D131E'
        },
        accent: {
          100: '#F9E9EA',
          200: '#EEC3C6',
          300: '#E09FA4',
          400: '#CF7D83',
          500: '#BD5D65',
          default: '#A84048',
          600: '#8D2D34',
          700: '#6E1D23',
          800: '#4D1015',
          900: '#280709'
        }
      },
      opacity: {
        '10': '0.1',
        '20': '0.2'
      }
    },
    boxShadow: {
      // ...defaultTheme.boxShadow,
      mdOrange: '5px 5px 0px #EDAB00',
      lgOrange: '15px 15px 0px #EDAB00',
      mdBlack: '5px 5px 0px #040404',
      lgBlack: '15px 15px 0px #040404;',
    },
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active']
  },
  plugins: [require('tailwindcss-dark-mode')()],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      // Set whitelist in nuxt.config.js -> purgeCSS.whitelist: ['dark-mode', 'light-mode', 'btn', 'icon']
    }
  }
}
