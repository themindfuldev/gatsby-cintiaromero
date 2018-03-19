import React from 'react';
import Link from 'gatsby-link';
import './stuff.sass';

const Stuff = () => (
  <section className="stuff-hero hero">
    <div className="hero-body">
      <div className="container">
        <h2 className="title is-2 has-text-centered">Here’s all the stuff I do.</h2>
        <h3 className="subtitle is-4 has-text-centered">Odio turpis amet sed consequat eget posuere consequat.</h3>
        <br/>
        <div className="columns">
          <div className="column">
            <Link to="/tags/ux">
              <div className="card">
                <div className="card-image">
                  <figure className="stuff-image image is-square">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                    <figcaption className="has-text-white has-text-centered is-size-4">UX DESIGN</figcaption>
                  </figure>
                </div>              
              </div>
            </Link>
          </div>
          <div className="column">
            <Link to="/tags/visual-design">
              <div className="card-image">
                <figure className="stuff-image image is-square">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                  <figcaption className="has-text-white has-text-centered is-size-4">VISUAL DESIGN</figcaption>
                </figure>
              </div> 
            </Link>
          </div>
          <div className="column">
            <Link to="/tags/illustrations">
              <div className="card-image">
                <figure className="stuff-image image is-square">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                  <figcaption className="has-text-white has-text-centered is-size-4">ILLUSTRATION</figcaption>
                </figure>
              </div> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Stuff;