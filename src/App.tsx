import React from 'react'

import Header from './components/Header'
import List from './components/List'

import items from './data/ListItems'

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <List items={items} />
    </div>
  )
}

export default App
