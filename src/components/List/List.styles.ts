import { IStyle } from 'fela'

interface Style {
  listWrapper: IStyle
}

const makeStyles = (): Style => {
  return {
    listWrapper: {
      display: 'flex',
      flex: '1 1 auto',
      flexDirection: 'column',
      height: '0px',
      overflow: 'scroll',
      overscrollBehavior: 'contain',
    },
  }
}

export default makeStyles
