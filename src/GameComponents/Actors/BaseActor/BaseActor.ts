import { BaseActorProps } from './types'

export default class BaseActor {
  private src: string
  private sWidth: number
  private sHeight: number
  private dx: number
  private dy: number
  private dWidth: number
  private dHeight: number
  private scale: number
  private row: number
  private frames: number
  private currentFrame: number
  private frameInterval: number
  private lastFrameTime: number
  private image: HTMLImageElement

  constructor({
    src,
    sWidth,
    sHeight,
    dx = 0,
    dy = 0,
    dWidth = sWidth,
    dHeight = sHeight,
    scale = 1,
    animationFrames,
  }: BaseActorProps) {
    this.src = src
    this.sWidth = sWidth
    this.sHeight = sHeight
    this.dx = dx
    this.dy = dy
    this.dWidth = dWidth
    this.dHeight = dHeight
    this.scale = scale
    this.row = animationFrames.row
    this.frames = animationFrames.frames
    this.currentFrame = 0
    this.frameInterval = 90 // milliseconds per frame
    this.lastFrameTime = 0

    // Load the image once in the constructor
    this.image = new Image()
    this.image.src = this.src
  }

  private updateFrame(timestamp: number) {
    if (timestamp - this.lastFrameTime >= this.frameInterval) {
      this.currentFrame = (this.currentFrame + 1) % this.frames
      this.lastFrameTime = timestamp
    }
  }

  draw(ctx: CanvasRenderingContext2D, timestamp: number) {
    this.updateFrame(timestamp)
    ctx.clearRect(this.dx, this.dy, this.dWidth * this.scale, this.dHeight * this.scale)
    console.log(' this.sWidth * this.currentFrame', this.sWidth * this.currentFrame)
    console.log(' this.sHeight * this.row', this.sHeight * this.row)
    ctx.drawImage(
      this.image, // Image source
      this.sWidth * this.currentFrame, // Source x
      this.sHeight * this.row, // Source y
      this.sWidth, // Source width
      this.sHeight, // Source height
      this.dx, // Destination x
      this.dy, // Destination y
      this.dWidth * this.scale, // Destination width
      this.dHeight * this.scale, // Destination height
    )
  }

  startAnimation(ctx: CanvasRenderingContext2D) {
    const animate = (timestamp: number) => {
      this.draw(ctx, timestamp)
      requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }
}
