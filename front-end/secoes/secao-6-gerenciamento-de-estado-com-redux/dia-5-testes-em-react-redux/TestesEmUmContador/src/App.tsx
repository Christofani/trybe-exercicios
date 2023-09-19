
import { RootState } from './types'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { actionCreator } from './redux/actions/couter';

function App() {
  const rootState = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
   <main>
    <div>
      <h1 className='container'>Contador</h1>
      <h2>{rootState.counterReducer.counter}</h2>
    </div>
    <div className='div-button'>
      <button onClick={() => dispatch(actionCreator())}>Incrementa 1</button>
      <button onClick={() => dispatch(actionCreator(5))}>Incrementa 5</button>
    </div>
   </main>
  )
}

export default App
