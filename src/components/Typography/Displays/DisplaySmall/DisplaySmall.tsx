import { DisplaySmallProps } from './types'
import styles from './DisplaySmall.module.scss'
import { BaseDisplay } from '../BaseDisplay'
import { forwardRef } from 'react'

const DisplaySmall: React.FC<DisplaySmallProps> = forwardRef(({ children, ...props }, ref) => (
  <BaseDisplay className={styles.DisplaySmall} {...props} ref={ref}>
    {children}
  </BaseDisplay>
))

export default DisplaySmall
