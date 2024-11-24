import { useRef, useEffect } from 'react'
import { useKeyInput } from './hooks/useKeyInput'
import { useDrag } from './hooks/useDrag'
import { canvasGrid, canvasBackground, gameLoop } from './utils'
import { actors } from '../Actors/actors'
import { useAtom } from 'jotai'
import {
  canvasHeightBlocksAtom,
  canvasWidthBlocksAtom,
  hasGridAtom,
  isEditAtom,
  ctxAtom,
} from '../../atoms'
import { isColliding } from './utils/collisionDetection'
import { PlayerActor } from '../Actors/Hoodie'

const GameCanvas = () => {
  const canvasRef = useRef(null)
  const keys = useKeyInput()
  const keysRef = useRef(keys)
  const [canvasHeightBlocks] = useAtom(canvasHeightBlocksAtom)
  const [canvasWidthBlocks] = useAtom(canvasWidthBlocksAtom)
  const [isEdit] = useAtom(isEditAtom)
  const [hasGrid] = useAtom(hasGridAtom)
  const hasGridRef = useRef(hasGrid)
  const isEditRef = useRef(isEdit)
  const [, setCtx] = useAtom(ctxAtom)
  const { isDraggingRef, positionRef } = useDrag(canvasRef)
  const BLOCK_SIZE = 64
  const CANVAS_HEIGHT = canvasHeightBlocks * BLOCK_SIZE // 9 tiles high
  const CANVAS_WIDTH = canvasWidthBlocks * BLOCK_SIZE // 16 tiles wide

  useEffect(() => {
    keysRef.current = keys
  }, [keys])

  useEffect(() => {
    hasGridRef.current = hasGrid
  }, [hasGrid])

  useEffect(() => {
    isEditRef.current = isEdit
  }, [isEdit])

  // TODO: get a better understanding of ref and gameLoop
  useEffect(() => {
    const canvas = canvasRef.current! as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    setCtx(ctx)
    const update = (deltaTime: number) => {
      // Update actors based on keys and deltaTime
      actors.forEach((actor) => actor.update(deltaTime, keysRef.current))
    }
    const render = () => {
      // Clear and redraw the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Get PLAYER position
      const player = actors.find((actor) => actor.type === 'PLAYER') as PlayerActor

      // Draw background with parallax effect
      canvasBackground(ctx, player)

      // Draw the grid
      hasGridRef.current && canvasGrid(ctx)

      // Draw actors
      actors.forEach((actor) => actor.draw(ctx))

      // Edit mode
      if (isEditRef.current) {
        // Draw border around actors
        actors.forEach((actor) => {
          ctx.strokeStyle = 'gray'
          ctx.lineWidth = 1
          ctx.setLineDash([5, 3])
          ctx.strokeRect(actor.position.x, actor.position.y, actor.size.width, actor.size.height)
          ctx.setLineDash([])
        })
      }

      // Drag and drop actors
      if (isDraggingRef.current) {
        const block = isColliding(positionRef.current.x, positionRef.current.y, 1, 1, actors)
        if (block) {
          block.position.x = positionRef.current.x - block.size.width / 2
          block.position.y = positionRef.current.y - block.size.height / 2
        }
      }
    }
    gameLoop(update, render)
  }, [])

  return <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
}

export default GameCanvas
