'use client'

import { PropsWithChildren } from 'react'
import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
