import React, { Component } from 'react';
import Projects from './Projects';
import Links from './Links';
import profile from './assets/profile.png';
import Title from './Title';

class App extends Component{
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
    }

    //toogleDisplayBio(){
    //    this.setState({ displayBio: !this.state.displayBio });
    //}

    render(){

        return(
            <div>
                <div className='presentation'>
                    <img src={profile} alt='profile' className='profile'/>
                    <h1>Hello</h1>
                    <p>My Name is Jorge.</p>
                    { this.state.displayBio ? <Title /> : null }
                    <p>I'm always looking forward to working on meaningful projects.</p>
                    {
                        this.state.displayBio ? ( 
                            <div className='presentation'>
                                <p>I live in Tepic, and i code almostevery day.</p>
                                <p>My favourite language right now is JavaScript, and i think React.js is awesome.</p>
                                <p>Besides coding, i love playing Age of Empires 2 at a professional level and watch tv series. </p>
                                <button onClick={this.toogleDisplayBio}>Show Less</button>
                            </div>
                        ) : (
                            <div>
                                <button onClick={this.toogleDisplayBio}>Read More</button>
                            </div>
                        )
                    }
                </div>
                <hr />
                <Projects />
                <hr />
                <Links />
            </div>
        )
    }
} 

export default App;
