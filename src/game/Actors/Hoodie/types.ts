import { Gravity } from '../../Engine/utils/gravity'
import { BaseActorProps } from '../BaseActor'

export type PlayerActor = BaseActorProps & {
  frameTimer: number
  frameInterval: number
  speed: number
} & Gravity
