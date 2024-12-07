import styles from './Section.module.css'
import { SectionProps } from './types'

const Section: React.FC<SectionProps> = ({ title, children, icon }) => {
  return (
    <div>
      <div className={styles.selection__icon}>
        <div>{icon}</div>
        <h3>{title}</h3>
      </div>
      {children}
    </div>
  )
}

export default Section
