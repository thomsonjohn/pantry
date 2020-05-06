import React, { FC, useState, useEffect, useContext, useRef } from 'react'
import { useFela } from 'react-fela'

import useKeypress from '../../hooks/useKeypress'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import { GlobalContext } from '../../context/GlobalState'
import { Theme } from '../../Theme'

import makeStyles from './InlineEdit.styles'

type Props = {
  id: number
  text: string
}

const InlineEdit: FC<Props> = ({ text, id }: Props) => {
  const [inputActive, setInputActive] = useState(false)
  const [inputValue, setInputValue] = useState(text)

  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
    inputActive,
    inputValue,
  })

  const wrapperRef = useRef(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { editItem, items } = useContext(GlobalContext)
  const item = items.find((item: { id: number }) => item.id === id)

  const enter = useKeypress('Enter')
  const esc = useKeypress('Escape')

  useOnClickOutside(wrapperRef, () => {
    if (inputActive) {
      const updatedItem = { ...item, name: inputValue }
      editItem(updatedItem, false)
      setInputActive(false)
    }
  })

  useEffect(() => {
    if (inputActive && inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputActive])

  useEffect(() => {
    if (inputActive) {
      if (enter) {
        const updatedItem = { ...item, name: inputValue }
        editItem(updatedItem, false)
        setInputActive(false)
      }
      if (esc) {
        setInputValue(text)
        setInputActive(false)
      }
    }
    // eslint-disable-next-line
  }, [enter, esc])

  return (
    <span className={css(styles.text)} ref={wrapperRef}>
      {!inputActive && (
        <span
          className={css(styles.name)}
          onClick={(): void => setInputActive(true)}
        >
          {text}
        </span>
      )}
      {inputActive && (
        <input
          ref={inputRef}
          className={css(styles.input)}
          value={inputValue}
          onChange={(e): void => setInputValue(e.target.value)}
        />
      )}
    </span>
  )
}

export default InlineEdit
