import { useState } from 'react'
import FirstComponent from './components/FirstComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FirstComponent />
    </>
  )
}

export default App
