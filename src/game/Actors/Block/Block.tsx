import { BlockActor } from './types'

export const Block = (x = 0, y = 0): BlockActor => {
  return {
    type: 'BLOCK',
    position: { x, y },
    sHeight: 64,
    sWidth: 64,
    scale: 1,
    update() {
      return null
    },
    draw(ctx) {
      ctx.fillStyle = 'green'
      ctx.fillRect(x, y, this.sWidth, this.sHeight)
    },
  }
}
