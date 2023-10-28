import { DisplayLarge, DisplaySmall } from 'components/Typography/Displays'
import styles from './FragmentA.module.scss'
import cn from 'classnames'
import gsap from 'gsap'

import { getElement, getRandomNumber } from '../../utils/spliteText'

const FragmentA: React.FC = () => {
  const tl = gsap.timeline()

  const test = () => {
    const charElements = getElement('test')
    charElements.forEach((char) => {
      tl.to(
        char,
        {
          scale: getRandomNumber(-3, 3),
          duration: 4,
          opacity: 0.2,
          x: getRandomNumber(-600, 600),
          y: getRandomNumber(-600, 600),
          rotate: getRandomNumber(-360, 360),
          userSelect: 'none',
        },
        '<',
      )
      // tl.reverse()
    })
  }

  const reverse = () => {
    tl.reverse()
  }

  return (
    <div className={cn(styles.content)}>
      <DisplaySmall>by</DisplaySmall>
      <DisplayLarge id="test">Vladut POP</DisplayLarge>
      <button onClick={() => test()}>animation</button>
      <button onClick={() => reverse()}>reverse</button>
    </div>
  )
}

export default FragmentA
