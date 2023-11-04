import { LabelMediumProps } from './types'
import styles from './LabelMedium.module.scss'
import { BaseLabel } from '../BaseLabel'
import cn from 'classnames'
import { forwardRef } from 'react'

const LabelMedium: React.FC<LabelMediumProps> = forwardRef(
  ({ children, className, ...props }, ref) => (
    <BaseLabel className={cn(styles.LabelMedium, className)} {...props} ref={ref}>
      {children}
    </BaseLabel>
  ),
)

export default LabelMedium
