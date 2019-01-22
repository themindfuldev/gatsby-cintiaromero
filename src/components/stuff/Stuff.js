import React from 'react';
import Link from 'gatsby-link';
import './stuff.sass';
import ux from './ux.jpg';
import visual from './visual.jpg';
import illustrations from './illustrations.jpg';

const Stuff = () => (
  <section className="stuff-hero hero">
    <div className="hero-body">
      <div className="container">
        <h2 className="title is-2 has-text-centered">Here’s some of the stuff I do</h2>
        <h3 className="subtitle is-4 has-text-centered">I deliver elegant and functional digital experiences.</h3>
        <br/>
        <div className="columns">
          <div className="column">
            <Link to="/tags/ux">
              <div className="card">
                <div className="card-image">
                  <figure className="stuff-image image is-square">
                    <img src={ux} alt="Placeholder image" />
                    <figcaption className="has-text-white has-text-centered is-size-4">UX DESIGN</figcaption>
                  </figure>
                </div>              
              </div>
            </Link>
          </div>
          <div className="column">
            <Link to="/tags/visual-design">
              <div className="card">
                <div className="card-image">
                  <figure className="stuff-image image is-square">
                    <img src={visual} alt="Placeholder image" />
                    <figcaption className="has-text-white has-text-centered is-size-4">VISUAL DESIGN</figcaption>
                  </figure>
                </div>
              </div>
            </Link>
          </div>
          <div className="column">
            <Link to="/illustrations">
              <div className="card">
                <div className="card-image">
                  <figure className="stuff-image image is-square">
                    <img src={illustrations} alt="Placeholder image" />
                    <figcaption className="has-text-white has-text-centered is-size-4">ILLUSTRATIONS</figcaption>
                  </figure>
                </div> 
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Stuff;