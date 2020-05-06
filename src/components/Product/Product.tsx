import React, { FC, useContext, useState } from 'react'
import { RouteComponentProps, navigate } from '@reach/router'

import { GlobalContext } from '../../context/GlobalState'

import InlineEdit from './InlineEdit'

interface ProductProps extends RouteComponentProps {
  path: string
  productId?: string
}

const Product: FC<ProductProps> = ({ productId }: ProductProps) => {
  const { items, editItem, removeItem } = useContext(GlobalContext)

  const [deletePrompt, setDeletePrompt] = useState(false)

  const product = items.find(
    (item: { id: number }) => `${item.id}` === productId
  )

  const toggleStock = (product: { inStock: boolean }): void => {
    const updatedProduct = { ...product, inStock: !product.inStock }
    editItem(updatedProduct, false)
  }

  const toggleOnList = (product: { toBuy: boolean }): void => {
    const updatedProduct = { ...product, toBuy: !product.toBuy }
    editItem(updatedProduct, false)
  }

  const deleteProduct = (id: number): void => {
    removeItem(id)
    setDeletePrompt(false)
    navigate('/pantry')
  }

  if (product) {
    return (
      <div>
        <InlineEdit text={product.name} id={product.id} />
        <p>{product.inStock ? 'In stock' : 'Out of stock'}</p>
        <button onClick={(): void => toggleStock(product)}>Toggle stock</button>
        <p>{product.toBuy ? 'On list' : 'Not on list'}</p>
        <button onClick={(): void => toggleOnList(product)}>
          Toggle shopping list
        </button>
        {!deletePrompt && (
          <div>
            <p>Delete</p>
            <button onClick={(): void => setDeletePrompt(true)}>Delete</button>
          </div>
        )}
        {deletePrompt && (
          <div>
            <p>Are you sure?</p>
            <button onClick={(): void => setDeletePrompt(false)}>No</button>
            <button onClick={(): void => deleteProduct(product.id)}>Yes</button>
          </div>
        )}
      </div>
    )
  }

  return <div>Nothing here.</div>
}

export default Product
