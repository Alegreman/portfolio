import React from 'react';
import styled from 'styled-components';

const Intro = styled.p`
  margin: 1rem 2rem;
  padding: 2rem;
  line-height: 3rem;
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
  font-size: 1rem;
`;

const Title = styled.p`
  font-family: EconomicaBold;
  font-size: 2rem;
  font-weight: bold;
  padding: auto 3rem;
  text-align: justify;
`;

const About = () => {
  return (
    <div>
      <Intro>
        I'm Jorge Alegría, I have a Bachelor in Science Degree in Computer
        Systems Engineering and lately I'm been focusing in Front-end
        Development, I'm from México. A couple of months before I graduated from
        university, I started working as a developer creating mobile
        applications with Ionic 3 and websites with Angular, While these
        technologies were good, I felt they were not for me, so I started
        enrolling in a couple of courses to learn React.JS.
      </Intro>
      <Intro>
        I have used Javascript for almost 2 years now, Making school projects
        and excercises for a couple of semesters learning fundamentals and
        advanced concepts.
        <br /> Related to online courses I have learn from Brad Traversy in his
        React Front To Back 2019 course, David Joseph Katz's course named React
        JS Web Development - The Essentials Bootcamp, Stephen Grider's course
        named Node with React: Fullstack Web Development and a lot of youtube
        videos about React.js, also I'm currently reading the "You Don't Know
        JS" series from Kyle Simpson.
      </Intro>
      <Intro>
        So to show off my skills I did some personal projects with the knowledge
        gathered from the courses these projects are listed below.
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
