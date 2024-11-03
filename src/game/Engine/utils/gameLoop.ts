export const gameLoop = (update: (deltaTime: number) => void, render: () => void): void => {
  let lastTime = performance.now()

  const loop = (currentTime: number) => {
    const deltaTime = (currentTime - lastTime) / 1000 // Convert to seconds
    lastTime = currentTime

    update(deltaTime)
    render()

    requestAnimationFrame(loop)
  }

  requestAnimationFrame(loop)
}
