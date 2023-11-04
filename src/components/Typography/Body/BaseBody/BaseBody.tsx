import { BaseBodyProps } from './types'
import cn from 'classnames'
import styles from './BaseBody.module.scss'
import { forwardRef } from 'react'

const BaseBody: React.FC<BaseBodyProps> = forwardRef(
  ({ Tag = 'p', children, className, ...props }, ref) => (
    <Tag className={cn(styles.baseBody, className)} {...props} ref={ref}>
      {children}
    </Tag>
  ),
)

export default BaseBody
