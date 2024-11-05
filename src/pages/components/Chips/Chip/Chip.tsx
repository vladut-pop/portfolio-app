import styles from './Chip.module.css'
import { ChipProps } from './types'

const Chip: React.FC<ChipProps> = ({ icon, heading, subheading }) => {
  return (
    <div className={styles.chip}>
      {icon}
      <div className={styles.chip__description}>
        <h4 className={styles.chip__heading}>{heading}</h4>
        <p className={styles.chip__subheading}>{subheading}</p>
      </div>
    </div>
  )
}

export default Chip
