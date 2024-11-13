export type Action = { row: number; frames: number }
export type Position = { position: { x: number; y: number } }
export type Size = { size: { width: number; height: number } }

export type BaseActorProps = {
  // src: string
  spriteActions: { [key: string]: Action }
  type: 'PLAYER' | 'BLOCK' | 'BUG'
  currentFrame: number // TODO: better define the frame. Use the spriteActions
  currentAction: keyof BaseActorProps['spriteActions']
  update: (deltaTime: number, key: { [key: string]: boolean }) => void
  draw: (ctx: CanvasRenderingContext2D) => void
} & Size &
  Position
