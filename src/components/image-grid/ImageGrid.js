import React from 'react';
import Link from 'gatsby-link';
import './image-grid.sass';
import NodeDOMParser from 'dom-parser';

const domParser = global.DOMParser? global.DOMParser: NodeDOMParser;

const parser = new domParser();

const ImageGrid = ({images}) => {
  const html = parser.parseFromString(images.replace(/\n/g, ''), 'text/html');
  const lis = Array.from(html.getElementsByTagName('li'));
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