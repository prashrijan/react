import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  // ref hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+= "!@#$%^&*(){}[]"

    for(let i = 1; i <= length; i++){
        let char = Math.floor((Math.random() * str.length) + 1)
        pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg text-orange-500 px-4 my-8 py-8 bg-gray-700'>
        <h2 className='text-white text-3xl text-center mb-4'>Password Generator</h2>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
              type="text" 
              value={password}
              placeholder='password'
              className='outline-none w-full p-3 text-xl'
              readOnly
              ref = {passwordRef}
              />
              <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 text-xl' onClick={copyPasswordToClipBoard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              min = {6}
              max = {100}
              value = {length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }}
              />
              <label htmlFor="">Length : {length}</label>
          </div>
           <div className='flex items-center gap-x-1'>
              <input 
                type="checkbox"
                defaultChecked = {numberAllowed}
                id='number'
                onChange={
                  () => {
                    setNumberAllowed(prev => !prev)
                  }
                }
                />
                <label htmlFor="number">Number</label>

                <input 
                type="checkbox"
                defaultChecked = {charAllowed}
                id='char'
                onChange={
                  () =>{
                    setCharAllowed(prev => !prev)
                  }
                }
                />
                <label htmlFor="char">Characters</label>
           </div>
        </div>
      </div>
    </>
  )
}

export default App
