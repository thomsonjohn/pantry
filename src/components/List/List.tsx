import React, { useContext } from 'react'

import { GlobalContext } from '../../context/GlobalState.js'
import ListItem from '../ListItem'

const List = (): JSX.Element => {
  const { items } = useContext(GlobalContext)

  return (
    <>
      {items.length > 0 ? (
        <>
          {items.map((item: { id: number; name: string; toBuy: boolean }) => {
            return <ListItem key={item.id} item={item} />
          })}
        </>
      ) : (
        <p>Nothing here</p>
      )}
    </>
  )
}

export default List
