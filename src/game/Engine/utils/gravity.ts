import { isEditAtom } from '../../../atoms'
import { getDefaultStore } from 'jotai'

import { actors } from '../../Actors/actors'
import { Position, Size } from '../../Actors/BaseActor'
import { isColliding } from './collisionDetection'

export type Gravity = { gravity: { gravity: number; gravitySpeed: number } }
export type GravityActor = Position & Size & Gravity

const MAXIMUM_GRAVITY_SPEED = 64

export const addGravity = (actor: GravityActor) => {
  if (getDefaultStore().get(isEditAtom)) return
  actor.gravity.gravitySpeed += actor.gravity.gravity
  actor.gravity.gravitySpeed = Math.min(actor.gravity.gravitySpeed, MAXIMUM_GRAVITY_SPEED)
  const newY = actor.position.y + actor.gravity.gravitySpeed
  if (
    isColliding(actor.position.x, newY, actor.size.width, actor.size.width, actors, [
      'PLAYER',
      'BUG',
    ])
  ) {
    //TODO: Need a proper solution for impact
    actor.gravity.gravitySpeed = 0
  } else {
    actor.position.y = newY
  }
}
