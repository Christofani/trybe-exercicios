import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import { fetchCharacter } from './redux/actions';
import { Dispatch } from './types';
import CharacterCard from './components/CharacterCard/characterCard';
import './App.css'


function App() {
  const [character, setCharacter] = useState('');
  const dispatch: Dispatch = useDispatch();

  
  return (
    <div>
      <input 
      type="text"
      onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => setCharacter(target.value)}
      value={character}
      placeholder='Digite o nome do personagem'
       />
      <button
      type='button'
      onClick={() => dispatch(fetchCharacter(character))}
      >
        Pesquisar
      </button>
      <CharacterCard />
    </div>
  )
}

export default App;
