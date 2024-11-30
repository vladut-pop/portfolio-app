import { addGravity } from '../../Engine/utils/gravity'
import { BugActor } from './types'
import { getDistanceBetweenActors, hasLineOfSight } from './utils'
import dialog_1 from '../../../assets/images/characters/actions/dialog_1.png'

const awakenedImage = new Image()
awakenedImage.src = dialog_1

type Bug = {
  awarenessRange: number
  awakened: boolean
}

export const Bug = (position = { x: 200, y: 200 }): BugActor & Bug => {
  return {
    position,
    type: 'BUG',
    size: { width: 32, height: 32 },
    gravity: { gravity: 0.1, gravitySpeed: 0 },
    awarenessRange: 256,
    awakened: false,
    update() {
      const { distance } = getDistanceBetweenActors({ actorA: this })
      if (distance < this.awarenessRange) {
        this.awakened = true
      } else {
        this.awakened = false
      }

      addGravity(this)
    },
    draw(ctx) {
      if (hasLineOfSight({ bug: this }) && this.awakened) {
        ctx.drawImage(awakenedImage, this.position.x - 16, this.position.y - 48, 32, 32)
      }
      ctx.fillStyle = 'blue'
      ctx.fillRect(this.position.x, this.position.y, this.size.height, this.size.width)
    },
  }
}
