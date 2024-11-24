import { isColliding } from '../../Engine/utils'
import { addGravity } from '../../Engine/utils/gravity'
import { actors } from '../actors'
import { BugActor } from './types'
import { hasLineOfSight } from './utils'
type Bug = {
  awarenessRange: number
}

export const Bug = (position = { x: 200, y: 200 }): BugActor & Bug => {
  return {
    position,
    type: 'BUG',
    size: { width: 32, height: 32 },
    gravity: { gravity: 0.1, gravitySpeed: 0 },
    awarenessRange: 128,
    update() {
      // if (
      //   isColliding(
      //     this.position.x + (this.size.width - this.awarenessRange) / 2,
      //     this.position.y + (this.size.height - this.awarenessRange) / 2,
      //     this.awarenessRange,
      //     this.awarenessRange,
      //     actors,
      //     ['BLOCK', 'BUG'],
      //   )
      // ) {
      //   console.log('bug there')
      // }
      addGravity(this)
    },
    draw(ctx) {
      hasLineOfSight(this)
      ctx.fillStyle = 'blue'
      ctx.fillRect(this.position.x, this.position.y, this.size.height, this.size.width)

      // Awareness range
      // ctx.strokeStyle = 'red'
      // ctx.strokeRect(
      //   this.position.x + (this.size.width - this.awarenessRange) / 2,
      //   this.position.y + (this.size.height - this.awarenessRange) / 2,
      //   this.awarenessRange,
      //   this.awarenessRange,
      // )
    },
  }
}
