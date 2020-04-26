import React from 'react'

import List from './components/List'

import items from './data/ListItems'

function App() {
  return (
    <div className="App">
      <List items={items} />
    </div>
  )
}

export default App
