import React from 'react';
import { Link, Route } from 'react-router-dom';
import logo from '../assets/any-solvent.svg';
import styled from 'styled-components';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Logo = styled.a`
  padding: 0.1rem;
`;
const A = styled.img`
  left: 0px;
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
`;

const Header = ({ children }) => {
  const style = {
    display: 'inline-block',
    margin: 10,
    marginBottom: 30
  };
  return (
    <div>
      <Logo>
        <Logo href='/'>
          <A src={logo} alt='logo' className='logo' />
        </Logo>
        <h3 style={style}>
          <Link to='/about'>ABOUT ME</Link>
        </h3>
        <Route path='/about' component={About} exact></Route>
        <h3 style={style}>
          <Link to='/portfolio'>PORTFOLIO</Link>
        </h3>
        <Route path='/portfolio' component={Portfolio} exact></Route>
        <h3 style={style}>
          <Link to='/contact'>CONTACT</Link>
        </h3>
        <Route path='/contact' component={Contact} exact></Route>
      </Logo>
      {children}
    </div>
  );
};

export default Header;
