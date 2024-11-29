import { useEffect, useRef } from 'react'

export const useClick = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  const isClickedRef = useRef(false)
  const clickedPositionRef = useRef({ x: 0, y: 0 })

  const handleClick = (event: MouseEvent) => {
    isClickedRef.current = true
    updatePosition(event)
  }

  const updatePosition = (event: MouseEvent) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()
      clickedPositionRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      canvas.addEventListener('mousedown', handleClick)
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('mousedown', handleClick)
      }
    }
  }, [canvasRef])

  return { isClickedRef, clickedPositionRef }
}
