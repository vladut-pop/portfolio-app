import { DisplayMediumProps } from './types'
import styles from './DisplayMedium.module.scss'
import { BaseDisplay } from '../BaseDisplay'
import cn from 'classnames'
import { forwardRef } from 'react'

const DisplayMedium: React.FC<DisplayMediumProps> = forwardRef(
  ({ children, className, ...props }, ref) => (
    <BaseDisplay className={cn(styles.DisplayMedium, className)} {...props} ref={ref}>
      {children}
    </BaseDisplay>
  ),
)

export default DisplayMedium
