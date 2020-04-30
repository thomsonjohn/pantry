import React, { FC, useState, useContext } from 'react'
import { useFela } from 'react-fela'

import { GlobalContext } from '../../context/GlobalState'
import { Theme } from '../../Theme'

import makeStyles from './ListItem.styles'

type ListItemProps = {
  item: {
    id: number
    name: string
    toBuy: boolean
  }
}

const ListItem: FC<ListItemProps> = ({ item }: ListItemProps) => {
  const [manageItem, setManageItem] = useState(false)
  const { removeItem, editItem } = useContext(GlobalContext)

  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
    item,
  })

  const toggleItem = (item: { toBuy: boolean }): void => {
    const updatedItem = { ...item, toBuy: !item.toBuy }
    editItem(updatedItem)
  }

  return (
    <div className={css(styles.listItem)}>
      <div className={css(styles.body)}>
        <div>
          <button
            className={css(styles.bullet)}
            onClick={(): void => toggleItem(item)}
          />
          <span className={css(styles.strike)}>
            <span className={css(styles.itemName)}>{item.name}</span>
          </span>
        </div>
        {manageItem && (
          <div className={css(styles.controls)}>
            <button
              className={css(styles.controlButton, styles.edit)}
              onClick={(): void => console.log(`edit item ${item.id}`)}
            >
              Edit
            </button>
            <button
              className={css(styles.controlButton, styles.delete)}
              onClick={(): void => removeItem(item.id)}
            >
              Delete
            </button>
          </div>
        )}
        <button
          className={css(styles.controlButton)}
          onClick={(): void => setManageItem(!manageItem)}
        >
          {manageItem ? 'Less' : 'More'}
        </button>
      </div>
    </div>
  )
}

export default ListItem
