// App.tsx
import { useState, useEffect } from 'react';
import fetchJoke from './utils/fecthJoke';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    async function getJoke() {
     const jokes = await fetchJoke();
     setJoke(jokes.joke);
    }
    getJoke();
  }, []);

  const handleClick = async () => {
    const jokes = await fetchJoke();
    setJoke(jokes.joke);
  }

  return (
    <div className="App">
      <p>{joke}</p>
      <button
        onClick={handleClick}
      >New Joke</button>
    </div>
  );
}

export default App;