import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'

import CTA from '../CTA'
import List from '../List'
import Search from '../Search'

interface Props {
  path: RouteComponentProps
}

const ShoppingList: FC<Props> = () => {
  return (
    <>
      <Search />
      <List />
      <CTA />
    </>
  )
}

export default ShoppingList
