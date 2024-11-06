export const canvasGrid = (ctx: CanvasRenderingContext2D): void => {
  const { width, height } = ctx.canvas
  const color = 'rgba(0, 0, 0, 0.3)'
  const GRID_BLOCK_SIZE = 32
  ctx.strokeStyle = color
  ctx.setLineDash([3])

  // Paint the grid vertically
  for (let x = 0; x < width; x += GRID_BLOCK_SIZE) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, height)
    ctx.stroke()
  }

  // Paint the grid horizontally
  for (let y = 0; y < height; y += GRID_BLOCK_SIZE) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }
}
