type SlideProps = { title: string }

const Slide: React.FC<SlideProps> = ({ title }) => {
  return <div>{title}</div>
}

export default Slide
