import React from 'react'
import { Router } from '@reach/router'

import Header from './components/Header'
import NavBar from './components/NavBar'
import Pantry from './components/Pantry'
import ShoppingList from './components/ShoppingList'

import { GlobalProvider } from './context/GlobalState'

function App(): JSX.Element {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <NavBar />
        <Router>
          <ShoppingList path="/" />
          <Pantry path="/pantry" />
        </Router>
      </div>
    </GlobalProvider>
  )
}

export default App
