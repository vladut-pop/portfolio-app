import styles from './SlideWrapper.module.scss'
import Slider from 'react-slick'

type SlideWrapperProps = { children: JSX.Element | JSX.Element[] }

const SlideWrapper: React.FC<SlideWrapperProps> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    className: 'center',
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 7000,
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '32px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Slider {...settings} className={styles.slideWrapper}>
      {children}
    </Slider>
  )
}

export default SlideWrapper
