import { useRef, useEffect } from 'react'
import { useKeyInput } from './hooks/useKeyInput'
import { useDrag } from './hooks/useDrag'
import { canvasGrid, canvasBackground, gameLoop, adjustToClosest } from './utils'
import { actors } from '../Actors/actors'
import { useAtom } from 'jotai'
import {
  canvasHeightBlocksAtom,
  canvasWidthBlocksAtom,
  hasGridAtom,
  isEditAtom,
  ctxAtom,
  selectedActorSrcAtom,
  clickedActorAtom,
} from '../../atoms'
import { isColliding } from './utils/collisionDetection'
import { PlayerActor } from '../Actors/Hoodie'
import { Block } from '../Actors/Block'
import { useClick } from './hooks/useClick'

const GameCanvas = () => {
  const canvasRef = useRef(null)
  const keys = useKeyInput()
  const keysRef = useRef(keys)
  const [canvasHeightBlocks] = useAtom(canvasHeightBlocksAtom)
  const [canvasWidthBlocks] = useAtom(canvasWidthBlocksAtom)
  const [selectedActorSrc] = useAtom(selectedActorSrcAtom)
  const [isEdit] = useAtom(isEditAtom)
  const [clickedActor] = useAtom(clickedActorAtom)
  const clickedActorRef = useRef(clickedActor)
  const [hasGrid] = useAtom(hasGridAtom)
  const hasGridRef = useRef(hasGrid)
  const selectedActorSrcRef = useRef(selectedActorSrc)
  const isEditRef = useRef(isEdit)
  const [, setCtx] = useAtom(ctxAtom)
  const { isDraggingRef, draggedPositionRef } = useDrag(canvasRef)
  const { isClickedRef, clickedPositionRef } = useClick(canvasRef)
  const BLOCK_SIZE = 64
  const CANVAS_HEIGHT = canvasHeightBlocks * BLOCK_SIZE // 9 tiles high
  const CANVAS_WIDTH = canvasWidthBlocks * BLOCK_SIZE // 16 tiles wide

  useEffect(() => {
    keysRef.current = keys
  }, [keys])

  useEffect(() => {
    selectedActorSrcRef.current = selectedActorSrc
  }, [selectedActorSrc])

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

      // Click to select actors
      if (isEditRef.current && isClickedRef.current) {
        clickedActorRef.current = isColliding(
          clickedPositionRef.current.x,
          clickedPositionRef.current.y,
          1,
          1,
          actors,
        )
        isClickedRef.current = false
      }

      // Drag and drop actors
      if (isDraggingRef.current && isEditRef.current && clickedActorRef.current) {
        clickedActorRef.current.position.x = adjustToClosest(draggedPositionRef.current.x)
        clickedActorRef.current.position.y = adjustToClosest(draggedPositionRef.current.y)
      }

      if (
        isDraggingRef.current &&
        !isColliding(
          adjustToClosest(draggedPositionRef.current.x),
          adjustToClosest(draggedPositionRef.current.y),
          32,
          32,
          actors,
        ) &&
        selectedActorSrcRef.current
      ) {
        actors.push(
          Block({
            position: {
              x: adjustToClosest(draggedPositionRef.current.x),
              y: adjustToClosest(draggedPositionRef.current.y),
            },
            src: selectedActorSrcRef.current,
          }),
        )
      }
    }
    gameLoop(update, render)
  }, [])

  return <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
}

export default GameCanvas
