import React from 'react';
import logo from '../assets/full_logo.png';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  float: left;
`;

const ImgContainer = styled.a`
  width: 30%;
`;
const Nav = styled.div`
  display: inline-flex;
  float: right;
`;

const List = styled.ul`
  display: inline-flex;
  list-style: none;
  margin-right: 0;
`;

const ListItem = styled.li`
  padding: 20px 10px;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

const Head = styled.nav`
  width: 100%;
  float: right;
`;

const Header = () => {
  return (
    <Head>
      <Nav>
        <ImgContainer href='/'>
          <Img src={logo} alt='logo' />
        </ImgContainer>
        <List>
          <ListItem>
            <a href=''>About</a>
          </ListItem>
          <ListItem>
            <a href=''>Portfolio</a>
          </ListItem>
          <ListItem>
            <a href=''>Contact</a>
          </ListItem>
        </List>
      </Nav>
    </Head>
  );
};

export default Header;
