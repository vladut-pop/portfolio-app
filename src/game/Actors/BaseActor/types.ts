export type Action = { row: number; frames: number }

export type BaseActorProps = {
  src: string
  dx?: number
  dy?: number
  sx?: number
  sy?: number
  sWidth: number
  sHeight: number
  dWidth?: number
  dHeight?: number
  scale?: number
  animationFrames: Action
}
