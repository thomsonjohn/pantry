import React from 'react'
import { useFela } from 'react-fela'

import { Theme } from '../../Theme'
import makeStyles from './Header.styles'

const Header = (): JSX.Element => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })
  return <header className={css(styles.header)}>Pantry</header>
}

export default Header
