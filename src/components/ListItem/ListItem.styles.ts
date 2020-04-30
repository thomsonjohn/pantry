import { IStyle } from 'fela'

import { Theme } from '../../Theme'

interface Style {
  body: IStyle
  bullet: IStyle
  controls: IStyle
  controlButton: object
  delete: object
  edit: object
  itemName: IStyle
  listItem: IStyle
  strike: IStyle
}

interface StyleProps {
  theme: Theme
  item: {
    toBuy: boolean
  }
}

const makeStyles = ({ theme, item }: StyleProps): Style => {
  return {
    body: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    bullet: {
      backgroundColor: item.toBuy ? theme.color.secondary : theme.color.accent,
      border: `2px solid ${item.toBuy ? theme.color.grey : theme.color.accent}`,
      borderRadius: '50%',
      cursor: 'pointer',
      height: '18px',
      marginRight: '.8em',
      outline: 'none',
      width: '18px',
    },
    controls: {
      alignContent: 'center',
      display: 'grid',
      gridGap: '10px',
      gridTemplateColumns: '60px 60px',
      justifyContent: 'end',
    },
    controlButton: {
      backgroundColor: theme.color.secondary,
      border: `1px solid ${theme.color.primary}`,
      borderRadius: '10px',
      color: theme.color.primary,
      cursor: 'pointer',
      outline: 'none',
      padding: '.4em',
      width: '60px',
      ':hover': {
        backgroundColor: theme.color.primary,
        color: theme.color.secondary,
      },
    },
    delete: {
      border: `1px solid red`,
      color: 'red',
      ':hover': {
        backgroundColor: 'red',
        color: theme.color.secondary,
      },
    },
    edit: {
      border: '1px solid orange',
      color: 'orange',
      ':hover': {
        backgroundColor: 'orange',
        color: theme.color.secondary,
      },
    },
    itemName: {
      color: item.toBuy ? theme.color.primary : theme.color.grey,
    },
    listItem: {
      borderBottom: `1px solid ${theme.color.grey}`,
      display: 'flex',
      flexDirection: 'column',
      margin: '0 0.8em',
      color: theme.color.primary,
      padding: '.8em 0',
    },
    strike: {
      color: theme.color.accent,
      textDecoration: item.toBuy ? 'none' : 'line-through',
    },
  }
}

export default makeStyles
