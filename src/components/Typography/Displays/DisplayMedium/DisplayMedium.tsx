import { DisplayMediumProps } from './types'
import styles from './DisplayMedium.module.scss'
import cn from 'classnames'

const DisplayMedium: React.FC<DisplayMediumProps> = ({ Tag = 'h1', children, className }) => (
  <Tag className={cn(styles.DisplayMedium, className)}>{children}</Tag>
)

export default DisplayMedium
