import React, { useState } from 'react'
import styles from './Select.module.css'
import { SelectProps, SelectOption } from './types'
import cn from 'classnames'

const Select: React.FC<SelectProps> = ({ options, label, className, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(null)

  const handleSelect = (option: SelectOption) => {
    setSelectedOption(option)
    setIsOpen(false)
    onSelect(option)
  }

  return (
    <div className={cn(styles.select, className)}>
      <button
        className={styles.selectToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? (
          <div className={styles.selectedOption}>
            <img src={selectedOption.img} alt="" className={styles.optionImage} />
            {selectedOption.label}
          </div>
        ) : (
          label
        )}
      </button>
      {isOpen && (
        <ul className={styles.selectMenu} role="listbox">
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={selectedOption?.value === option.value}
              className={styles.selectOption}
              onClick={() => handleSelect(option)}
            >
              <img src={option.img} alt="" className={styles.optionImage} />
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select
