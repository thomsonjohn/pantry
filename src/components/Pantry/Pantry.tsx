import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'

import PantryList from '../PantryList'

interface Props {
  path: RouteComponentProps
}

const Pantry: FC<Props> = () => {
  return (
    <div>
      <PantryList />
    </div>
  )
}

export default Pantry
