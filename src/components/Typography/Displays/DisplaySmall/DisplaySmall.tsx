import { DisplaySmallProps } from './types'
import styles from './DisplaySmall.module.scss'
import { BaseDisplay } from '../BaseDisplay'

import cn from 'classnames'

import { forwardRef } from 'react'

const DisplaySmall: React.FC<DisplaySmallProps> = forwardRef(
  ({ children, className, ...props }, ref) => (
    <BaseDisplay className={cn(styles.DisplaySmall, className)} {...props} ref={ref}>
      {children}
    </BaseDisplay>
  ),
)

export default DisplaySmall
