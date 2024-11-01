import { BaseActorProps } from '../BaseActor'

export type BlockActor = Omit<
  BaseActorProps,
  'speed' | 'currentFrame' | 'frameTimer' | 'frameInterval' | 'currentAction' | 'gravity'
>
