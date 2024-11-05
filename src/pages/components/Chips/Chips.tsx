import Chip from './Chip/Chip'
import styles from './Chips.module.css'
import { ChipsProps } from './types'

const Chips: React.FC<ChipsProps> = ({ chips }) => {
  return (
    <ul>
      {chips.map(({ icon, heading, subheading }, index) => (
        <li key={index} className={styles.chips}>
          <Chip icon={icon} heading={heading} subheading={subheading} />
        </li>
      ))}
    </ul>
  )
}

export default Chips
