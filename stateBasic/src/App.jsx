import { useState } from 'react';
import {sculptureList} from './data.js'
import './App.css'
function App() {
  const[index, setIndex] = useState(0);
  const[showMore, setShowMore] = useState(false)

  let sculpture = sculptureList[index]

  function handleClick(){
    setIndex(index + 1)
        
  }

  function handlePrevClick(){
    setIndex(index - 1)
  }

  function handleMoreClick(){
    setShowMore(prev => !prev)
  }

  return (
    <>
    <div 
      className="container flex items-center h-screen w-full justify-center bg-slate-700 flex-col text-white gap-3">
      <p>Image of ({index + 1} of {sculptureList.length})</p>
      <h2 
        className='text-2xl'>
          {sculpture.name}
      </h2>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt} />
      <h3 className='text-xl'>{sculpture.artist}</h3>
      <button 
        className='underline cursor-pointer text-white px-3 py-2 rounded-lg text-xl '
        onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p className='w-2/4 text-center'>{sculpture.description}</p>}
      <div className="btn-container flex gap-3">
        <button 
          className='bg-orange-500 text-white px-3 py-2 rounded-lg text-xl cursor-pointer disabled:bg-slate-300'
          onClick={handlePrevClick}
          disabled = {index <= 0 }
          >
          Previous
        </button>
        <button 
          className='bg-orange-500 text-white px-3 py-2 rounded-lg text-xl cursor-pointer disabled:bg-slate-300'
          onClick={handleClick}
          disabled = {index === 11}
          >
          Next
        </button>
      </div>
    </div>
    </>
  )
}

export default App
