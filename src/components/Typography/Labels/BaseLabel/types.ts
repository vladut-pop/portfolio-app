export type BaseLabelProps = {
  Tag?: 'span' | 'p' | 'label'
  children: string | React.ReactNode[] | React.ReactNode //TODO: recheck this.
  className?: any
  ref?: React.Ref<any>
  // ref?: React.Ref<HTMLSpanElement | HTMLParagraphElement | HTMLLabelElement> //TODO:This should be correct, but because of having multiple tags, I'm guessing TS flags that it can be selected a wrong ref.
}
