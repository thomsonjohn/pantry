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
        <div className={css(styles.itemWrapper)}>
          <button
            className={css(styles.tickBox)}
            onClick={(): void => toggleItem(item)}
          >
            <i className="material-icons">
              {!item.toBuy ? 'radio_button_checked' : 'radio_button_unchecked'}
            </i>
          </button>
          <span className={css(styles.strike)}>
            <span className={css(styles.itemName)}>{item.name}</span>
          </span>
        </div>
        <div className={css(styles.controlWrapper)}>
          {manageItem && (
            <div className={css(styles.controls)}>
              <button
                className={css(styles.controlButton, styles.edit)}
                onClick={(): void => console.log(`edit item ${item.id}`)}
              >
                <i className="material-icons">edit</i>
              </button>
              <button
                className={css(styles.controlButton, styles.delete)}
                onClick={(): void => removeItem(item.id)}
              >
                <i className="material-icons">delete_outline</i>
              </button>
            </div>
          )}
          <button
            className={css(styles.controlButton)}
            onClick={(): void => setManageItem(!manageItem)}
          >
            <i className="material-icons">
              {manageItem ? 'close' : 'more_horiz'}
            </i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListItem
