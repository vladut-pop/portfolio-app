import { Block } from './Block'
import { Bug } from './Bug'
import { Hoodie } from './Hoodie'
import carpet from '../../assets/images/blocks/Carpet_1.png'

export const actors = [
  ...Array(56)
    .fill('')
    .map((_, i) => Block({ position: { x: 64 * i, y: 64 * 8 }, src: carpet })),
  Hoodie(),
  Bug(),
  // Instantiate other actors
]
