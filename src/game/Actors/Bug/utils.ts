import { isColliding } from '../../Engine/utils'
import { PlayerActor } from '../Hoodie'
import { BugActor } from './types'
import { getDefaultStore } from 'jotai'
import { ctxAtom, isEditAtom } from '../../../atoms'
import { getBlocks, getPlayer } from '../utlis'
import { BaseActorProps } from '../BaseActor'

export const getDistanceBetweenActors = ({
  actorA,
  actorB = getPlayer(),
}: {
  actorA: BaseActorProps
  actorB?: BaseActorProps
}): { distance: number; steps: number; stepX: number; stepY: number } => {
  const dx = actorB.position.x - actorA.position.x + actorA.size.width / 2
  const dy = actorB.position.y - actorA.position.y + actorA.size.height / 2
  const distance = Math.sqrt(dx * dx + dy * dy)
  const steps = Math.ceil(distance / 10)
  const stepX = dx / steps
  const stepY = dy / steps
  return { distance: distance, steps: steps, stepX: stepX, stepY: stepY }
}

export const hasLineOfSight = ({
  bug,
  player = getPlayer(),
}: {
  bug: BugActor
  player?: PlayerActor
}): boolean => {
  const isEdit = getDefaultStore().get(isEditAtom)
  const ctx = getDefaultStore().get(ctxAtom)
  const { steps, stepX, stepY } = getDistanceBetweenActors({ actorA: bug, actorB: player })
  for (let i = 1; i <= steps; i++) {
    const x = bug.position.x + stepX * i
    const y = bug.position.y + stepY * i
    if (isColliding(x, y, 1, 1, getBlocks(), ['PLAYER', 'BUG'])) {
      // Draw line only in edit mode
      if (isEdit && ctx) {
        ctx.beginPath()
        ctx.moveTo(bug.position.x + bug.size.width / 2, bug.position.y + bug.size.height / 2)
        ctx.lineTo(x, y)
        ctx.stroke()
      }
      return false
    }
  }

  // Draw line only in edit mode
  if (isEdit && ctx) {
    ctx.beginPath()
    ctx.moveTo(bug.position.x + bug.size.width / 2, bug.position.y + bug.size.height / 2)
    ctx.lineTo(player.position.x, player.position.y)
    ctx.stroke()
  }
  return true
}
