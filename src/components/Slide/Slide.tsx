import Typography from 'components/Typography'
import styles from './Slide.module.scss'

const Slide: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.border}>
        <div className={styles.slide}>
          <h1 className={styles.title}>Work in progress</h1>
          <Typography />
          <button onClick={() => console.log('test')}>ts</button>
        </div>
      </div>
    </div>
  )
}
export default Slide
