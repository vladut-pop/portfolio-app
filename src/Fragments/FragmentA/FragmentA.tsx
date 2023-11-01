import { DisplayLarge, DisplaySmall } from 'components/Typography/Displays'
import styles from './FragmentA.module.scss'
import cn from 'classnames'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import { getApplicationSize, getElement, getRandomNumber } from '../../utils/spliteText'

const FragmentA: React.FC = () => {
  const displayLargeRef = useRef<HTMLHeadingElement>(null)
  const fragmentARef = useRef<HTMLDivElement>(null)
  // const tl = gsap.timeline()

  useLayoutEffect(() => {
    const charElements = getElement(displayLargeRef)
    charElements.forEach((char) => {
      gsap.to(char, {
        scrollTrigger: {
          trigger: displayLargeRef.current,
          // markers: true,
          start: '0px 40%',
          end: '+=400 top',
          toggleActions: 'play play reverse reverse',
        },
        zIndex: 1,
        scale: getRandomNumber(0.5, 3),
        duration: 4,
        opacity: 0.2,
        x: getRandomNumber(-getApplicationSize().width / 2, getApplicationSize().width / 2),
        y: getRandomNumber(-getApplicationSize().height / 3, getApplicationSize().height),
        rotate: getRandomNumber(-360, 360),
        userSelect: 'none',
      })
    })
  }, [])

  return (
    <div className={cn(styles.content)} ref={fragmentARef}>
      <DisplaySmall>by</DisplaySmall>
      <DisplayLarge ref={displayLargeRef}>Vladut POP</DisplayLarge>
    </div>
  )
}

export default FragmentA
