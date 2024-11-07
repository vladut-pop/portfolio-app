import { useState, useEffect } from 'react'

export const useDrag = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseDown = (event: MouseEvent) => {
    setIsDragging(true)
    updatePosition(event)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging) {
      updatePosition(event)
      console.log('Dragging', position.x, position.y)
    }
  }
  //   https://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element
  const updatePosition = (event: MouseEvent) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()
      setPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      })
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
  }, [isDragging])

  console.log('useDrag', isDragging, position)

  return { isDragging, position }
}
