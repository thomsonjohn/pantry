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
      padding: '0.8em',
      width: '100%',
    },
    formWrapper: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },
    input: {
      border: `2px solid ${theme.color.grey}`,
      flex: '1',
      padding: '.4em .6em',
      borderRadius: '10px',
      ':focus': {
        border: `2px solid ${theme.color.accent}`,
        outline: 'none',
      },
    },
    submit: {
      backgroundColor: theme.color.secondary,
      border: 'none',
      color: searchQuery.length > 0 ? theme.color.accent : theme.color.grey,
      fontSize: '.8em',
    },
  }
}

export default makeStyles
