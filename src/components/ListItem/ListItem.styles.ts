import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  body: IStyle
  controls: IStyle
  controlButton: object
  controlWrapper: IStyle
  delete: object
  edit: object
  itemName: IStyle
  itemWrapper: IStyle
  listItem: IStyle
  strike: IStyle
  tickBox: IStyle
}

interface StyleProps {
  theme: Theme
  item: {
    toBuy: boolean
  }
}

const makeStyles = ({ theme, item }: StyleProps): Style => {
  return {
    body: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    controls: {
      alignContent: 'center',
      display: 'flex',
      justifyContent: 'end',
    },
    controlButton: {
      backgroundColor: theme.color.secondary,
      border: `none`,
      color: theme.color.primary,
      cursor: 'pointer',
      outline: 'none',
    },
    controlWrapper: {
      display: 'flex',
    },
    delete: {
      border: `none`,
      color: 'red',
    },
    edit: {
      border: 'none',
      color: 'orange',
    },
    itemName: {
      color: item.toBuy ? theme.color.primary : theme.color.grey,
    },
    itemWrapper: {
      alignItems: 'center',
      display: 'flex',
    },
    listItem: {
      borderBottom: `1px solid ${theme.color.grey}`,
      display: 'flex',
      flexDirection: 'column',
      margin: '0 0.8em',
      color: theme.color.primary,
      padding: '.8em 0',
    },
    strike: {
      color: theme.color.primary,
      textDecoration: item.toBuy ? 'none' : 'line-through',
    },
    tickBox: {
      backgroundColor: theme.color.secondary,
      border: 'none',
      cursor: 'pointer',
      marginRight: '.8em',
      outline: 'none',
      padding: '0',
    },
  }
}

export default makeStyles
