import { image1, image2, image3, image4, image5 } from '../../../assets/images/backgrounds'
import { PlayerActor } from '../../Actors/Hoodie'

const images: HTMLImageElement[] = [image1, image2, image3, image4, image5].map((backgroundImg) => {
  const img = new Image()
  img.src = backgroundImg
  return img
})

export const canvasBackground = (ctx: CanvasRenderingContext2D, player: PlayerActor): void => {
  const { width, height } = ctx.canvas
  const GROUND_HEIGHT = 64

  // Parallax factors for each layer
  const parallaxFactors = [0.2, 0.5, 0.8, 0.6, 0.4]

  images.forEach((background, i) => {
    // Ensure the image is loaded before drawing
    if (!background.complete) return

    // Offset to align the backgrounds with the ground
    const groundOffset = height - background.height - GROUND_HEIGHT

    const parallaxFactor = parallaxFactors[i]

    // Calculate the background position based on the character's position
    const backgroundX = -player.position.x * parallaxFactor
    const backgroundY =
      groundOffset +
      ((background.height - player.position.y - player.size.height + groundOffset) *
        parallaxFactor) /
        2

    // Calculate the number of times the image needs to be drawn to cover the canvas width
    const numImages = Math.ceil(width / background.width) + 1

    for (let j = 0; j < numImages; j++) {
      ctx.drawImage(
        background,
        backgroundX + j * background.width,
        backgroundY,
        background.width,
        background.height,
      )
    }
  })
}
