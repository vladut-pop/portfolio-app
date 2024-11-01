import { Gravity } from '../../Engine/utils/gravity'

export type Action = { row: number; frames: number }

export type BaseActorProps = {
  // src: string
  // spirteActions: {}
  position: { x: number; y: number }
  type: 'PLAYER' | 'BLOCK'
  speed: number
  sWidth: number
  sHeight: number
  scale: number
  currentFrame: number
  frameTimer: number
  frameInterval: number
  currentAction: string
  gravity: Gravity
  update: (deltaTime: number, key: { [key: string]: boolean }) => void
  draw: (ctx: CanvasRenderingContext2D) => void
}
