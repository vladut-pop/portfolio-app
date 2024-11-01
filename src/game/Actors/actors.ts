import { BaseActorProps } from './BaseActor'
import { Block } from './Block'
import { Hoodie } from './Hoodie'

export const actors: BaseActorProps[] = [
  ...Array(16)
    .fill('')
    .map((_, i) => Block(64 * i, 64 * 8)),
  Block(128, 128),
  Hoodie(),
  // Instantiate other actors
]
