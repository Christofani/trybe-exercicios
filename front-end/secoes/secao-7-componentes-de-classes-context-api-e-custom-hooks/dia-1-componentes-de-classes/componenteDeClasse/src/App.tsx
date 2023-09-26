import React from 'react';

class App extends React.Component {
  state = {
    count: 1,
  };

  componentDidMount() {
    console.log('Componente foi montado');
  }

  componentDidUpdate() {
    console.log('Componente atualizado');
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>Contador</h1>

        <button onClick={() => this.setState({ count: count + 1 })}>
          {count}
        </button>
      </div>
    );
  }
}

export default App;
