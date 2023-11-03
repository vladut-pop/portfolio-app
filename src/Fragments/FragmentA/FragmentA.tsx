import { DisplayLarge, DisplayMedium, DisplaySmall } from 'components/Typography/Displays'
import styles from './FragmentA.module.scss'
import cn from 'classnames'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'

import { getApplicationSize, getElement, getRandomNumber } from '../../utils/spliteText'

const FragmentA: React.FC = () => {
  const displayLargeRef = useRef<HTMLHeadingElement>(null)
  const fragmentARef = useRef<HTMLDivElement>(null) //TODO: it can be use to trigger the animation

  // const tl = gsap.timeline()

  // useLayoutEffect(() => {
  //   const charElements = getElement(displayLargeRef)
  //   charElements.forEach((char) => {
  //     gsap.to(char, {
  //       scrollTrigger: {
  //         trigger: displayLargeRef.current,
  //         // markers: true,
  //         start: '0px 40%',
  //         end: '+=400 top',
  //         toggleActions: 'play play reverse reverse',
  //       },
  //       zIndex: 1,
  //       scale: getRandomNumber(0.5, 3),
  //       duration: 4,
  //       opacity: 0.2,
  //       x: getRandomNumber(-getApplicationSize().width / 2, getApplicationSize().width / 2),
  //       y: getRandomNumber(-getApplicationSize().height / 3, getApplicationSize().height),
  //       rotate: getRandomNumber(-360, 360),
  //       userSelect: 'none',
  //       ease: 'power3.inOut',
  //     })
  //   })
  // }, [])

  return (
    <div className={cn(styles.content)} ref={fragmentARef}>
      <DisplayLarge ref={displayLargeRef} className={styles.title}>
        Vladut POP'<DisplayMedium Tag="span">s{'\n'}</DisplayMedium> playground{'\n'}
        <DisplayMedium Tag="span"> and{'\n'}</DisplayMedium> portfolio
      </DisplayLarge>
    </div>
  )
}

export default FragmentA
