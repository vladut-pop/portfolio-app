import { DisplayLargeProps } from './types'
import styles from './DisplayLarge.module.scss'
import { BaseDisplay } from '../BaseDisplay'

const DisplayLarge: React.FC<DisplayLargeProps> = ({ children, ...props }) => (
  <BaseDisplay className={styles.displayLarge} {...props}>
    {children}
  </BaseDisplay>
)

export default DisplayLarge
