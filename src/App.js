import React, { Component } from 'react';
import './App.css';
import Game from './components/Game';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Game />
      </React.Fragment>
    );
  }
}

export default App;
