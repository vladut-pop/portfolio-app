import { Gravity } from '../../Engine/utils/gravity'
import { Animation, BaseActorProps } from '../BaseActor'

export type PlayerActor = BaseActorProps & Gravity & Animation
