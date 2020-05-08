import React, { useContext } from 'react'
import { useFela } from 'react-fela'

import { GlobalContext } from '../../context/GlobalState'
import { Theme } from '../../Theme'

import ListItem from './ListItem/ListItem'
import makeStyles from './PantryList.styles'

const PantryList = (): JSX.Element => {
  const { items } = useContext(GlobalContext)

  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })

  return (
    <div className={css(styles.pantryListWrapper)}>
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
