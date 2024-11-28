import { BaseActorProps } from '../../Actors/BaseActor'

/**
 * Checks if a given rectangle is colliding with any of the provided actors.
 *
 * @param newX - The x-coordinate of the top-left corner of the rectangle.
 * @param newY - The y-coordinate of the top-left corner of the rectangle.
 * @param width - The width of the rectangle.
 * @param height - The height of the rectangle.
 * @param actors - An array of actor objects to check for collisions.
 * @param filterTypes - Optional array of actor types to exclude from collision detection.
 * @returns The actor that the rectangle is colliding with, or `null` if there is no collision.
 */
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
