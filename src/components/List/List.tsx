import React, { useContext } from 'react'
import { useFela } from 'react-fela'

import { GlobalContext } from '../../context/GlobalState'
import ListItem from '../ListItem'
import AddItem from '../AddItem'

import makeStyles from './List.styles'

const List = (): JSX.Element => {
  const { items } = useContext(GlobalContext)

  const { css } = useFela()
  const styles = makeStyles()

  return (
    <>
      {items.length > 0 ? (
        <>
          <div className={css(styles.listWrapper)}>
            {items.map(
              (item: {
                id: number
                name: string
                toBuy: boolean
                inBasket: boolean
              }) => {
                if (item.toBuy) {
                  return <ListItem key={item.id} item={item} />
                }
                return null
              }
            )}
          </div>
          <AddItem />
        </>
      ) : (
        <AddItem />
      )}
    </>
  )
}

export default List
