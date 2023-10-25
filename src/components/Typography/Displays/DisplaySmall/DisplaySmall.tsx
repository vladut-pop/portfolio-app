import { DisplaySmallProps } from './types'
import styles from './DisplaySmall.module.scss'
import cn from 'classnames'

const DisplaySmall: React.FC<DisplaySmallProps> = ({ Tag = 'h1', children, className }) => (
  <Tag className={cn(styles.DisplaySmall, className)}>{children}</Tag>
)

export default DisplaySmall
