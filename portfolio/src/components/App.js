import React, { Component } from 'react';
import Projects from './Projects';
import Links from './Links';
import Title from './Title';

class App extends Component {
  state = { displayBio: false };
  //constructor(){
  //    super();
  //    this.state = { displayBio: false};
  //    console.log('component this', this);
  //
  //    this.toogleDisplayBio = this.toogleDisplayBio.bind(this);
  //}

  //cleaner way to constructor

  toogleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  //toogleDisplayBio(){
  //    this.setState({ displayBio: !this.state.displayBio });
  //}

  render() {
    return (
      <div>
        <div className='presentation'>
          <h1>Hello</h1>
          <p>My Name is Jorge.</p>
          <Title />
          <p>I'm always looking forward to working on meaningful projects.</p>
          {this.state.displayBio ? (
            <div className='presentation'>
              <p>I live in Tepic, and i code almostevery day.</p>
              <p>
                My favourite language right now is JavaScript, and i think
                React.js is awesome.
              </p>
              <p>
                {/* I'm Jorge Alegría, I have a Bachelor in Science Degree in Computer Systems Engineering and lately I'm been focusing in Front-end Development, I'm from México.

A couple of months before I graduated from university, I started working as a developer creating mobile applications with Ionic 3 and websites with Angular, While these technologies were good, I felt they were not for me, so I started enrolling in a couple of courses to learn React.JS.

I have used Javascript for almost 2 years now, Making school projects and excercises for a couple of semesters learning fundamentals and advanced concepts.

Related to online courses I have learn from Brad Traversy in his React Front To Back 2019 course, David Joseph Katz's course named React JS Web Development - The Essentials Bootcamp, Stephen Grider's course named Node with React: Fullstack Web Development and a lot of youtube videos about React.js, also I'm currently reading the "You Don't Know JS" series from Kyle Simpson.

So to show off my skills I did some personal projects with the knowledge gathered from the courses these projects are listed below.

My stack of languages/technologies is:
HTML5 - CSS3 - JAVASCRIPT - SASS - WEBPACK - REACTJS - REDUX - STYLED COMPONENTS - MongoDB */}
                Besides coding, i love playing Age of Empires 2 at a
                professional level and watch tv series.{' '}
              </p>
              <button onClick={this.toogleDisplayBio}>Show Less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toogleDisplayBio}>Read More</button>
            </div>
          )}
        </div>
        <Projects />
        <Links />
      </div>
    );
  }
}

export default App;
