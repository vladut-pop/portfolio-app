import { ReactLenis } from '@studio-freight/react-lenis'
import { FragmentA, FragmentB, FragmentC } from 'Fragments'
const App: React.FC = () => {
  return (
    <ReactLenis root>
      <FragmentA />
      <FragmentB />
      <FragmentC />
    </ReactLenis>
  )
}

export default App
