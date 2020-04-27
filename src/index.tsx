import React from 'react'
import ReactDOM from 'react-dom'
import { RendererProvider, ThemeProvider } from 'react-fela'
import { renderer } from './felaConfig'
import { theme } from './Theme'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <RendererProvider renderer={renderer}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </RendererProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
