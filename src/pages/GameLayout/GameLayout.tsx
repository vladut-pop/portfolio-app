import { useAtom } from 'jotai'
import { isEditAtom } from '../../atoms'
import GameCanvas from '../../game/Engine/GameCanvas'
import { Edit } from '../Edit'

const GameLayout: React.FC = () => {
  const [isEdit] = useAtom(isEditAtom)

  return (
    <div>
      <GameCanvas />
      {isEdit && <Edit />}
    </div>
  )
}

export default GameLayout
