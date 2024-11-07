import styles from './CheckBox.module.css'
import { CheckBoxProps } from './types'

const Checkbox: React.FC<CheckBoxProps> = ({ id, label, checked, onChange, ...props }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event)
    }
  }

  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={id}
        className={styles.checkbox__input}
        checked={checked}
        onChange={handleChange}
        aria-checked={checked}
        {...props}
      />
      <label htmlFor={id} className={styles.checkbox__label}>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
