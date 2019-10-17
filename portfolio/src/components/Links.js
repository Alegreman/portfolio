import React from 'react';
import LINKS from '../data/links';

const Link = props => {
  const { image, link } = props.link;
  return (
    <span>
      <a href={link}>
        <img
          src={image}
          alt='social-profile'
          style={{ width: 45, height: 45, margin: 10 }}
        />
      </a>
    </span>
  );
};

const Links = () => (
  <div className='media'>
    <h2>Contact Me</h2>
    <div>
      {LINKS.map(LINK => (
        <Link key={LINK.id} link={LINK} />
      ))}
    </div>
  </div>
);

export default Links;
