import { forwardRef } from 'react'
import { IconProps } from './types'
import cn from 'classnames'
import styles from './Icon.module.scss'

const Icon: React.FC<IconProps> = forwardRef(({ children, className, size = 'medium' }, ref) => (
  <span className={cn('material-symbols-outlined', className, styles[size])} ref={ref}>
    {children}
  </span>
))

export default Icon
