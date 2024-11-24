export type SelectOption = {
  value: string
  label: string
  img: string
}

export type SelectProps = {
  options: SelectOption[]
  label: string
  className?: string
  onSelect: (option: SelectOption) => void
}
