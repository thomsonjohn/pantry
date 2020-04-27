import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  header: IStyle
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    header: {
      display: 'flex',
      justifyContent: 'center',
      padding: '.8em',
      color: theme.color.accent,
      ...theme.font.logo,
    },
  }
}

export default makeStyles
