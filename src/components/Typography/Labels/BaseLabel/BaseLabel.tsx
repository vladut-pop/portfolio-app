import { BaseLabelProps } from './types'
import cn from 'classnames'
import styles from './BaseLabel.module.scss'
import { forwardRef } from 'react'

const BaseLabel: React.FC<BaseLabelProps> = forwardRef(
  ({ Tag = 'label', children, className, ...props }, ref) => (
    <Tag className={cn(styles.baseLabel, className)} {...props} ref={ref}>
      {children}
    </Tag>
  ),
)

export default BaseLabel
