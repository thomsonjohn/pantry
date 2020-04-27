import React from 'react'

import Header from './components/Header'
import List from './components/List'

import { GlobalProvider } from './context/GlobalState.js'

function App(): JSX.Element {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <List />
      </div>
    </GlobalProvider>
  )
}

export default App
