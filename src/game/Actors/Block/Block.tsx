import { BlockActor } from './types'

export const Block = (x = 0, y = 0): BlockActor => {
  return {
    type: 'BLOCK',
    position: { x, y },
    sHeight: 64,
    sWidth: 64,
    scale: 1,
    spriteActions: { idle: { row: 0, frames: 1 } },
    currentFrame: 1,
    currentAction: 'idle',
    update() {
      return null
    },
    draw(ctx) {
      ctx.fillStyle = 'green'
      ctx.fillRect(x, y, this.sWidth, this.sHeight)
    },
  }
}
