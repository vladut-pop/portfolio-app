import { BaseDisplayProps } from './types'
import cn from 'classnames'
import styles from './BaseDisplay.module.scss'

const BaseDisplay: React.FC<BaseDisplayProps> = ({ Tag = 'h1', children, className, ...props }) => (
  <Tag className={cn(styles.baseDisplay, className)} {...props}>
    {children}
  </Tag>
)

export default BaseDisplay
