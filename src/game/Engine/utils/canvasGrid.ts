export const canvasGrid = (ctx: CanvasRenderingContext2D): void => {
  const { width, height } = ctx.canvas
  const color = 'rgba(0, 0, 0, 0.8)'
  const GRID_BLOCK_SIZE = 32
  ctx.strokeStyle = color
  ctx.setLineDash([3])
  ctx.font = '14px serif'

  // Paint the grid vertically
  for (let y = 0; y < width; y += GRID_BLOCK_SIZE) {
    ctx.beginPath()
    ctx.moveTo(y, 0)
    ctx.lineTo(y, height)
    ctx.stroke()
    if (!(y % (GRID_BLOCK_SIZE * 2)) && y > 0) ctx.fillText(`x: ${y.toString()}`, y, 20)
  }

  // Paint the grid horizontally
  for (let x = 0; x < height; x += GRID_BLOCK_SIZE) {
    ctx.beginPath()
    ctx.moveTo(0, x)
    ctx.lineTo(width, x)
    ctx.stroke()
    if (!(x % (GRID_BLOCK_SIZE * 2)) && x > 0) ctx.fillText(`y: ${x.toString()}`, 20, x)
  }

  ctx.setLineDash([])
}
