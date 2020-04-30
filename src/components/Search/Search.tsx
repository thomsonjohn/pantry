import React, { useState, useContext, FormEvent } from 'react'
import { useFela } from 'react-fela'

import { GlobalContext } from '../../context/GlobalState'
import { Theme } from '../../Theme'

import makeStyles from './Search.styles'

const Search = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState('')
  const { items, addItem, editItem } = useContext(GlobalContext)

  const { css, theme } = useFela<Theme>()
  const styles = makeStyles({
    theme,
    searchQuery,
  })

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    const newItem = {
      id: Date.now(),
      name: searchQuery,
      quantity: 1,
      category: null,
      toBuy: true,
      lastBought: null,
      inStock: false,
      inBasket: false,
    }
    if (
      items.find(
        (item: { name: string; toBuy: boolean }) => item.name === searchQuery
      )
    ) {
      const existingItem = items.filter(
        (item: { name: string }) => item.name === searchQuery
      )[0]
      console.log(existingItem)
      editItem({ ...existingItem, toBuy: true })
    } else {
      addItem(newItem)
    }
    setSearchQuery('')
  }
  return (
    <div className={css(styles.formWrapper)}>
      <form className={css(styles.form)} onSubmit={handleSubmit}>
        <input
          value={searchQuery}
          onChange={(e): void => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Add new item"
          className={css(styles.input)}
        />
        <input className={css(styles.submit)} type="submit" value="Ok" />
      </form>
    </div>
  )
}

export default Search
