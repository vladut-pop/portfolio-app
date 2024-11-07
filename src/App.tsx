import { Route, Routes } from 'react-router-dom'
import { CVPage, GameLayout, HomePage } from './pages'
import { Button } from './pages/components/Button'
import { useAtom } from 'jotai'
import { isEditAtom } from './atoms'
const App: React.FC = () => {
  const [isEdit, setIsEdit] = useAtom(isEditAtom)

  return (
    <div className="container">
      <Routes>
        <Route path="/game" element={<GameLayout />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
      <Button className="edit__button" onClick={() => setIsEdit(!isEdit)}>
        Edit mode
      </Button>
    </div>
  )
}

export default App
