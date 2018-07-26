import React, { Component } from 'react';
import logo from '../logo.svg';
import ThirtyMinutes from './ThirtyMinutes';
import KMOutline from './KMOutline';
import KMReview from './KMReview';
import Ideas from './Ideas';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ThirtyMinutes />
        <KMOutline />
        <Ideas />
      </div>
    );
  }
}

export default App;
