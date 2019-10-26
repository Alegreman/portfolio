import React from 'react';
import PROJECTS from '../data/projects';
import styled from 'styled-components';

const Projectt = styled.div`
  width: 300;
  margin: 10;
`;

const Title = styled.h3`
  font-family: EconomicaBold;
  src: url(assets/Economica-Bold.ttf);
`;
const Description = styled.p`
  font-family: RobotoCondensed;
  src: url(assets/RobotoCondensed-Light.ttf);
  font-weight: 800;
`;
const Button = styled.button`
  font-family: RobotoCondensed;
  src: url(assets/RobotoCondensed-Light.ttf);
  font-weight: 800;

  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const Tech = styled.p`
  font-family: RobotoCondensed;
  src: url(assets/RobotoCondensed-Light.ttf);
  font-weight: 800;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Project = props => {
  const {
    title,
    image,
    description,
    link,
    liveLink,
    technologies
  } = props.project;
  return (
    <Projectt>
      <Title>{title}</Title>
      <img src={image} alt='profile' style={{ width: 200, height: 120 }} />
      <Description>{description}</Description>
      <Tech>{technologies}</Tech>
      <Button>
        <Link href={link}>SOURCE</Link>
      </Button>
      <Button>
        <Link href={liveLink}>DEMO</Link>
      </Button>
    </Projectt>
  );
};

const Projects = () => (
  <div className='project'>
    <h2>Portfolio</h2>
    <div>
      {PROJECTS.map(PROJECT => {
        return <Project key={PROJECT.id} project={PROJECT} />;
      })}
    </div>
  </div>
);

export default Projects;
