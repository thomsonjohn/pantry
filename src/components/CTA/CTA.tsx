import React, { useContext } from 'react'
import { useFela } from 'react-fela'

import { GlobalContext } from '../../context/GlobalState'
import { Theme } from '../../Theme'

import makeStyles from './Cta.styles'

const Cta = (): JSX.Element => {
  const { items, editItem } = useContext(GlobalContext)

  const basketItems = items.filter(
    (item: { inBasket: boolean }) => item.inBasket === true
  )

  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
    basketItems,
  })

  const addBasketToPantry = (): void =>
    basketItems.map((item: {}) => {
      return editItem(
        { ...item, inBasket: false, toBuy: false, inStock: true },
        false
      )
    })

  return (
    <div>
      <button
        disabled={basketItems.length > 0}
        className={css(styles.button)}
        onClick={addBasketToPantry}
      >
        Add to pantry{' '}
        <div className={css(styles.digit)}>{basketItems.length}</div>
      </button>
    </div>
  )
}

export default Cta
