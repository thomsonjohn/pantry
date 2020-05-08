import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useFela } from 'react-fela'

import { Theme } from '../../Theme'

import PantryList from '../PantryList'

import makeStyles from './Pantry.styles'

interface Props {
  path: RouteComponentProps
  default: RouteComponentProps
}

const Pantry: FC<Props> = () => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })

  return (
    <div className={css(styles.pantry)}>
      <div className={css(styles.topPanel)}>
        <div className={css(styles.subtitleWrapper)}>
          <span className={css(styles.subtitle)}>Pantry</span>
        </div>
      </div>
      <PantryList />
    </div>
  )
}

export default Pantry
