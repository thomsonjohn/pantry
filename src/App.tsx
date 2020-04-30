import React from 'react'

import Header from './components/Header'
import List from './components/List'
import Search from './components/Search'

import { GlobalProvider } from './context/GlobalState'

function App(): JSX.Element {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <Search />
        <List />
      </div>
    </GlobalProvider>
  )
}

export default App
