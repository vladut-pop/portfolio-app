import React from 'react'
import styles from './Input.module.css'
import { InputProps } from './types'

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  required = false,
  ...props
}) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={styles.input}
        {...props}
      />
    </div>
  )
}

export default Input
