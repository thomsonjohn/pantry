import React from 'react'
import { Router } from '@reach/router'

import Header from './components/Header'
import Pantry from './components/Pantry'
import Product from './components/Product'
import ShoppingList from './components/ShoppingList'

import { GlobalProvider } from './context/GlobalState'

function App(): JSX.Element {
  return (
    <GlobalProvider>
      <div className="App">
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
