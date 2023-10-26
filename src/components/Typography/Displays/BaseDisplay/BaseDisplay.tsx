import { BaseDisplayProps } from './types'
import cn from 'classnames'
import styles from './BaseDisplay.module.scss'

const BaseDisplay: React.FC<BaseDisplayProps> = ({ Tag = 'h1', children, className }) => (
  <Tag className={cn(styles.baseDisplay, className)}>{children}</Tag>
)

export default BaseDisplay
