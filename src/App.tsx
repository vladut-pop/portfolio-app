import { Route, Routes } from 'react-router-dom'
import GameCanvas from './game/Engine/GameCanvas'
import { CVPage, HomePage } from './pages'
import { Button } from './pages/components/Button'

const App: React.FC = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/game" element={<GameCanvas />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
      <Button className="edit__button">Edit mode</Button>
    </div>
  )
}

export default App
