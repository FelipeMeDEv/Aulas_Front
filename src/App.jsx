import { useState } from 'react'
import FirstComponent from './components/FirstComponent'
import Events from './components/Events'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FirstComponent />
     <Events/>
    </>
  )
}

export default App
