import { DisplayLargeProps } from './types'
import styles from './DisplayLarge.module.scss'
import cn from 'classnames'

const DisplayLarge: React.FC<DisplayLargeProps> = ({ Tag = 'h1', children, className }) => (
  <Tag className={cn(styles.displayLarge, className)}>{children}</Tag>
)

export default DisplayLarge
