export type Action = { row: number; frames: number }
export type Position = { position: { x: number; y: number } }
export type Size = { size: { width: number; height: number } }

export type Animation = {
  animation: {
    currentAction: keyof Animation['animation']['spriteActions']
    currentFrame: number // TODO: better define the frame. Use the spriteActions
    frameInterval: number
    frameTimer: number
    speed: number
    spriteActions: { [key: string]: Action }
    src: string
  }
}

export type BaseActorProps = {
  type: 'PLAYER' | 'BLOCK' | 'BUG'
  update: (deltaTime: number, key: { [key: string]: boolean }) => void
  draw: (ctx: CanvasRenderingContext2D) => void
} & Size &
  Position
