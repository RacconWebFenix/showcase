'use client'

import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Montserrat'),
      url('/fonts/montserrat-v26-latin-regular.woff2') format('woff2')
    }

    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: local('Montserrat'), url('/fonts/montserrat-v26-latin-500.woff2') format('woff2')
    }

    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: local('Montserrat'), url('/fonts/montserrat-v26-latin-600.woff2') format('woff2')
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        ${({ theme }) => css`
          font-family: ${theme.font.family};
        `}
      }

      ${({ theme }) => css`
        html {
          font-size: 62.5%;
        }

        body {
          font-size: ${theme.font.sizes.medium};
        }
      `}
`
export default GlobalStyles
