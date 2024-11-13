import { BlockActor } from './types'

export const Block = (x = 0, y = 0): BlockActor => {
  return {
    type: 'BLOCK',
    position: { x, y },
    size: { width: 64, height: 64 },
    spriteActions: { idle: { row: 0, frames: 1 } },
    currentFrame: 1,
    currentAction: 'idle',
    update() {
      return null
    },
    draw(ctx) {
      ctx.fillStyle = 'green'
      ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
    },
  }
}
