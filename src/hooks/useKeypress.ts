import { useState, useEffect } from 'react'

const useKeyPress = (targetKey: any): boolean => {
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = ({ key }: KeyboardEvent): void => {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }

  const upHandler = ({ key }: KeyboardEvent): void => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return (): void => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  })

  return keyPressed
}

export default useKeyPress
