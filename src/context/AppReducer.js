/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      localStorage.setItem(
        'pantryList',
        JSON.stringify(state.items.filter((item) => item.id !== action.payload))
      )
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }
    case 'ADD_ITEM':
      localStorage.setItem(
        'pantryList',
        JSON.stringify([...state.items, action.payload])
      )
      return {
        ...state,
        items: [...state.items, action.payload],
        lastAdded: action.payload.name,
      }
    case 'EDIT_ITEM':
      const updatedItem = action.payload

      const updatedItems = state.items.map((item) => {
        if (item.id === updatedItem.id) {
          return updatedItem
        }
        return item
      })

      localStorage.setItem('pantryList', JSON.stringify(updatedItems))

      return {
        ...state,
        items: updatedItems,
        lastAdded: updatedItem.name,
      }
    default:
      return state
  }
}
