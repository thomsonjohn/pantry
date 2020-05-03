import React from 'react'
import { useFela } from 'react-fela'
import { Link } from '@reach/router'

import { Theme } from '../../Theme'
import makeStyles from './Header.styles'

import logo from '../../assets/img/groceries.svg'

const Header = (): JSX.Element => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })
  const isActive = ({ isCurrent }: any): { className: string } | {} => {
    return isCurrent ? { className: css(styles.button, styles.active) } : {}
  }
  return (
    <header className={css(styles.header)}>
      <div>
        <img className={css(styles.logo)} src={logo} alt="grocery-bag-logo" />
      </div>
      <div>
        <Link getProps={isActive} to="/" className={css(styles.button)}>
          <i className="material-icons">list_alt</i>
        </Link>
        <Link getProps={isActive} to="/pantry" className={css(styles.button)}>
          <i className="material-icons">kitchen</i>
        </Link>
      </div>
    </header>
  )
}

export default Header
