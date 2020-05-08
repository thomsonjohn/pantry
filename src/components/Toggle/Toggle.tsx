import React from 'react'
import { useFela } from 'react-fela'

import { Theme } from '../../Theme'

import makeStyles from './Toggle.styles'

interface Props {
  active: boolean
}

const Toggle = ({ active }: Props) => {
  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
    active,
  })

  return (
    <div className={css(styles.track)}>
      <div className={css(styles.thumb)}></div>
    </div>
  )
}

export default Toggle
