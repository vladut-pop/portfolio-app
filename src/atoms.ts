import { atom } from 'jotai'
import { BaseActorProps } from './game/Actors/BaseActor'

export const canvasHeightBlocksAtom = atom(9)
export const canvasWidthBlocksAtom = atom(16)
export const isEditAtom = atom(true)
export const hasGridAtom = atom(false)
export const ctxAtom = atom<CanvasRenderingContext2D | null>(null)
export const selectedActorSrcAtom = atom('')
export const clickedActorAtom = atom<BaseActorProps | null>(null)
