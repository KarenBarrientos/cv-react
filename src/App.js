import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Netbeans' };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Netbeans">Netbeans</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Ruby">Ruby</option>
            <option value="Haskell">Haskell</option>
            <option value=" C++"> C++</option>
            <option value="Scheme">Scheme</option>
          </select>
        </label>


      </form>
    );
  }
}

export default App;
