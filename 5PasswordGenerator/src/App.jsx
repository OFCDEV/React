//useCallback is a React Hook that lets you cache a function definition between re-renders.
//useEffect is a React Hook that lets you synchronize a component with an external system.
//useRef is a React Hook that lets you reference a value that’s not needed for rendering.
import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow,setNumAllow] = useState(false)
  const [charAllow,setCharAllow] = useState(false)
  const [password,setPassword] = useState("")

  //useRef hook
  const passRef = useRef(null)
  //PW Generator
  const passwordGenerator= useCallback(()=>{
    //arrow func
    let pass=''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numAllow) str+="0123456789"
    if(charAllow) str+="!@#$%^&*()_-+={}[]~`/<>"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1)

      //Added randomly generated value to pass
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,numAllow,charAllow,setPassword])

  const copyPass = useCallback(()=>{
    
    //React works on browser so it has "window" feature but not in NextJS because it works on sever side
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,101); //Just for optimization
    window.navigator.clipboard.writeText(password)
  },[password])

  //calling the function(If we call the function by using callback hook it gives error by showing too many renders; react limit)So to avoid that we use useEffect hook
  useEffect(() => {
    passwordGenerator()
  },[length,numAllow,charAllow,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passRef}/>
          <button onClick={copyPass} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

        </div>
        {/* Range slider */}
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}} />
            <label>Length:{length}</label>

            <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numAllow}
              id='numberInput'
              onChange={()=>{setNumAllow((prev)=> !prev)}}/>
              <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllow}
              id='charInput'
              onChange={()=>{setCharAllow((prev)=> !prev)}}/>
              <label htmlFor="charInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
