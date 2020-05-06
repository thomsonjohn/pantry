import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  button: IStyle
  input: object
  inputWrapper: IStyle
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    button: {
      background: 'transparent',
      border: 'none',
      height: theme.spacing.large,
      marginRight: theme.spacing.smallish,
    },
    input: {
      background: 'transparent',
      border: 'none',
      color: theme.color.textOnSecondary,
      padding: `${theme.spacing.normal} ${theme.spacing.smallish}`,
      flex: '1 1 auto',
      outline: 'none',
      ...theme.font.body1,
    },
    inputWrapper: {
      alignItems: 'center',
      borderTop: `1px solid ${theme.color.surfaceDark}`,
      color: theme.color.textOnSecondary,
      display: 'flex',
      flex: '0 0 auto',
      height: '56px',
      lineHeight: '56px',
    },
  }
}

export default makeStyles
