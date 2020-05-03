interface Font {
  fontFamily: string
  fontWeight: number
  fontSize: string
  letterSpacing: string
}

export interface Theme {
  color: {
    primary: string
    primaryLight: string
    primaryDark: string
    secondary: string
    secondaryLight: string
    secondaryDark: string
    textOnPrimary: string
    textOnSecondary: string
  }
  font: {
    headline1: Font
    headline2: Font
    headline3: Font
    headline4: Font
    headline5: Font
    headline6: Font
    subtitle1: Font
    subtitle2: Font
    body1: Font
    body2: Font
    button: Font
    caption: Font
    overline: Font
  }
  spacing: {
    normal: string
    small: string
    large: string
  }
}

export const theme: Theme = {
  color: {
    primary: '#ffca28',
    primaryLight: '#fffd61',
    primaryDark: '#c79a00',
    secondary: '#FFFFFF',
    secondaryLight: '#4f5b62',
    secondaryDark: '#000a12',
    textOnPrimary: '#000000',
    textOnSecondary: '#ffffff',
  },
  font: {
    headline1: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 300,
      fontSize: '6rem',
      letterSpacing: '-0.094rem',
    },
    headline2: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 300,
      fontSize: '3.75rem',
      letterSpacing: '-0.031rem',
    },
    headline3: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '3rem',
      letterSpacing: '0rem',
    },
    headline4: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '2.125rem',
      letterSpacing: '-0.016rem',
    },
    headline5: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '1.5rem',
      letterSpacing: '0rem',
    },
    headline6: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      letterSpacing: '-0.009rem',
    },
    subtitle1: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      letterSpacing: '-0.009rem',
    },
    subtitle2: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 500,
      fontSize: '.875rem',
      letterSpacing: '.006rem',
    },
    body1: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      letterSpacing: '0.031rem',
    },
    body2: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '.875rem',
      letterSpacing: '.016rem',
    },
    button: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 500,
      fontSize: '.875rem',
      letterSpacing: '.078rem',
    },
    caption: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '.75rem',
      letterSpacing: '.025rem',
    },
    overline: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '.625rem',
      letterSpacing: '.094rem',
    },
  },
  spacing: {
    normal: '1em',
    small: '.5em',
    large: '1.5em',
  },
}
