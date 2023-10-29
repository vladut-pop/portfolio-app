import { Ref } from 'react'

export type BaseDisplayProps = {
  Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: string
  className?: any
  ref?: Ref<HTMLHeadingElement>
}
