import { Block } from './Block'
import { Bug } from './Bug'
import { Hoodie } from './Hoodie'
import carpet from '../../assets/images/blocks/Carpet_1.png'

export const actors = [
  ...Array(16)
    .fill('')
    .map((_, i) => Block({ position: { x: 64 * i, y: 64 * 8 }, src: carpet })),
  Block({ position: { x: 128, y: 128 } }),
  Hoodie(),
  Bug(),
  // Instantiate other actors
]
