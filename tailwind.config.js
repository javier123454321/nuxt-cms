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
        250: '250px',
        300: '300px',
        350: '350px',
        400: '400px',
        450: '450px',
        500: '500px',
        600: '600px',
        650: '650px',
        700: '700px',
        750: '750px',
        800: '800px',
        850: '850px',
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
        '80': '20rem',
        '1/12': '8.3333%',
        '2/12': '16.6666%',
        '3/12': '25%',
        '4/12': '33.3333%',
        '5/12': '41.6666%',
        '6/12': '50%',
        '7/12': '58.3333%',
        '8/12': '66.6666%',
        '9/12': '75%',
        '10/12': '83.3333%',
        '11/12': '91.6666%',
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
