import { actors } from '../../Actors/actors'
import { PlayerActor } from '../../Actors/Hoodie'
import { isColliding } from './collisionDetection'

export type Gravity = { gravity: number; gravitySpeed: number }

const MAXIMUM_GRAVITY_SPEED = 64

export const addGravity = (actor: PlayerActor) => {
  actor.gravity.gravitySpeed += actor.gravity.gravity
  actor.gravity.gravitySpeed = Math.min(actor.gravity.gravitySpeed, MAXIMUM_GRAVITY_SPEED)
  const newY = actor.position.y + actor.gravity.gravitySpeed
  if (isColliding(actor.position.x, newY, actor.sWidth, actor.sHeight, actors, ['PLAYER'])) {
    //TODO: Need a proper solution for impact
    actor.gravity.gravitySpeed = 0
  } else {
    actor.position.y = newY
  }
}
