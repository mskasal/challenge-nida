import * as React from 'react';
import './App.css';
import Pokemons from './containers/Pokemons';
const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Something Pokémon</h2>
        </div>
        <Pokemons />
      </div>
    );
  }
}

export default App;
