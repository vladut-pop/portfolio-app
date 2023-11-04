import { LabelSmallProps } from './types'
import styles from './LabelSmall.module.scss'
import { BaseLabel } from '../BaseLabel'

import cn from 'classnames'

import { forwardRef } from 'react'

const LabelSmall: React.FC<LabelSmallProps> = forwardRef(
  ({ children, className, ...props }, ref) => (
    <BaseLabel className={cn(styles.LabelSmall, className)} {...props} ref={ref}>
      {children}
    </BaseLabel>
  ),
)

export default LabelSmall
