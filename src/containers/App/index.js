import React, { Component } from 'react';
import styles, { red } from './styles.js';
import Header from '../../components/Header'

class App extends Component {
  state = {
    showIntro: true,
  }

  toogleIntro = () => {
    const { showIntro } = this.state;

    this.setState({
      showIntro: !showIntro,
    });
  }

  headerClick = () => {
    alert('Just clicked button in header!')
  }


  render() {
    const { showIntro } = this.state;
    return (
      <div style={styles.container}>
        <Header title="Welcome to React"
                onClick={this.headerClick}
        />

        <button onClick={this.toogleIntro}>Toogle Intro</button>
        {
          showIntro && <p style={styles.intro}>
                        To get started, edit <code>src/App.js</code> and save to reload.
                      </p>
        }
      </div>
    );
  }
}

export default App;
