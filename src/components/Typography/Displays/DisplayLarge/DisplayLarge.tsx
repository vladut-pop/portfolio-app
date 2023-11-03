import { DisplayLargeProps } from './types'
import styles from './DisplayLarge.module.scss'
import { BaseDisplay } from '../BaseDisplay'
import cn from 'classnames'

import { forwardRef } from 'react'

const DisplayLarge: React.FC<DisplayLargeProps> = forwardRef(
  ({ children, className, ...props }, ref) => (
    <BaseDisplay className={cn(styles.displayLarge, className)} {...props} ref={ref}>
      {children}
    </BaseDisplay>
  ),
)

export default DisplayLarge
