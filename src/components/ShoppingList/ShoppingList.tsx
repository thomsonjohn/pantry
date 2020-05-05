import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useFela } from 'react-fela'

import CTA from '../CTA'
import List from '../List'
import { Theme } from '../../Theme'

import makeStyles from './ShoppingList.styles'

interface Props {
  path: RouteComponentProps
}

const ShoppingList: FC<Props> = () => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })

  return (
    <div className={css(styles.wrapper)}>
      <span className={css(styles.subtitle)}>Shopping List</span>
      <List />
      <CTA />
    </div>
  )
}

export default ShoppingList
