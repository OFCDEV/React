import { useState } from 'react'
import './App.css'

function App() {
  //useState give an array of two values; One is your program's default value(Like:True/False/0/'Null String'/)
  let [counter,setCounter] = useState(69)

  const addValue= ()=>{
    setCounter(counter+1)
    console.log("Clicked",counter);
  }
  const removeValue= ()=>{
    setCounter(counter-1)
    console.log("Clicked",counter);
  }
  return (
    <>
      <h1>Counter Value:{counter}</h1>
      <button onClick={addValue}>Add Value:{counter}</button>
      <br />
      <button onClick={removeValue}>Remove Valu:{counter}</button>
    </>
  )
}

export default App
