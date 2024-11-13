import { BaseActorProps } from '../../Actors/BaseActor'

export const isColliding = (
  newX: number,
  newY: number,
  width: number,
  height: number,
  actors: BaseActorProps[],
  filterTypes?: BaseActorProps['type'][],
): BaseActorProps | null => {
  const filteredActors = filterTypes
    ? actors.filter((actor) => !filterTypes.includes(actor.type))
    : actors

  for (const block of filteredActors) {
    if (
      newX + width > block.position.x &&
      newX < block.position.x + block.size.width &&
      newY + height > block.position.y &&
      newY < block.position.y + block.size.height
    ) {
      return block
    }
  }
  return null
}
