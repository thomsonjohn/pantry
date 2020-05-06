import React, { useContext, useEffect } from 'react'
import { useFela } from 'react-fela'
import { scroller } from 'react-scroll'

import { GlobalContext } from '../../context/GlobalState'
import ListItem from '../ListItem'
import AddItem from '../AddItem'

import makeStyles from './List.styles'

const List = (): JSX.Element => {
  const { items, lastAdded } = useContext(GlobalContext)

  const { css } = useFela()
  const styles = makeStyles()

  useEffect(() => {
    if (lastAdded.length > 0) {
      console.log('startscroll')
      console.log(lastAdded)
      scroller.scrollTo(lastAdded, {
        duration: 2000,
        smooth: 'smooth',
        containerId: 'listWrapper',
      })
    }
  }, [lastAdded])

  return (
    <>
      {items.length > 0 ? (
        <>
          <div id="listWrapper" className={css(styles.listWrapper)}>
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
