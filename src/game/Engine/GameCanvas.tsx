import { useRef, useEffect } from 'react'
import { useKeyInput } from './hooks/useKeyInput'
import { gameLoop, initializeCanvas } from './utils'
import { actors } from '../Actors/actors'

const GameCanvas = () => {
  const canvasRef = useRef(null)
  const keys = useKeyInput()
  const keysRef = useRef(keys)
  const CANVAS_HEIGHT = 64 * 9 // 9 tiles high
  const CANVAS_WIDTH = 64 * 16 // 16 tiles wide

  useEffect(() => {
    keysRef.current = keys
  }, [keys])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = initializeCanvas(canvas!)
    const update = (deltaTime) => {
      // Update actors based on keys and deltaTime
      actors.forEach((actor) => actor.update(deltaTime, keysRef.current))
    }
    const render = () => {
      // Clear and redraw the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      actors.forEach((actor) => actor.draw(ctx))
    }
    gameLoop(update, render)
  }, [])

  return <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
}

export default GameCanvas
