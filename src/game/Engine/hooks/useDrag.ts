import { useEffect, useRef } from 'react'

export const useDrag = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  const isDraggingRef = useRef(false)
  const draggedPositionRef = useRef({ x: 0, y: 0 })

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
      draggedPositionRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      canvas.addEventListener('mousedown', handleMouseDown)
      canvas.addEventListener('mouseup', handleMouseUp)
      canvas.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      const canvas = canvasRef.current
      if (canvas) {
        canvas.removeEventListener('mousedown', handleMouseDown)
        canvas.removeEventListener('mouseup', handleMouseUp)
        canvas.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return { isDraggingRef, draggedPositionRef }
}
