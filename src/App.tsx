import React from 'react'
import { Router } from '@reach/router'
import { useFela } from 'react-fela'

import Header from './components/Header'
import Pantry from './components/Pantry'
import Product from './components/Product'
import ShoppingList from './components/ShoppingList'
import { Theme } from './Theme'

import { GlobalProvider } from './context/GlobalState'
import makeStyles from './App.styles'

function App(): JSX.Element {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })

  return (
    <GlobalProvider>
      <div className={css(styles.app)}>
        <Header />
        <Router>
          <ShoppingList path="/" />
          <Pantry path="/pantry" default />
          <Product path="/pantry/:productId" />
        </Router>
      </div>
    </GlobalProvider>
  )
}

export default App
