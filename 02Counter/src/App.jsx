import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  let increase = () => {
    counter = counter + 1
    setCounter(counter)
    console.log(counter)
  }
  function decrease() {
    if (counter > 0) {
      setCounter(counter - 1)
    }
    else {
      console.log("Counter can't be negative");

    }
    // counter = counter - 1
    // setCounter(counter)
    // console.log(counter)
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>Counter value = {counter}</p>

      <button
        onClick={increase}>Increment</button>
      <br />
      <br />

      <button onClick={decrease}>Decrement</button>
    </>
  )
}

export default App
