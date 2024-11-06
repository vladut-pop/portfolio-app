import Chip from './Chip/Chip'
import styles from './Chips.module.css'
import { ChipsProps } from './types'

const Chips: React.FC<ChipsProps> = ({ chips }) => {
  return (
    <div className={styles.chips}>
      {chips.map(({ icon, heading, subheading }) => (
        <Chip icon={icon} heading={heading} subheading={subheading} />
      ))}
    </div>
  )
}

export default Chips
