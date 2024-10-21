import red_hood from '../../../assets/images/characters/red_hood.png'

const redHoodImage = new Image()
redHoodImage.src = red_hood

const sHeight = 1463 / 11 // Dimensions of the sprite sheet divided by the number of frames
const sWidth = 1344 / 12
const scale = 2
const spriteActions = {
  idle: { row: 6, frames: 12 },
  walk: { row: 1, frames: 12 },
  jump: { row: 2, frames: 12 },
}

export const hoodie = (x = 100, y = 100, speed = 50) => {
  return {
    position: { x, y },
    speed,
    currentFrame: 0,
    frameTimer: 0,
    frameInterval: 0.1,
    currentAction: 'idle', // Add a property to track the current action
    update(deltaTime, keys) {
      this.frameTimer += deltaTime
      if (this.frameTimer >= this.frameInterval) {
        this.currentFrame = (this.currentFrame + 1) % spriteActions[this.currentAction].frames
        this.frameTimer = 0
      }
      if (keys['ArrowUp']) {
        y -= speed * deltaTime
        this.currentAction = 'jump'
      } else if (keys['ArrowDown']) {
        y += speed * deltaTime
        this.currentAction = 'walk'
      } else if (keys['ArrowLeft']) {
        x -= speed * deltaTime
        this.currentAction = 'walk'
      } else if (keys['ArrowRight']) {
        x += speed * deltaTime
        this.currentAction = 'walk'
      } else {
        this.currentAction = 'idle'
      }
      // Update position
      this.position = { x, y }
    },
    draw(ctx) {
      ctx.drawImage(
        redHoodImage, // Image source
        sWidth * this.currentFrame, // Source x
        sHeight * spriteActions[this.currentAction].row, // Source y
        sWidth, // Source width
        sHeight, // Source height
        this.position.x, // Destination x
        this.position.y, // Destination y
        sWidth * scale, // Destination width
        sHeight * scale, // Destination height
      )
    },
  }
}
