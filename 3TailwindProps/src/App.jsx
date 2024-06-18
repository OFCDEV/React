import { useState } from 'react'
import './App.css'
import Temp from './components/Temp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Temp username="Cumtie 1" btnText="click me"/>
      <Temp username="Cumtie 2" btnText="Follow me"/>
    </>
  )
}

export default App
