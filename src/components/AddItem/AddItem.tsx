import React, {
  FormEvent,
  useState,
  useContext,
  useRef,
  useEffect,
} from 'react'
import { useFela } from 'react-fela'

import { GlobalContext } from '../../context/GlobalState'
import { Theme } from '../../Theme'

import makeStyles from './AddItem.styles'

const AddItem = (): JSX.Element => {
  const { items, editItem, addItem } = useContext(GlobalContext)
  const [inputValue, setInputValue] = useState('')
  const [inputActive, setInputActive] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
  })

  useEffect(() => {
    if (inputActive && inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputActive])

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    if (inputValue.length > 0) {
      const newItem = {
        id: Date.now(),
        name: inputValue,
        quantity: 1,
        category: null,
        toBuy: true,
        lastBought: null,
        inStock: false,
        inBasket: false,
      }
      if (items.find((item: { name: string }) => item.name === inputValue)) {
        const existingItem = items.filter(
          (item: { name: string }) => item.name === inputValue
        )[0]
        editItem({ ...existingItem, toBuy: true })
      } else {
        addItem(newItem)
      }
      setInputValue('')
    }
    return
  }

  return (
    <form
      className={css(styles.inputWrapper)}
      onSubmit={(e): void => handleSubmit(e)}
    >
      <button
        onClick={(): void => setInputActive(true)}
        className={css(styles.button)}
      >
        <i className="material-icons">add</i>
      </button>
      <input
        ref={inputRef}
        className={css(styles.input)}
        type="text"
        placeholder="Add new item"
        value={inputValue}
        onChange={(e): void => setInputValue(e.target.value)}
      />
    </form>
  )
}

export default AddItem
