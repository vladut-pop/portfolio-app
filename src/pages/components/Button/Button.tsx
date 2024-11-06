import styles from './Button.module.css'
import { ButtonProps } from './types'
import cn from 'classnames'

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className }) => {
  return <button className={cn(styles[variant], className)}>{children}</button>
}

export default Button
