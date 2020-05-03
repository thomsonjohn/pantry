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
      padding: theme.spacing.normal,
      color: theme.color.primary,
      ...theme.font.headline1,
    },
  }
}

export default makeStyles
