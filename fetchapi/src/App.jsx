import { useState } from 'react'
import './App.css'
import Inputs from './Inputs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Inputs />
    </>
  )
}

export default App
