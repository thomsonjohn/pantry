import React, { FC } from 'react'

import ListItem from '../ListItem'

type ListProps = {
  items: {
    id: number
    name: string
    quantity: number
  }[]
}

const List: FC<ListProps> = ({ items }: ListProps) => {
  return (
    <div>
      {items.map((item, index) => {
        return <ListItem key={`list-item-${index}`} item={item} />
      })}
    </div>
  )
}

export default List
