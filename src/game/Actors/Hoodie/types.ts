import { BaseActorProps } from '../BaseActor'

export type HoodieProps = Partial<BaseActorProps> & {
  action?: 'idle' | 'walk' | 'jump'
}
