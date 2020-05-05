import { Theme } from './Theme'

interface Style {
  app: object
}

interface StyleProps {
  theme: Theme
}

const makeStyles = ({ theme }: StyleProps): Style => {
  return {
    app: {
      backgroundColor: theme.color.primary,
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      '> div': {
        display: 'flex',
        flex: '1 1 auto',
      },
    },
  }
}

export default makeStyles
