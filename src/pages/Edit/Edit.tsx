import { Input } from '../components/Input'
import styles from './Edit.module.css'
import { useAtom } from 'jotai'
import { canvasHeightBlocksAtom, canvasWidthBlocksAtom, hasGridAtom } from '../../atoms'
import { CheckBox } from '../components/CheckBox'
// import { At, GithubLogo } from '@phosphor-icons/react'

const Edit: React.FC = () => {
  const [canvasHeightBlocks, setCanvasHeightBlocks] = useAtom(canvasHeightBlocksAtom)
  const [canvasWidthBlocks, setCanvasWidthBlocks] = useAtom(canvasWidthBlocksAtom)
  const [hasGrid, setHasGrid] = useAtom(hasGridAtom)

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCanvasHeightBlocks(Number(e.target.value))
  }

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCanvasWidthBlocks(Number(e.target.value))
  }
  const handleGridChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasGrid(Boolean(e.target.checked))
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
      <CheckBox id="grid" label="Grid" onChange={handleGridChange} checked={hasGrid} />
    </div>
  )
}

export default Edit
