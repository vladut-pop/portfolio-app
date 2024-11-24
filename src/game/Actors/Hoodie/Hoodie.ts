import red_hood from '../../../assets/images/characters/red_hood.png'
import { isColliding } from '../../Engine/utils'
import { addGravity } from '../../Engine/utils/gravity'
import { actors } from '../actors'
import { PlayerActor } from './types'

const redHoodImage = new Image()
redHoodImage.src = red_hood

export const Hoodie = (position = { x: 50, y: 100 }, speed = 250): PlayerActor => {
  return {
    position,
    type: 'PLAYER',
    size: { width: 64, height: 64 },
    animation: {
      src: '',
      spriteActions: {
        idle: { row: 0, frames: 2 },
        walk: { row: 1, frames: 12 },
        jump: { row: 3, frames: 12 },
      },
      currentFrame: 0,
      frameTimer: 0,
      frameInterval: 0.1,
      speed,
      currentAction: 'idle', // Add a property to track the current action
    },
    gravity: { gravity: 0.5, gravitySpeed: 0 },
    update(deltaTime, keys) {
      this.animation.frameTimer += deltaTime
      if (this.animation.frameTimer >= this.animation.frameInterval) {
        this.animation.currentFrame =
          (this.animation.currentFrame + 1) %
          this.animation.spriteActions[this.animation.currentAction].frames
        this.animation.frameTimer = 0
      }

      let newX = this.position.x
      let newY = this.position.y
      if (keys['ArrowUp'] || keys['W'] || keys[' '] || keys['w']) {
        newY -= this.animation.speed * deltaTime + 10
        this.animation.currentAction = 'jump'
      } else if (keys['ArrowDown'] || keys['S'] || keys['s']) {
        newY += this.animation.speed * deltaTime
        this.animation.currentAction = 'walk'
      } else if (keys['ArrowLeft'] || keys['A'] || keys['a']) {
        newX -= this.animation.speed * deltaTime
        this.animation.currentAction = 'walk'
      } else if (keys['ArrowRight'] || keys['D'] || keys['d']) {
        newX += this.animation.speed * deltaTime
        this.animation.currentAction = 'walk'
      } else {
        this.animation.currentAction = 'idle'
      }

      if (!isColliding(newX, newY, this.size.height, this.size.width, actors, ['PLAYER', 'BUG'])) {
        this.position.x = newX
        this.position.y = newY
      }

      addGravity(this)
    },
    draw(ctx) {
      ctx.fillStyle = 'red'
      ctx.fillRect(this.position.x, this.position.y, this.size.height, this.size.width)
      // ctx.drawImage(
      //   redHoodImage, // Image source
      //   this.size.width * this.currentFrame, // Source x
      //   this.size.height * this.spriteActions[this.animation.currentAction].row, // Source y
      //   this.size.width, // Source width
      //   this.size.height, // Source height
      //   this.position.x, // Destination x
      //   this.position.y, // Destination y
      //   this.size.width, // Destination width
      //   this.size.height, // Destination height
      // )
    },
  }
}
