export type InputProps = {
  id: string
  label: string
  type?: string // TODO: review this
  value: string | number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
} & React.HTMLProps<HTMLInputElement>
