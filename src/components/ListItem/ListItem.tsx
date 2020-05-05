import React, { FC, useState, useContext } from 'react'
import { useFela } from 'react-fela'
import { Link } from '@reach/router'

import { GlobalContext } from '../../context/GlobalState'
import { Theme } from '../../Theme'

import makeStyles from './ListItem.styles'

type ListItemProps = {
  item: {
    id: number
    name: string
    toBuy: boolean
    inBasket: boolean
  }
}

const ListItem: FC<ListItemProps> = ({ item }: ListItemProps) => {
  const [manageItem, setManageItem] = useState(false)
  const { editItem } = useContext(GlobalContext)

  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
    item,
  })

  const linkPath = `/pantry/${item.id}`

  const toggleItem = (item: { inBasket: boolean }): void => {
    const updatedItem = { ...item, inBasket: !item.inBasket }
    editItem(updatedItem)
  }

  const removeFromList = (item: { toBuy: boolean }): void => {
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
              {item.inBasket ? 'check_box' : 'check_box_outline_blank'}
            </i>
          </button>
          <span className={css(styles.strike)}>
            <Link to={linkPath} className={css(styles.itemName)}>
              {item.name}
            </Link>
          </span>
        </div>
        <div className={css(styles.controlWrapper)}>
          {manageItem && (
            <div className={css(styles.controls)}>
              <button
                className={css(styles.controlButton, styles.delete)}
                onClick={(): void => removeFromList(item)}
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
