import Typography from 'components/Typography'
import styles from './FragmentB.module.scss'

const FragmentB: React.FC = () => {
  return (
    <div className={styles.container}>
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
