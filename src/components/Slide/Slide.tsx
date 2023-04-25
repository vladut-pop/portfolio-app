import styles from './Slide.module.scss'

type SlideProps = { title: string }

const Slide: React.FC<SlideProps> = ({ title }) => {
  return <div className={styles.slide}>{title}</div>
}

export default Slide
