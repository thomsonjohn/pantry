import { IStyle } from 'fela'

import { Theme } from '../../../Theme'

interface Style {
  bodyText: object
  button: object
  card: object
  expand: IStyle
  iconButton: IStyle
  itemName: object
  panel: IStyle
  row: IStyle
  topRow: IStyle
  stockStatus: object
  toggle: IStyle
  thumb: IStyle
  track: IStyle
}

interface StyleProps {
  theme: Theme
  item: {
    toBuy: boolean
    inStock: boolean
  }
  cardActive: boolean
}

const makeStyles = ({ theme, item, cardActive }: StyleProps): Style => {
  return {
    bodyText: {
      ...theme.font.body2,
      borderBottom: cardActive
        ? `1px solid ${theme.color.surfaceDark}`
        : 'none',
      color: theme.color.primaryLight,
      marginTop: theme.spacing.smallish,
      paddingBottom: cardActive ? theme.spacing.large : 0,
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: theme.spacing.xsmall,
      color: item.toBuy ? theme.color.primary : theme.color.secondary,
      display: 'flex',
      outline: 'none',
      padding: `${theme.spacing.smallish} 0`,
      ...theme.font.button,
    },
    card: {
      backgroundColor: '#fff',
      borderTopLeftRadius: cardActive ? theme.spacing.normal : 0,
      borderTopRightRadius: cardActive ? theme.spacing.normal : 0,
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      display: 'flex',
      flex: '1 0 auto',
      flexDirection: 'column',
      marginTop: cardActive ? 0 : `${theme.spacing.normal}`,
      padding: `${theme.spacing.normal} ${theme.spacing.normal} ${theme.spacing.small} ${theme.spacing.normal}`,
      position: cardActive ? 'absolute' : 'relative',
      width: cardActive ? 'calc(100vw - 2rem)' : 'auto',
      left: '0',
      top: '0',
      height: cardActive ? 'calc(100vh - 1.5rem)' : 'auto',
      zIndex: cardActive ? 999 : 0,
      maxHeight: cardActive ? null : '128px',
    },
    expand: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: theme.spacing.xsmall,
      color: theme.color.primary,
      display: 'flex',
      outline: 'none',
      padding: `${theme.spacing.smallish} 0`,
    },
    iconButton: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: theme.spacing.xsmall,
      color: theme.color.primary,
      outline: 'none',
      padding: '0',
    },
    itemName: {
      ...theme.font.headline5,
      textTransform: 'capitalize',
      color: theme.color.textOnSecondary,
    },
    panel: {
      display: 'flex',
      color: theme.color.primary,
      flexDirection: 'column',
    },
    row: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      marginTop: theme.spacing.small,
      justifyContent: 'space-between',
    },
    stockStatus: {
      ...theme.font.overline,
      color: item.inStock ? theme.color.primary : theme.color.error,
    },
    topRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    toggle: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: theme.spacing.xsmall,
      color: theme.color.primary,
      outline: 'none',
      padding: `0 ${theme.spacing.xsmall} 0 0`,
      height: '1.25rem',
    },
    thumb: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      position: 'absolute',
      backgroundColor: theme.color.surface,
      width: '1.25rem',
      height: '1.25rem',
      borderRadius: '50%',
      top: '-4px',
      left: '-1px',
    },
    track: {
      position: 'relative',
      backgroundColor: theme.color.surfaceDark,
      width: theme.spacing.xlarge,
      height: theme.spacing.smallish,
      borderRadius: '10px',
    },
  }
}

export default makeStyles
