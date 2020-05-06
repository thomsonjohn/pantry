import React, { FC, useContext, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useFela } from 'react-fela'

import { GlobalContext } from '../../context/GlobalState'
import CTA from '../CTA'
import List from '../List'
import { Theme } from '../../Theme'

import makeStyles from './ShoppingList.styles'

interface Props {
  path: RouteComponentProps
}

const ShoppingList: FC<Props> = () => {
  const { items } = useContext(GlobalContext)
  const [panelActive, setPanelActive] = useState(false)

  const basketItems = items.filter(
    (item: { inBasket: boolean }) => item.inBasket === true
  )
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })

  return (
    <div className={css(styles.wrapper)}>
      <div className={css(styles.topPanel)}>
        <div className={css(styles.subtitleWrapper)}>
          <span className={css(styles.subtitle)}>Shopping List</span>
          <button
            className={css(styles.button)}
            onClick={(): void => setPanelActive(!panelActive)}
          >
            {basketItems.length > 0 && !panelActive && (
              <div className={css(styles.circle)}></div>
            )}
            <i className="material-icons">
              {panelActive ? 'expand_less' : 'filter_list'}
            </i>
          </button>
        </div>
        {panelActive && (
          <div className={css(styles.actions)}>
            <CTA />
          </div>
        )}
      </div>
      <List />
    </div>
  )
}

export default ShoppingList
