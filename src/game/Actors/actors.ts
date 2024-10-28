import { Block } from './Block'
import { Hoodie } from './Hoodie'

export const actors = [
  ...Array(16)
    .fill('')
    .map((_, i) => Block(64 * i, 64 * 8)),
  Hoodie(),
  // Instantiate other actors
]
