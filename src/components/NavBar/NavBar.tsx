import React from 'react'
import { Link } from '@reach/router'
import { useFela } from 'react-fela'

import { Theme } from '../../Theme'

import makeStyles from './NavBar.styles'

const NavBar = (): JSX.Element => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })

  const isActive = ({ isCurrent }: any): { className: string } | {} => {
    return isCurrent ? { className: css(styles.navLink, styles.active) } : {}
  }

  return (
    <nav className={css(styles.navbar)}>
      <Link getProps={isActive} className={css(styles.navLink)} to="/">
        Shopping List
      </Link>
      <Link getProps={isActive} className={css(styles.navLink)} to="/pantry">
        Pantry
      </Link>
    </nav>
  )
}

export default NavBar
