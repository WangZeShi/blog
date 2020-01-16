import React, { Component } from 'react';
import RouterWrap from './router'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <RouterWrap className="routerwrap"/>
      </div>
    );
  }
}

export default App;
