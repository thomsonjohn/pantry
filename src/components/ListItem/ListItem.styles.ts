import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  body: IStyle
  controls: IStyle
  controlButton: object
  controlWrapper: IStyle
  delete: object
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
    inBasket: boolean
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
      border: `none`,
      color: theme.color.textOnSecondary,
      cursor: 'pointer',
      outline: 'none',
      marginLeft: theme.spacing.normal,
    },
    controlWrapper: {
      display: 'flex',
    },
    delete: {
      border: `none`,
      color: theme.color.textOnSecondary,
    },
    itemName: {
      color: item.inBasket
        ? theme.color.textOnSecondary
        : theme.color.textOnSecondary,
      textDecoration: 'none',
      textTransform: 'capitalize',
    },
    itemWrapper: {
      alignItems: 'center',
      display: 'flex',
    },
    listItem: {
      borderBottom: `1px solid ${theme.color.textOnPrimary}`,
      display: 'flex',
      flexDirection: 'column',
      flex: '1 0 auto',
      color: theme.color.primary,
      padding: `${theme.spacing.normal} 0`,
    },
    strike: {
      color: theme.color.secondary,
      textDecoration: item.inBasket ? 'line-through' : 'none',
    },
    tickBox: {
      color: item.inBasket
        ? theme.color.secondary
        : theme.color.textOnSecondary,
      border: 'none',
      cursor: 'pointer',
      marginRight: theme.spacing.large,
      outline: 'none',
      padding: '0',
      height: '1.5rem',
    },
  }
}

export default makeStyles
