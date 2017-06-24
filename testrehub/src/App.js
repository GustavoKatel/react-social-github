import React, { Component } from 'react';
import {Github} from 'rehub';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Github org="hackbit"></Github>

        <Github user="vandreleal"></Github>
      </div>
    );
  }
}

export default App;
