import styles from './FragmentC.module.scss'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const FragmentC: React.FC = () => {
  const FragmentCRef = useRef<HTMLDivElement>(null)
  const horizontalSections = gsap.utils.toArray('section')

  useEffect(() => {
    gsap.to(horizontalSections, {
      xPercent: -100 * (horizontalSections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: FragmentCRef.current,
        pin: true,
        scrub: 1,
        end: '+=3000',
        markers: true,
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

// horizontalSections.forEach(function (sec, i) {

//   var thisPinWrap = sec.querySelector('.pin-wrap');
//   var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');

//   var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

//   gsap.fromTo(thisAnimWrap, {
//     x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue()
//   }, {
//     x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0,
//     ease: "none",
//     scrollTrigger: {
//       trigger: sec,
//       start: "top top",
//       end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
//       pin: thisPinWrap,
//       invalidateOnRefresh: true,
//       //anticipatePin: 1,
//       scrub: true,
//       //markers: true,
//     }
//   });

// });
