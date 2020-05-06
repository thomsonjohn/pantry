import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  button: object
  digit: IStyle
}

interface StyleProps {
  theme: Theme
  basketItems: []
}

const makeStyles = ({ theme, basketItems }: StyleProps): Style => {
  return {
    button: {
      alignItems: 'center',
      backgroundColor:
        basketItems.length > 0
          ? theme.color.secondary
          : theme.color.surfaceDark,
      border: 'none',
      borderRadius: theme.spacing.xsmall,
      color:
        basketItems.length > 0
          ? theme.color.textOnSecondary
          : theme.color.primaryLight,
      display: 'flex',
      outline: 'none',
      padding: `${theme.spacing.smallish} ${theme.spacing.normal} ${theme.spacing.smallish} ${theme.spacing.smallish}`,
      ...theme.font.button,
    },
    digit: {
      alignItems: 'center',
      backgroundColor:
        basketItems.length > 0
          ? theme.color.secondaryLight
          : theme.color.primaryLight,
      borderRadius: '50%',
      color:
        basketItems.length > 0
          ? theme.color.secondaryDark
          : theme.color.surface,
      display: 'flex',
      fontSize: theme.spacing.smallish,
      justifyContent: 'center',
      width: '24px',
      height: '24px',
      marginLeft: theme.spacing.small,
    },
  }
}

export default makeStyles
