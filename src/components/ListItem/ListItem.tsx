import React, { FC } from 'react'
import { useFela } from 'react-fela'

import { Theme } from '../../Theme'
import makeStyles from './ListItem.styles'

type ListItemProps = {
  item: {
    id: number
    name: string
    quantity: number
  }
}

const ListItem: FC<ListItemProps> = ({ item }: ListItemProps) => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })
  return <div className={css(styles.listItem)}>{item.name}</div>
}

export default ListItem
