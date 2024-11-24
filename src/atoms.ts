import { atom } from 'jotai'

export const canvasHeightBlocksAtom = atom(9)
export const canvasWidthBlocksAtom = atom(16)
export const isEditAtom = atom(false)
export const hasGridAtom = atom(false)
export const ctxAtom = atom<CanvasRenderingContext2D | null>(null)
