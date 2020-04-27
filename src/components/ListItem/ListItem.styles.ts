import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  listItem: IStyle
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    listItem: {
      display: 'flex',
      padding: '0.8em',
      color: theme.color.primary,
    },
  }
}

export default makeStyles
