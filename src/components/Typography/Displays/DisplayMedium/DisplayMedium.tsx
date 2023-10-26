import { DisplayMediumProps } from './types'
import styles from './DisplayMedium.module.scss'
import { BaseDisplay } from '../BaseDisplay'

const DisplayMedium: React.FC<DisplayMediumProps> = ({ children, ...props }) => (
  <BaseDisplay className={styles.DisplayMedium} {...props}>
    {children}
  </BaseDisplay>
)

export default DisplayMedium
