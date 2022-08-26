import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import { render } from '@testing-library/react'

import { theme } from '../styles/theme'

const customRender = (
  ui,
  {
    initialState
  } = {}
) => {

  const Wrapper = <ThemeProvider theme={theme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>
  return render(Wrapper)
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

