import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/any-solvent.svg';
import styled from 'styled-components';

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
          <Link to='/'>ABOUT ME</Link>
        </h3>
        <h3 style={style}>
          <Link to='/jokes'>PORTFOLIO</Link>
        </h3>
        <h3 style={style}>
          <Link to='/jokes'>CONTACT</Link>
        </h3>
      </Logo>
      {children}
    </div>
  );
};

export default Header;
