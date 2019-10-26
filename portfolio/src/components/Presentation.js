import React, { Component } from 'react';
import Title from './Title';
import styled from 'styled-components';

const Intro = styled.p`
  margin: auto 12rem;
  font-family: RobotoCondensed;
  text-align: justify;
  font-size: 1rem;
  position: center;
`;

const Name = styled.h1`
  font-family: EconomicaBold;
  font-size: 2rem;
  font-weight: bold;
  padding: auto 3rem;
  text-align: justify;
`;

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 1rem;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;
const A = styled.a`
  text-decoration: none;
`;

class Presentation extends Component {
  state = { displayBio: false };

  toogleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    return (
      <div>
        <Intro>
          <Name>Hello</Name>
          <p>My Name is Jorge.</p>
          <Title />
          <p>I'm always looking forward to working on meaningful projects.</p>
        </Intro>
        <Button>
          <A href='../assets/CV(en).pdf' target='_blank'>
            CV
          </A>
        </Button>
        <Button>
          <A href='https://github.com/Alegreman/'>Github</A>
        </Button>
      </div>
    );
  }
}

export default Presentation;
