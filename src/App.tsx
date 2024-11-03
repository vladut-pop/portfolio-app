import { Route, Routes } from 'react-router-dom'
import GameCanvas from './game/Engine/GameCanvas'
import { CVPage, HomePage } from './pages'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/game" element={<GameCanvas />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/cv" element={<CVPage />} />
    </Routes>
  )
}

export default App
