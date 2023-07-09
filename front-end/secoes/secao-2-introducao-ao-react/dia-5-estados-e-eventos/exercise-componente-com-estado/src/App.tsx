import { useState } from 'react';
import './App.css'

function App() {
  const [showImg, setShowImg] = useState(true);

  function handleClick() {
    setShowImg(!showImg);
  }

  return (
   <div>
    {showImg && <img src="/trybe.svg" />}
    <button onClick={handleClick}>
      {showImg ? 'Esconder imagem' : 'Mostrar imagem'}
    </button>
   </div>
  )
}

export default App
