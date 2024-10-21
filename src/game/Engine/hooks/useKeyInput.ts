import { useState, useEffect } from 'react'

export const useKeyInput = () => {
  const [keys, setKeys] = useState({})

  const handleKeyDown = (e: KeyboardEvent) => {
    setKeys((prev) => ({ ...prev, [e.key]: true }))
  }

  const handleKeyUp = (e: KeyboardEvent) => {
    setKeys((prev) => ({ ...prev, [e.key]: false }))
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return keys
}
