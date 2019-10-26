import React, { Component } from 'react';
import Projects from './Projects';
import Links from './Links';
import About from './About';
import Presentation from './Presentation';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Presentation />
        <About />
        <Projects />
        <Links />
      </div>
    );
  }
}

export default App;
