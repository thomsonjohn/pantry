import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  form: IStyle
  formWrapper: IStyle
  input: object
  submit: IStyle
}

interface StyleProps {
  searchQuery: string
  theme: Theme
}

const makeStyles = ({ theme, searchQuery }: StyleProps): Style => {
  return {
    form: {
      display: 'flex',
      width: '100%',
    },
    formWrapper: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },
    input: {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.color.primaryLight}`,
      flex: '1',
      padding: `${theme.spacing.normal} ${theme.spacing.smallish}`,
      borderRadius: '.25rem',
      lineHeight: theme.spacing.large,
      ':focus': {
        border: `2px solid ${theme.color.secondary}`,
        outline: 'none',
      },
    },
    submit: {
      backgroundColor: theme.color.secondary,
      border: 'none',
      color:
        searchQuery.length > 0
          ? theme.color.textOnPrimary
          : theme.color.textOnPrimary,
      fontSize: '.8em',
    },
  }
}

export default makeStyles
