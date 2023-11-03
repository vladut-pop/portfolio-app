import { Ref } from 'react'

export type BaseDisplayProps = {
  Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
  children: string | React.ReactNode[] | React.ReactNode //TODO: recheck this.
  className?: any
  ref?: Ref<HTMLHeadingElement>
}
