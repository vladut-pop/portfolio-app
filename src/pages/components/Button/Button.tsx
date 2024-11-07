import styles from './Button.module.css'
import { ButtonProps } from './types'
import cn from 'classnames'

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  return (
    <button className={cn(styles[variant], className)} {...props}>
      {children}
    </button>
  )
}

export default Button
