import { ReactLenis } from '@studio-freight/react-lenis'
import { FragmentA, FragmentB, FragmentC } from 'Fragments'
gsap.registerPlugin(ScrollTrigger)
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

const App: React.FC = () => {
  return (
    // TODO: Investigate lenis package, and if some options are needed.
    <ReactLenis root>
      <FragmentA />
      <FragmentB />
      <FragmentC />
    </ReactLenis>
  )
}

export default App
