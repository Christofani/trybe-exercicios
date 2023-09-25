import React from 'react';
import Title from './components/Title';
import './App.css';

class App  extends React.Component  {
  handleClick = () => {
    alert('Clicou')
  }
  render() {
    return (
      <div className='App'>
         <Title titleMessage='Hello World!' />
      </div>
    )
  }
}

export default App;
