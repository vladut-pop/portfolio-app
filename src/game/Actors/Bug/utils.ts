import { isColliding } from '../../Engine/utils'
import { PlayerActor } from '../Hoodie'
import { BugActor } from './types'
import { getDefaultStore } from 'jotai'
import { ctxAtom, isEditAtom } from '../../../atoms'
import { getBlocks, getPlayer } from '../utlis'

export const hasLineOfSight = (bug: BugActor, player: PlayerActor = getPlayer()): boolean => {
  const isEdit = getDefaultStore().get(isEditAtom)
  const ctx = getDefaultStore().get(ctxAtom)

  // TODO: Need some refinement, the line is not working properly.
  const dx = player.position.x - bug.position.x + bug.size.width / 2
  const dy = player.position.y - bug.position.y + bug.size.height / 2

  const distance = Math.sqrt(dx * dx + dy * dy)
  const steps = Math.ceil(distance / 10)
  const stepX = dx / steps
  const stepY = dy / steps

  for (let i = 1; i <= steps; i++) {
    const x = bug.position.x + stepX * i
    const y = bug.position.y + stepY * i
    if (isColliding(x, y, 1, 1, getBlocks(), ['PLAYER', 'BUG'])) {
      if (isEdit && ctx) {
        ctx.beginPath() // Start a new path
        ctx.moveTo(bug.position.x + bug.size.width / 2, bug.position.y + bug.size.height / 2)
        ctx.lineTo(x, y)
        ctx.stroke()
      }
      return false
    }
  }
  if (isEdit && ctx) {
    ctx.beginPath() // Start a new path
    ctx.moveTo(bug.position.x + bug.size.width / 2, bug.position.y + bug.size.height / 2)
    ctx.lineTo(player.position.x, player.position.y)
    ctx.stroke()
  }
  return true
}
