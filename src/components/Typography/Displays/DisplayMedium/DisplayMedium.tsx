import { DisplayMediumProps } from './types'
import styles from './DisplayMedium.module.scss'
import { BaseDisplay } from '../BaseDisplay'
import { forwardRef } from 'react'

const DisplayMedium: React.FC<DisplayMediumProps> = forwardRef(({ children, ...props }, ref) => (
  <BaseDisplay className={styles.DisplayMedium} {...props} ref={ref}>
    {children}
  </BaseDisplay>
))

export default DisplayMedium
