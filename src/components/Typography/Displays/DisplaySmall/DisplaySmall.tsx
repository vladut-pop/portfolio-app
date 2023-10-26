import { DisplaySmallProps } from './types'
import styles from './DisplaySmall.module.scss'
import { BaseDisplay } from '../BaseDisplay'

const DisplaySmall: React.FC<DisplaySmallProps> = ({ children, ...props }) => (
  <BaseDisplay className={styles.DisplaySmall} {...props}>
    {children}
  </BaseDisplay>
)

export default DisplaySmall
