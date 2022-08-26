import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

import { theme } from './styles/theme'

import App from './components/App'

export const Config = ({ children }) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
          {children}
    </ThemeProvider>
)

ReactDOM.render(
  <Config>
    <App />
  </Config>,
  document.getElementById('root')
)