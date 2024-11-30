import { BlockActor } from './types'

export const Block = ({ position: { x = 0, y = 0 }, src = '', scale = 2 }): BlockActor => {
  const img = new Image()
  img.src = src

  return {
    type: 'BLOCK',
    position: { x, y },
    scale: scale,
    size: { width: 32 * scale, height: 32 * scale },
    src: src,
    update() {
      return null
    },
    draw(ctx) {
      if (src !== '') {
        if (img.complete) {
          ctx.drawImage(img, this.position.x, this.position.y, this.size.width, this.size.height)
        } else {
          img.onload = () => {
            ctx.drawImage(img, this.position.x, this.position.y, this.size.width, this.size.height)
          }
        }
      } else {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
      }
    },
  }
}
