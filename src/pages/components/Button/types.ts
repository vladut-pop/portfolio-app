export type ButtonProps = {
  variant?: 'primary'
  children: string
  className?: string
} & Omit<React.HTMLProps<HTMLButtonElement>, 'type'>
