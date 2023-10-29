import { BaseDisplayProps } from './types'
import cn from 'classnames'
import styles from './BaseDisplay.module.scss'
import { forwardRef } from 'react'

const BaseDisplay: React.FC<BaseDisplayProps> = forwardRef(
  ({ Tag = 'h1', children, className, ...props }, ref) => (
    <Tag className={cn(styles.baseDisplay, className)} {...props} ref={ref}>
      {children}
    </Tag>
  ),
)

export default BaseDisplay
