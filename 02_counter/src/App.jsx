import {useState} from 'react';
import './app.css';


function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(prevCounter => prevCounter >= 20 ? 0 : prevCounter + 1);
  }

  const decreaseValue = () => {
    setCounter(prevCounter => prevCounter <= 0 ? 0 : prevCounter - 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value : {counter}</h2>
      <div className="buttons">
        <button onClick={addValue}>Increase</button>
        <button onClick={decreaseValue}>Decrease</button>
      </div>
    </>
  )
}

export default App
