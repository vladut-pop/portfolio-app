export type Action = { row: number; frames: number }

export type BaseActorProps = {
  // src: string
  spriteActions: { [key: string]: Action }
  position: { x: number; y: number }
  type: 'PLAYER' | 'BLOCK' | 'BUG'
  sWidth: number
  sHeight: number
  currentFrame: number // TODO: better define the frame. Use the spriteActions
  currentAction: keyof BaseActorProps['spriteActions']
  update: (deltaTime: number, key: { [key: string]: boolean }) => void
  draw: (ctx: CanvasRenderingContext2D) => void
}
