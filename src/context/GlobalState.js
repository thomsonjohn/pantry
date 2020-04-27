/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer.js'

const initialState = {
  items: [
    {
      id: 1,
      name: 'Bread',
      quantity: 1,
      category: 'Bakery',
    },
  ],
}

export const GlobalContext = createContext(initialState)
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

  function editItem(item) {
    dispatch({
      type: 'EDIT_ITEM',
      payload: item,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        items: state.items,
        removeItem,
        addItem,
        editItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
