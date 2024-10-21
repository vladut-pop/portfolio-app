export const gameLoop = (update, render) => {
  let lastTime = performance.now()

  const loop = (currentTime) => {
    const deltaTime = (currentTime - lastTime) / 1000 // Convert to seconds
    lastTime = currentTime

    update(deltaTime)
    render()

    requestAnimationFrame(loop)
  }

  requestAnimationFrame(loop)
}
