import React, { useContext } from 'react'

import { GlobalContext } from '../../context/GlobalState'

import ListItem from './ListItem'

const PantryList = (): JSX.Element => {
  const { items } = useContext(GlobalContext)

  return (
    <div>
      {items.map(
        (item: {
          id: number
          name: string
          toBuy: boolean
          inStock: boolean
        }) => {
          return <ListItem key={item.id} item={item} />
        }
      )}
    </div>
  )
}

export default PantryList
