import { forwardRef } from 'react'
import { IconProps } from './types'
import cn from 'classnames'
import styles from './Icon.module.scss'

const Icon: React.FC<IconProps> = forwardRef(({ children, size = 'medium' }, ref) => (
  <span className={cn('material-symbols-outlined', styles[size])} ref={ref}>
    {children}
  </span>
))

export default Icon
