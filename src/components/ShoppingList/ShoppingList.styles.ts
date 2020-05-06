import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  actions: IStyle
  button: IStyle
  circle: IStyle
  subtitle: object
  subtitleWrapper: IStyle
  topPanel: IStyle
  wrapper: IStyle
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    actions: {
      display: 'flex',
      paddingTop: theme.spacing.normal,
    },
    button: {
      background: 'transparent',
      border: 'none',
      outline: 'none',
    },
    circle: {
      backgroundColor: theme.color.secondary,
      borderRadius: '50%',
      position: 'absolute',
      right: '1rem',
      width: '12px',
      height: '12px',
    },
    subtitle: {
      ...theme.font.subtitle1,
      color: theme.color.textOnSecondary,
    },
    subtitleWrapper: {
      alignItems: 'center',
      display: 'flex',
      flex: '1',
      justifyContent: 'space-between',
    },
    topPanel: {
      borderBottom: `1px solid ${theme.color.surfaceDark}`,
      color: theme.color.textOnSecondary,
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: theme.spacing.normal,
    },
    wrapper: {
      borderTopLeftRadius: theme.spacing.normal,
      borderTopRightRadius: theme.spacing.normal,
      backgroundColor: theme.color.surface,
      display: 'flex',
      flex: '1 1 auto',
      flexDirection: 'column',
      padding: theme.spacing.normal,
    },
  }
}

export default makeStyles
