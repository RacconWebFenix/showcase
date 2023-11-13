'use client'

import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @font-face {
      font-display: swap;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      src: url('/fonts/montserrat-v26-latin-regular.woff2') format('woff2'),
          url('/fonts/montserrat-v26-latin-regular.ttf') format('truetype');
    }

    @font-face {
      font-display: swap;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      src: url('/fonts/montserrat-v26-latin-500.woff2') format('woff2'),
          url('/fonts/montserrat-v26-latin-500.ttf') format('truetype');
    }

    @font-face {
      font-display: swap;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      src: url('/fonts/montserrat-v26-latin-600.woff2') format('woff2'),
          url('/fonts/montserrat-v26-latin-600.ttf') format('truetype');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    ${({ theme }) => css`
      html {
        font-size: 62.5%;
      }

      body {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
      }
    `}

`

export default GlobalStyles
