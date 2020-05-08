import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  button: IStyle
  thumb: IStyle
  track: IStyle
}

interface StyleProps {
  theme: Theme
  active: boolean
}

const makeStyles = ({ theme, active }: StyleProps): Style => {
  return {
    button: {
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
      backgroundColor: active ? theme.color.secondary : theme.color.surface,
      width: '1.25rem',
      height: '1.25rem',
      borderRadius: '50%',
      top: '-4px',
      left: active ? '20px' : '-1px',
      transition: 'left 0.25s, background-color 0.5s',
    },
    track: {
      position: 'relative',
      backgroundColor: active
        ? theme.color.secondaryLight
        : theme.color.surfaceDark,
      width: theme.spacing.xlarge,
      height: theme.spacing.smallish,
      borderRadius: '10px',
      transition: 'background-color 0.5s',
    },
  }
}

export default makeStyles
