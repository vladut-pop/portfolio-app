import { LabelLargeProps } from './types'
import styles from './LabelLarge.module.scss'
import { BaseLabel } from '../BaseLabel'
import cn from 'classnames'

import { forwardRef } from 'react'

const LabelLarge: React.FC<LabelLargeProps> = forwardRef(
  ({ children, className, ...props }, ref) => (
    <BaseLabel className={cn(styles.labelLarge, className)} {...props} ref={ref}>
      {children}
    </BaseLabel>
  ),
)

export default LabelLarge
