import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  pantry: IStyle
  subtitle: object
  subtitleWrapper: IStyle
  topPanel: IStyle
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    pantry: {
      borderTopLeftRadius: theme.spacing.normal,
      borderTopRightRadius: theme.spacing.normal,
      backgroundColor: theme.color.surface,
      display: 'flex',
      flex: '1 1 auto',
      flexDirection: 'column',
      padding: theme.spacing.normal,
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
  }
}

export default makeStyles
