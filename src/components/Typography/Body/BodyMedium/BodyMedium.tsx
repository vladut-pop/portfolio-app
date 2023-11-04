import { BodyMediumProps } from './types'
import styles from './BodyMedium.module.scss'
import { BaseBody } from '../BaseBody'
import cn from 'classnames'
import { forwardRef } from 'react'

const BodyMedium: React.FC<BodyMediumProps> = forwardRef(
  ({ children, className, ...props }, ref) => (
    <BaseBody className={cn(styles.BodyMedium, className)} {...props} ref={ref}>
      {children}
    </BaseBody>
  ),
)

export default BodyMedium
