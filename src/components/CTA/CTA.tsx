import React, { useContext } from 'react'

import { GlobalContext } from '../../context/GlobalState'

const Cta = (): JSX.Element => {
  const { items, editItem } = useContext(GlobalContext)

  const basketItems = items.filter(
    (item: { inBasket: boolean }) => item.inBasket === true
  )

  const addBasketToPantry = (): void =>
    basketItems.map((item: {}) => {
      return editItem({ ...item, inBasket: false, toBuy: false, inStock: true })
    })

  return (
    <div>
      {basketItems.length > 0 && (
        <button onClick={addBasketToPantry}>
          Add to pantry {basketItems.length}
        </button>
      )}
    </div>
  )
}

export default Cta
