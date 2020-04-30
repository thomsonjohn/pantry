import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  active: IStyle
  navbar: IStyle
  navLink: IStyle
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    active: {
      color: 'red',
    },
    navbar: {
      display: 'flex',
    },
    navLink: {
      color: theme.color.primary,
      display: 'flex',
      flex: '1',
      justifyContent: 'center',
      textDecoration: 'none',
    },
  }
}

export default makeStyles
