import { BaseActorProps } from '../../Actors/BaseActor'

export const isColliding = (
  newX: number,
  newY: number,
  sWidth: number,
  sHeight: number,
  actors: BaseActorProps[],
): boolean => {
  return actors
    .filter((actor) => actor.type !== 'PLAYER')
    .some((block) => {
      return Boolean(
        newX + sWidth > block.position.x &&
          newX < block.position.x + block.sWidth * block.scale &&
          newY + sHeight > block.position.y &&
          newY < block.position.y + block.sHeight * block.scale,
      )
    })
}
