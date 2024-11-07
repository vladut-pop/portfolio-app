import { useRef, useEffect } from 'react'
import { useKeyInput } from './hooks/useKeyInput'
import { canvasGrid, gameLoop } from './utils'
import { actors } from '../Actors/actors'
import { useAtom } from 'jotai'
import { canvasHeightBlocksAtom, canvasWidthBlocksAtom } from '../../atoms'

const GameCanvas = () => {
  const canvasRef = useRef(null)
  const keys = useKeyInput()
  const keysRef = useRef(keys)
  const [canvasHeightBlocks] = useAtom(canvasHeightBlocksAtom)
  const [canvasWidthBlocks] = useAtom(canvasWidthBlocksAtom)
  const BLOCK_SIZE = 64
  const CANVAS_HEIGHT = canvasHeightBlocks * BLOCK_SIZE // 9 tiles high
  const CANVAS_WIDTH = canvasWidthBlocks * BLOCK_SIZE // 16 tiles wide

  useEffect(() => {
    keysRef.current = keys
  }, [keys])

  useEffect(() => {
    const canvas = canvasRef.current! as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    const update = (deltaTime: number) => {
      // Update actors based on keys and deltaTime
      actors.forEach((actor) => actor.update(deltaTime, keysRef.current))
    }
    const render = () => {
      // Clear and redraw the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw the grid
      canvasGrid(ctx)

      // Draw actors
      actors.forEach((actor) => actor.draw(ctx))
    }
    gameLoop(update, render)
  }, [])

  return <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
}

export default GameCanvas
