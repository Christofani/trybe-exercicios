import { useState } from 'react';
import './App.css'
import Greeting from './components/Greeting'

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Greeting name="Daniel" />
      <Greeting name="Rafael" />
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <h3>{counter}</h3>
    </div>
  )
}

export default App
