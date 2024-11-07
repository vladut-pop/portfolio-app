import { Route, Routes } from 'react-router-dom'
import GameCanvas from './game/Engine/GameCanvas'
import { CVPage, Edit, HomePage } from './pages'

const App: React.FC = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/game" element={<GameCanvas />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
      <Edit />
    </div>
  )
}

export default App
