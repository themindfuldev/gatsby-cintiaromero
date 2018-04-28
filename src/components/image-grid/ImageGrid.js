import React from 'react';
import Link from 'gatsby-link';
import './image-grid.sass';

const domParser = window.DOMParser && new window.DOMParser();

const ImageGrid = ({images}) => {
  const html = domParser.parseFromString(images.replace(/\n/g, ''), 'text/html');
  const lis = Array.from(html.querySelectorAll('li'));
  return (
    <div>
      {lis
        .reduce((acc, el) => {
          if (acc.length === 0 || acc[acc.length-1].length === 3) {
            acc.push([el]);
          } else {
            acc[acc.length-1].push(el);
          }
          return acc;
        }, [])
        .map(row => (
        <div className="tile is-ancestor">
          {row.map(li => 
            <div className="tile is-parent">
              <article className="tile is-child box" dangerouslySetInnerHTML={{
                __html: li.innerHTML
              }} />
            </div>
          )}                  
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;