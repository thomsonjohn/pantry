import React, { FC, useContext } from 'react'

import { GlobalContext } from '../../context/GlobalState'

type ListItemProps = {
  item: {
    id: number
    name: string
    toBuy: boolean
    inStock: boolean
  }
}

const ListItem: FC<ListItemProps> = ({ item }: ListItemProps) => {
  const { removeItem, editItem } = useContext(GlobalContext)

  const toggleStock = (item: { inStock: boolean }): void => {
    const updatedItem = { ...item, inStock: !item.inStock }
    editItem(updatedItem)
  }

  const toggleToBuy = (item: { toBuy: boolean }): void => {
    const updatedItem = { ...item, toBuy: !item.toBuy }
    editItem(updatedItem)
  }

  return (
    <div>
      <p>{item.name}</p>
      <button onClick={(): void => toggleStock(item)}>
        {item.inStock ? 'In stock' : 'Out of stock'}
      </button>
      <button onClick={(): void => toggleToBuy(item)}>
        {item.toBuy ? 'On list' : 'Add to list'}
      </button>
      <button onClick={(): void => removeItem(item.id)}>Delete</button>
    </div>
  )
}

export default ListItem
