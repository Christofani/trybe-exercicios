
import Button from './components/button'
import Input from './components/Input/Input';
import './App.css'

function App() {
  function handleClick(messageText: string) {
    alert(messageText);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    
  }
  return (
    <div className='div-container'>
      <Button onClick={() => handleClick('botão1')}>
        Botão 1
      </Button>
      <Button onClick={() => handleClick('botão2')}>
        Botão 2
      </Button>
      <input type="text"
      onChange={(event) => handleChange(event)} />
      <Input />
    </div>
    
  )
}

export default App;
