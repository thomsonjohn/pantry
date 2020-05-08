import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  pantryListWrapper: IStyle
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    pantryListWrapper: {
      backgroundColor: theme.color.surface,
      display: 'flex',
      flex: '1 0 auto',
      flexDirection: 'column',
      width: '100%',
      height: '0px',
      overflow: 'scroll',
      overscrollBehavior: 'contain',
    },
  }
}

export default makeStyles
