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
    <div className="image-grid-container">
      {lis
        .reduce((acc, el) => {
          if (acc.length === 0 || acc[acc.length-1].length === 3) {
            acc.push([el]);
          } else {
            acc[acc.length-1].push(el);
          }
          return acc;
        }, [])
        .map((row, rowIndex) => (
          <div className="tile is-ancestor image-grid-row" key={`row-${rowIndex}`}>
            {row.map((li, cellIndex) => 
              <div className="tile is-parent image-grid-cell" key={`cell-${cellIndex}`}>
                <article className="tile is-child box is-radiusless" dangerouslySetInnerHTML={{
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