import React from 'react';
import Link from 'gatsby-link';
import './inline-post.sass';

const imagePlaceholder = 'https://bulma.io/images/placeholders/1280x960.png';

const InlinePost = ({ isLeft, path, title, description, image}) => {
  const imageColumn = responsiveClass => (
    <div className={`column ${responsiveClass}`}>
      <figure className="image">
        <Link to={path}><img src={image || imagePlaceholder} alt={title} /></Link>
      </figure>
    </div>
  );
  
  return (
    <div className={`inline-post columns ${isLeft? 'left': 'right'}`}>
      {isLeft && imageColumn('is-two-fifths is-hidden-mobile')}
      {imageColumn('is-hidden-tablet')}
      <div className="inline-post-content column">
        <h2 className="title is-size-3"><Link to={path}>{title}</Link></h2>
        <p>{description}</p>
        <p>
          <Link to={path} className="inline-post-learn-more button is-medium is-link">LEARN MORE</Link>
        </p>
      </div>
      {!isLeft && imageColumn('is-two-fifths is-hidden-mobile')}
    </div>
  );
}

export default InlinePost;