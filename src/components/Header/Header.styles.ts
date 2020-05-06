import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  active: IStyle
  button: IStyle
  header: object
  logo: IStyle
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    active: {
      borderBottom: `2px solid ${theme.color.secondaryLight}`,
    },
    button: {
      color: theme.color.textOnPrimary,
      cursor: 'pointer',
      marginLeft: theme.spacing.normal,
    },
    header: {
      backgroundColor: theme.color.primary,
      display: 'flex',
      justifyContent: 'space-between',
      height: theme.spacing.large,
      padding: theme.spacing.normal,
      color: theme.color.textOnPrimary,
      ...theme.font.headline6,
    },
    logo: {
      width: '44px',
      height: '44px',
      position: 'absolute',
      top: '15px',
    },
  }
}

export default makeStyles
