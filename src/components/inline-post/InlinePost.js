import React from 'react';
import Link from 'gatsby-link';
import './inline-post.sass';

const InlinePost = ({ isLeft, path, title, description }) => {
  console.log(isLeft)

  const imageColumn = (
    <div className="column is-two-fifths">
      <figure className="image">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
      </figure>
    </div>
  );
  
  return (
    <div className="inline-post columns">
      {isLeft && imageColumn}
      <div className="column">
        <h2><Link to={path}>{title}</Link></h2>
        <p>{description}</p>
        <p>
          <Link to={path} className="button is-medium is-link">LEARN MORE</Link>
        </p>
      </div>
      {!isLeft && imageColumn}
    </div>
  );
}

export default InlinePost;