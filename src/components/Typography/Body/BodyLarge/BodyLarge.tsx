import { BodyLargeProps } from './types'
import styles from './BodyLarge.module.scss'
import { BaseBody } from '../BaseBody'
import cn from 'classnames'

import { forwardRef } from 'react'

const BodyLarge: React.FC<BodyLargeProps> = forwardRef(({ children, className, ...props }, ref) => (
  <BaseBody className={cn(styles.bodyLarge, className)} {...props} ref={ref}>
    {children}
  </BaseBody>
))

export default BodyLarge
