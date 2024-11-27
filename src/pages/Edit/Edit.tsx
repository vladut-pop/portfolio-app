import { Input } from '../components/Input'
import styles from './Edit.module.css'
import { useAtom } from 'jotai'
import {
  canvasHeightBlocksAtom,
  canvasWidthBlocksAtom,
  hasGridAtom,
  selectedActorSrcAtom,
} from '../../atoms'
import { CheckBox } from '../components/CheckBox'
import { Accordion } from '../components/Accordion'
import * as blocks from '../../assets/images/blocks'
// import { At, GithubLogo } from '@phosphor-icons/react'

const Edit: React.FC = () => {
  const [canvasHeightBlocks, setCanvasHeightBlocks] = useAtom(canvasHeightBlocksAtom)
  const [canvasWidthBlocks, setCanvasWidthBlocks] = useAtom(canvasWidthBlocksAtom)
  const [selectedActorSrc, setSelectedActorSrc] = useAtom(selectedActorSrcAtom)
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

  const handleBlockSrc = (src: string) => {
    if (selectedActorSrc === src) {
      setSelectedActorSrc('')
    } else {
      setSelectedActorSrc(src)
    }
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
      <Accordion id="example" label="Blocks">
        {Object.entries(blocks).map(([name, src]) => (
          <button
            key={name}
            onClick={() => handleBlockSrc(src)}
            style={{
              border: selectedActorSrc === src ? '2px solid blue' : 'none',
              cursor: 'pointer',
              background: 'none',
              padding: 0,
              borderRadius: 0,
            }}
          >
            <img
              src={src}
              alt={name}
              style={{
                display: 'block',
              }}
            />
          </button>
        ))}
      </Accordion>
    </div>
  )
}

export default Edit
