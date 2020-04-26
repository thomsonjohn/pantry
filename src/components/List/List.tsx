import React from 'react'

import ListItem from '../ListItem'

type ListProps = {
  items: {
    id: number
    name: string
    quantity: number
  }[]
}

const List = ({ items }: ListProps) => {
  return (
    <div>
      <ListItem />
    </div>
  )
}

export default List
