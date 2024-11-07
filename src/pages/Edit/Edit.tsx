import { Button } from '../components/Button'
import { Input } from '../components/Input'
import styles from './Edit.module.css'
import { useAtom } from 'jotai'
import { canvasHeightBlocksAtom, canvasWidthBlocksAtom } from '../../atoms'
// import { At, GithubLogo } from '@phosphor-icons/react'

const Edit: React.FC = () => {
  const [canvasHeightBlocks, setCanvasHeightBlocks] = useAtom(canvasHeightBlocksAtom)
  const [canvasWidthBlocks, setCanvasWidthBlocks] = useAtom(canvasWidthBlocksAtom)

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCanvasHeightBlocks(Number(e.target.value))
  }

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCanvasWidthBlocks(Number(e.target.value))
  }

  return (
    <div className={styles.edit}>
      <Input
        id="rows"
        label="Rows"
        type="number"
        value={canvasHeightBlocks}
        onChange={handleHeightChange}
      />
      <Input
        id="cloumns"
        label="Columns"
        type="number"
        value={canvasWidthBlocks}
        onChange={handleWidthChange}
      />
      <Button className={styles.edit__button}>Edit mode</Button>
    </div>
  )
}

export default Edit
