import { BodySmallProps } from './types'
import styles from './BodySmall.module.scss'
import { BaseBody } from '../BaseBody'

import cn from 'classnames'

import { forwardRef } from 'react'

const BodySmall: React.FC<BodySmallProps> = forwardRef(({ children, className, ...props }, ref) => (
  <BaseBody className={cn(styles.BodySmall, className)} {...props} ref={ref}>
    {children}
  </BaseBody>
))

export default BodySmall
