import React, { Component } from 'react';
import styles, { red } from './styles.js';

class App extends Component {
  render() {
    return (
        <div style={styles.container}>
          <header style={{...styles.header, color: red}}>
            <h1 style={styles.title}>Welcome to React</h1>
          </header>
          <p style={styles.intro}>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
    );
  }
}

export default App;
