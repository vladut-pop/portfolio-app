import red_hood from '../../../assets/images/characters/red_hood.png'
import { isColliding } from '../../Engine/utils'
import { addGravity } from '../../Engine/utils/gravity'
import { actors } from '../actors'
import { PlayerActor } from './types'

const redHoodImage = new Image()
redHoodImage.src = red_hood

export const Hoodie = (position = { x: 50, y: 50 }, speed = 250): PlayerActor => {
  return {
    position,
    type: 'PLAYER',
    speed,
    // sHeight: 1463 / 11, // Dimensions of the sprite sheet divided by the number of frames
    // sWidth: 1344 / 12,
    spriteActions: {
      idle: { row: 0, frames: 1 },
      walk: { row: 1, frames: 12 },
      jump: { row: 3, frames: 12 },
    },
    sHeight: 64,
    sWidth: 64,
    scale: 2,
    currentFrame: 0,
    frameTimer: 0,
    frameInterval: 0.1,
    currentAction: 'idle', // Add a property to track the current action
    gravity: { gravity: 0.5, gravitySpeed: 0 },
    update(deltaTime, keys) {
      this.frameTimer += deltaTime
      if (this.frameTimer >= this.frameInterval) {
        this.currentFrame = (this.currentFrame + 1) % this.spriteActions[this.currentAction].frames
        this.frameTimer = 0
      }

      let newX = this.position.x
      let newY = this.position.y
      console.log()
      if (keys['ArrowUp'] || keys['W'] || keys[' '] || keys['w']) {
        newY -= this.speed * deltaTime + 10
        this.currentAction = 'jump'
      } else if (keys['ArrowDown'] || keys['S'] || keys['s']) {
        newY += this.speed * deltaTime
        this.currentAction = 'walk'
      } else if (keys['ArrowLeft'] || keys['A'] || keys['a']) {
        newX -= this.speed * deltaTime
        this.currentAction = 'walk'
      } else if (keys['ArrowRight'] || keys['D'] || keys['d']) {
        newX += this.speed * deltaTime
        this.currentAction = 'walk'
      } else {
        this.currentAction = 'idle'
      }

      if (!isColliding(newX, newY, 64, 64, actors)) {
        this.position.x = newX
        this.position.y = newY
      }

      addGravity(this)
    },
    draw(ctx) {
      ctx.fillStyle = 'red'
      ctx.fillRect(this.position.x, this.position.y, this.sHeight, this.sWidth)
      // ctx.drawImage(
      //   redHoodImage, // Image source
      //   this.sWidth * this.currentFrame, // Source x
      //   this.sHeight * spriteActions[this.currentAction].row, // Source y
      //   this.sWidth, // Source width
      //   this.sHeight, // Source height
      //   this.position.x, // Destination x
      //   this.position.y, // Destination y
      //   this.sWidth * this.scale, // Destination width
      //   this.sHeight * this.scale, // Destination height
      // )
    },
  }
}
