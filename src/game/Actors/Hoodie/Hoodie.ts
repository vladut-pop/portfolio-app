import red_hood from '../../../assets/images/characters/red_hood.png'

const redHoodImage = new Image()
redHoodImage.src = red_hood

const sHeight = 1463 / 11 // Dimensions of the sprite sheet divided by the number of frames
const sWidth = 1344 / 12
const scale = 2
const spriteActions = {
  idle: { row: 0, frames: 1 },
  walk: { row: 1, frames: 12 },
  jump: { row: 3, frames: 12 },
  q: { row: 0, frames: 12 },
  w: { row: 1, frames: 12 },
  e: { row: 2, frames: 12 },
  r: { row: 3, frames: 12 },

  a: { row: 4, frames: 12 },
  s: { row: 5, frames: 12 },
  d: { row: 6, frames: 12 },
  f: { row: 7, frames: 12 },

  z: { row: 8, frames: 12 },
  x: { row: 9, frames: 12 },
  c: { row: 10, frames: 7 },
}

export const Hoodie = (x = 100, y = 100, speed = 50) => {
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

      if (keys['q']) this.currentAction = 'q'
      if (keys['w']) this.currentAction = 'w'
      if (keys['e']) this.currentAction = 'e'
      if (keys['r']) this.currentAction = 'r'

      if (keys['a']) this.currentAction = 'a'
      if (keys['s']) this.currentAction = 's'
      if (keys['d']) this.currentAction = 'd'
      if (keys['f']) this.currentAction = 'f'

      if (keys['z']) this.currentAction = 'z'
      if (keys['x']) this.currentAction = 'x'
      if (keys['c']) this.currentAction = 'c'
      if (keys['v']) this.currentAction = 'v'

      // if (keys['ArrowUp']) {
      //   y -= speed * deltaTime
      //   this.currentAction = 'jump'
      // } else if (keys['ArrowDown']) {
      //   y += speed * deltaTime
      //   this.currentAction = 'walk'
      // } else if (keys['ArrowLeft']) {
      //   x -= speed * deltaTime
      //   this.currentAction = 'walk'
      // } else if (keys['ArrowRight']) {
      //   x += speed * deltaTime
      //   this.currentAction = 'walk'
      // } else {
      //   this.currentAction = 'idle'
      // }
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
