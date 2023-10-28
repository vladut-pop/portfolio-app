export type BaseDisplayProps = {
  Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: string
  className?: any
  id?: string
}

// TODO: check HTMLHeadingElement and see if can be used with BaseDisplayProps, maybe id prop it will not be needed afterwards
