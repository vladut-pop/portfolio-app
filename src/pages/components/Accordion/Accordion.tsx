import React, { useState } from 'react'
import styles from './Accordion.module.css'
import { AccordionProps } from './types'

const Accordion: React.FC<AccordionProps> = ({ id, label, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.accordion}>
      <button
        id={id}
        className={styles.accordion__button}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        onClick={handleToggle}
      >
        {label}
      </button>
      <div
        id={`${id}-content`}
        aria-labelledby={id}
        className={styles.accordion__content}
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  )
}

export default Accordion
