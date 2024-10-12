import { HoodieProps } from './types'
import { BaseActor } from '../BaseActor'
import red_hood from '../../../assets/images/characters/red_hood.png'

class Hoodie extends BaseActor {
  constructor({ action = 'idle', ...props }: HoodieProps) {
    const spriteActions = {
      idle: { row: 6, frames: 12 },
      walk: { row: 1, frames: 12 },
      jump: { row: 2, frames: 12 },
    }

    const defaultHoodieProps = {
      src: red_hood,
      sHeight: 1463 / 11, // Dimensions of the sprite sheet divided by the number of frames
      sWidth: 1344 / 12,
      scale: 2,
      animationFrames: spriteActions[action],
    }

    super({ ...defaultHoodieProps, ...props })
  }
}

export default Hoodie
