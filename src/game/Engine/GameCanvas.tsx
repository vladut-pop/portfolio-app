import { useRef, useEffect } from 'react'
import { useKeyInput } from './hooks/useKeyInput'
import { gameLoop, initializeCanvas } from './utils'
import { actors } from '../Actors/actors'

const GameCanvas = () => {
  const canvasRef = useRef(null)
  const keys = useKeyInput()
  const keysRef = useRef(keys)

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

  return <canvas ref={canvasRef} width={800} height={600} />
}

export default GameCanvas
