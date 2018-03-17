import React, { Component } from 'react';
import styles, { red } from './styles.js';
import Header from '../../components/Header'

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header title="Welcome to React"/>
        <p style={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
