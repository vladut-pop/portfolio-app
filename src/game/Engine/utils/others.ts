export const adjustToClosest = (value: number): number => {
  const remainder = value % 32
  return value - remainder
}
