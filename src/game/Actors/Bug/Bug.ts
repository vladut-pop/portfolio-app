import { addGravity } from '../../Engine/utils/gravity'
import { BugActor } from './types'

export const Bug = (position = { x: 200, y: 200 }): BugActor => {
  return {
    position,
    type: 'BUG',
    size: { width: 32, height: 32 },
    gravity: { gravity: 0.1, gravitySpeed: 0 },
    update() {
      // isColliding()
      addGravity(this)
    },
    draw(ctx) {
      ctx.fillStyle = 'blue'
      ctx.fillRect(this.position.x, this.position.y, this.size.height, this.size.width)
    },
  }
}
