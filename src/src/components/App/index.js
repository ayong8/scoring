import React, { Component } from 'react';
import ThirtyMinutes from 'components/ThirtyMinutes';
import KMOutline from 'components/KMOutline';
import KMReview from 'components/KMReview';
import Ideas from 'components/Ideas';
import Goals from 'components/Goals';
import styles from './styles.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ThirtyMinutes />
        <KMOutline />
        <Ideas />
        <Goals />
      </div>
    );
  }
}

export default App;
