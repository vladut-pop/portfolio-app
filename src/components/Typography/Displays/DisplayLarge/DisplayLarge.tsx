import { DisplayLargeProps } from './types'
import styles from './DisplayLarge.module.scss'
import { BaseDisplay } from '../BaseDisplay'
import { forwardRef } from 'react'

const DisplayLarge: React.FC<DisplayLargeProps> = forwardRef(({ children, ...props }, ref) => (
  <BaseDisplay className={styles.displayLarge} {...props} ref={ref}>
    {children}
  </BaseDisplay>
))

export default DisplayLarge
