import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  input: IStyle
  name: IStyle
  text: IStyle
}

interface StyleProps {
  theme: Theme
  inputActive: boolean
  inputValue: string
}

const makeStyles = ({ theme, inputActive, inputValue }: StyleProps): Style => {
  return {
    input: {
      color: inputActive ? 'green' : 'red',
      width: `${Math.ceil(inputValue.length * 0.9)}ex`,
    },
    name: {
      color: !inputActive ? 'green' : 'red',
    },
    text: {
      fontSize: '1em',
    },
  }
}

export default makeStyles
