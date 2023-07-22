import { useState } from 'react'
import './App.css'


import BoxGenerator from './components/BoxGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BoxGenerator/>
    </>
  )
}

export default App
