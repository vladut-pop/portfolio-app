import { BaseDisplayProps } from './types'

const BaseDisplay: React.FC<BaseDisplayProps> = ({ Tag = 'h1', children, className }) => (
  <Tag className={className}>{children}</Tag>
)

export default BaseDisplay
