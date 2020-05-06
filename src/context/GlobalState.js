/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  items: [],
  lastAdded: '',
}

// eslint-disable-next-line no-prototype-builtins
if (localStorage.hasOwnProperty('pantryList')) {
  let value = localStorage.getItem('pantryList')

  try {
    value = JSON.parse(value)
    initialState.items = value
  } catch {
    initialState.items = []
  }
}

export const GlobalContext = createContext()
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  function removeItem(id) {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    })
  }

  function addItem(item) {
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    })
  }

  function editItem(item, scrollTo) {
    dispatch({
      type: 'EDIT_ITEM',
      payload: { item: item, scrollTo: scrollTo },
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        items: state.items,
        lastAdded: state.lastAdded,
        removeItem,
        addItem,
        editItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
