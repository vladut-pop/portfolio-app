import styles from './FragmentC.module.scss'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const FragmentC: React.FC = () => {
  const FragmentCRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const horizontalSections = gsap.utils.toArray('section')
    gsap.to(horizontalSections, {
      xPercent: -100 * (horizontalSections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: FragmentCRef.current,
        pin: true,
        scrub: 1,
        end: '+=3000',
        // markers: true,
      },
    })
  }, [])

  return (
    <div className={styles.content} ref={FragmentCRef}>
      <section style={{ backgroundColor: 'red' }}>SEC1</section>
      <section style={{ backgroundColor: 'gree' }}>SEC2</section>
      <section style={{ backgroundColor: 'yellow' }}>SEC3</section>
    </div>
  )
}
export default FragmentC
