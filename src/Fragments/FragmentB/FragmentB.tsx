import Typography from 'components/Typography'
import styles from './FragmentB.module.scss'
import { useRef } from 'react'

const FragmentB: React.FC = () => {
  const fragmentBRef = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.content} ref={fragmentBRef}>
      <div className={styles.border}>
        <div className={styles.fragmentB}>
          <h1 className={styles.title}>Work in progress</h1>
          <Typography />
        </div>
      </div>
    </div>
  )
}
export default FragmentB
