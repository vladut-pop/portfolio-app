const sHeight = 64
const sWidth = 64

export const Block = (x = 0, y = 0) => {
  return {
    position: { x, y },
    update(deltaTime, keys) {
      return null
    },
    draw(ctx) {
      ctx.fillStyle = 'green'
      ctx.fillRect(x, y, sWidth, sHeight)
    },
  }
}
