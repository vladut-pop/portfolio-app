import { BaseActorProps } from '../../Actors/BaseActor'

type CollisionResult = {
  collided: boolean
  block: BaseActorProps | null
}

export const isColliding = (
  newX: number,
  newY: number,
  sWidth: number,
  sHeight: number,
  actors: BaseActorProps[],
): CollisionResult => {
  for (const block of actors.filter((actor) => actor.type !== 'PLAYER')) {
    if (
      newX + sWidth > block.position.x &&
      newX < block.position.x + block.sWidth * block.scale &&
      newY + sHeight > block.position.y &&
      newY < block.position.y + block.sHeight * block.scale
    ) {
      return { collided: true, block }
    }
  }
  return { collided: false, block: null }
}
