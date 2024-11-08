import { BaseActorProps } from '../../Actors/BaseActor'

export const isColliding = (
  newX: number,
  newY: number,
  sWidth: number,
  sHeight: number,
  actors: BaseActorProps[],
  filterTypes?: BaseActorProps['type'][],
): BaseActorProps | null => {
  const filteredActors = filterTypes
    ? actors.filter((actor) => !filterTypes.includes(actor.type))
    : actors

  for (const block of filteredActors) {
    if (
      newX + sWidth > block.position.x &&
      newX < block.position.x + block.sWidth * block.scale &&
      newY + sHeight > block.position.y &&
      newY < block.position.y + block.sHeight * block.scale
    ) {
      return block
    }
  }
  return null
}
