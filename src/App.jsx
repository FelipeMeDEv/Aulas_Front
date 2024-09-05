import { useState } from 'react'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'
import FourthComponent from './components/FourthComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <FirstComponent /> 
     <SecondComponent />
     <ThirdComponent /> 
     <FourthComponent />
    </>
  )
}

export default App
