import React from 'react';
import styled from 'styled-components';

const Intro = styled.p`
  margin: 1rem 2rem;
  line-height: 1.6rem;
  margin: auto 10rem;
  font-family: RobotoCondensed;
  text-align: justify;
  font-size: 1rem;
`;

const List = styled.ul`
  columns: 2;
  text-align: left;
  align-items: center;
  width: 70%;
  margin: auto;
  font-weight: bold;
  font-family: RobotoCondensed;
  font-size: 2rem;
`;

const Title = styled.p`
  font-family: EconomicaBold;
  font-size: 2rem;
  font-weight: bold;
  padding: auto 3rem;
  text-align: center;
`;

const About = () => {
  return (
    <div class='about'>
      <Intro>
        I'm Jorge Alegría, I have a Bachelor in Science Degree in Computer
        Systems Engineering and lately I'm been focusing in Fullstack Web
        Development,
        <br />A couple of months before I graduated from college, I started to
        work with React and Node in various projects.
      </Intro>
      <Intro>
        I have used Javascript for almost 2 years now, Making school projects to
        learn fundamentals and advanced concepts.
        <br />I have been working with React.JS and Node.Js environment and i
        have had fun.
      </Intro>
      <Intro>
        So to show off my skills I did some personal projects, these projects
        are listed below.
      </Intro>
      <Intro>
        <Title>My stack of languages/technologies is:</Title>
        <List>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JAVASCRIPT</li>
          <li>SASS</li>
          <li>WEBPACK</li>
          <li>REACTJS</li>
          <li>REDUX</li>
          <li>STYLED COMPONENTS</li>
          <li>MongoDB</li>
        </List>
      </Intro>
    </div>
  );
};

export default About;
