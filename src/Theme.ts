export interface Theme {
  color: {
    primary: string
    secondary: string
    accent: string
    grey: string
  }
  font: {
    logo: {
      fontFamily: string
      fontSize: string
      fontWeight: number
    }
  }
}

export const theme: Theme = {
  color: {
    primary: '#000000',
    secondary: '#FFFFFF',
    accent: '#40BEFF',
    grey: '#D6D6D6',
  },
  font: {
    logo: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '1.5em',
      fontWeight: 700,
    },
  },
}
