import { Block } from './Block'
import { Bug } from './Bug'
import { Hoodie } from './Hoodie'

export const actors = [
  ...Array(16)
    .fill('')
    .map((_, i) => Block(64 * i, 64 * 8)),
  Block(128, 128),
  Hoodie(),
  Bug(),
  // Instantiate other actors
]
