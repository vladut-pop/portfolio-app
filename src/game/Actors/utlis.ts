import { actors } from './actors'
import { BlockActor } from './Block/types'
import { PlayerActor } from './Hoodie'

export const getPlayer = (): PlayerActor => {
  return actors.find((actor) => actor.type === 'PLAYER') as PlayerActor
}

export const getBlocks = (): BlockActor[] => {
  return actors.filter((actor) => actor.type === 'BLOCK')
}
