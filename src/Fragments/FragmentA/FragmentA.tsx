import { DisplayLarge } from 'components/Typography/Displays'
import styles from './FragmentA.module.scss'
import cn from 'classnames'

const FragmentA: React.FC = () => (
  <div className={cn(styles.content)}>
    <DisplayLarge>Test</DisplayLarge>
  </div>
)

export default FragmentA
