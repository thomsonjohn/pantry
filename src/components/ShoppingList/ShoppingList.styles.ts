import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  subtitle: IStyle
  wrapper: IStyle
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    subtitle: {
      ...theme.font.subtitle1,
      color: theme.color.textOnSecondary,
      paddingBottom: theme.spacing.normal,
      borderBottom: `1px solid ${theme.color.surfaceDark}`,
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
