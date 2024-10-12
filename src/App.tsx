import { Hoodie } from './GameComponents/Actors/Hoodie'
import { useEffect } from 'react'

const App: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas')
    const ctx = (canvas as HTMLCanvasElement).getContext('2d')
    const hoodie = new Hoodie({})
    hoodie.startAnimation(ctx!)
  }, [])

  return (
    <div className="App">
      <canvas id="canvas" width={500} height={400} />
    </div>
  )
}

export default App
