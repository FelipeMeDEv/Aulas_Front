import { useState } from 'react'
import FirstComponent from './components/FirstComponent'
import Events from './components/Events'
import FocusBlurExample from './components/FocusBlurexample'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FirstComponent />
     <Events/>
     <FocusBlurExample />
    </>
  )
}

export default App
