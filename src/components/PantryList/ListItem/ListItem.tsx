import React, { FC, useContext, useState } from 'react'
import { useFela } from 'react-fela'

import { GlobalContext } from '../../../context/GlobalState'
import { Theme } from '../../../Theme'

import Toggle from '../../Toggle'

import makeStyles from './ListItem.styles'

type ListItemProps = {
  item: {
    id: number
    name: string
    toBuy: boolean
    inStock: boolean
  }
}

const ListItem: FC<ListItemProps> = ({ item }: ListItemProps) => {
  const [cardActive, setCardActive] = useState(false)

  const { editItem } = useContext(GlobalContext)

  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
    item,
    cardActive,
  })

  const toggleStock = (item: { inStock: boolean }): void => {
    const updatedItem = { ...item, inStock: !item.inStock }
    editItem(updatedItem, false)
  }

  const toggleToBuy = (item: { toBuy: boolean }): void => {
    const updatedItem = { ...item, toBuy: !item.toBuy }
    editItem(updatedItem, false)
  }

  return (
    <div className={css(styles.card)}>
      <div className={css(styles.topRow)}>
        <span className={css(styles.itemName)}>{item.name}</span>
        <button
          className={css(styles.iconButton)}
          onClick={(): void => setCardActive(!cardActive)}
        >
          <i className="material-icons">
            {cardActive ? 'close' : 'more_horiz'}
          </i>
        </button>
      </div>
      <span className={css(styles.bodyText)}>Last bought on Tuesday</span>
      {!cardActive && (
        <div className={css(styles.row)}>
          <button
            disabled={item.toBuy}
            className={css(styles.button)}
            onClick={(): void => toggleToBuy(item)}
          >
            {item.toBuy ? 'On list' : 'Add to list'}
          </button>
          <span className={css(styles.stockStatus)}>
            {item.inStock ? 'In stock' : 'Out of stock'}
          </span>
        </div>
      )}
      {cardActive && (
        <div className={css(styles.panel)}>
          <div className={css(styles.row)}>
            <p>On shopping list</p>
            <button
              className={css(styles.toggle)}
              onClick={(): void => toggleToBuy(item)}
            >
              <Toggle active={item.toBuy} />
            </button>
          </div>
          <div className={css(styles.row)}>
            <p>In stock</p>
            <button
              className={css(styles.toggle)}
              onClick={(): void => toggleStock(item)}
            >
              <Toggle active={item.inStock} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ListItem
