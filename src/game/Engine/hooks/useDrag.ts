import { useEffect, useRef } from 'react'

export const useDrag = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  const isDraggingRef = useRef(false)
  const positionRef = useRef({ x: 0, y: 0 })

  const handleMouseDown = (event: MouseEvent) => {
    isDraggingRef.current = true
    updatePosition(event)
  }

  const handleMouseUp = () => {
    isDraggingRef.current = false
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (isDraggingRef.current) {
      updatePosition(event)
    }
  }

  const updatePosition = (event: MouseEvent) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()
      positionRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      }
    }
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return { isDraggingRef, positionRef }
}
