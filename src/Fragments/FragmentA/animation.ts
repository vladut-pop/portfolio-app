import gsap from 'gsap'

// export const glitchEffect = (element: any) => {
//   // Create a tween to animate the properties of the element
//   const glitchTween = gsap
//     .timeline({ repeat: -1 })
//     .to(element, {
//       duration: 0.1,
//       skewX: 20, // Increase the skewX property to distort the element horizontally
//       scaleX: 1.2, // Increase the scal2eX property to stretch the element
//       yoyo: true, // Reverse the animation to create the glitch effect
//       ease: 'power4.inOut', // Apply an easing function for smoother animation
//     })
//     .to(element, {
//       duration: 0.04,
//       x: -10, // Shift the element horizontally to enhance the glitch effect
//       yoyo: true,
//       repeat: 1,
//       ease: 'power1.inOut',
//     })
//     .to(element, {
//       duration: 0.1,
//       skewX: 0, // Reset the skewX property to restore the element's original appearance
//       scaleX: 1,
//       yoyo: true,
//       ease: 'power4.inOut',
//     })

//   // Return the glitch tween so it can be controlled if needed
//   return glitchTween
// }

export function createGlitchEffect(elementRef: any) {
  const element = elementRef.current
  const text = element.textContent

  gsap.set(element, { visibility: 'visible' })

  const glitchTL = gsap.timeline({ repeat: -1, repeatDelay: 2 })

  glitchTL
    .to(element, { clipPath: 'rect(0, 900px, 0, 0)' })
    .to(element, { clip: 'rect(10px, 900px, 10px, 0)' })
    .to(element, { clip: 'rect(5px, 900px, 5px, 0)' })
    .to(element, { clip: 'rect(3px, 900px, 3px, 0)' })
    .to(element, { clip: 'rect(8px, 900px, 8px, 0)' })
    .to(element, { clip: 'rect(2px, 900px, 2px, 0)' })
    .to(element, { clip: 'rect(12px, 900px, 12px, 0)' })
    .to(element, { clip: 'rect(0, 900px, 0, 0)' })
    .to(element, { clip: 'rect(7px, 900px, 7px, 0)' })
    .to(element, { clip: 'rect(3px, 900px, 3px, 0)' })
    .to(element, { clip: 'rect(5px, 900px, 5px, 0)' })
    .to(element, { clip: 'rect(2px, 900px, 2px, 0)' })
    .to(element, { clip: 'rect(9px, 900px, 9px, 0)' })
    .to(element, { clip: 'rect(4px, 900px, 4px, 0)' })
    .to(element, { clip: 'rect(0, 900px, 0, 0)' })

  return glitchTL
}
