import React from 'react';
import './about.sass';

const About = () => (
  <section id="about" className="about-hero hero is-light">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <figure className="about-avatar image is-256x256">
              <img className="is-rounded" src="https://www.gravatar.com/avatar/2588358b0e7310498ff507b4266f460e?s=250" />
            </figure>
          </div>
          <div className="tile is-8">
            <div className="content is-size-5">
              <p>I am a UX and Visual Designer for multiple devices and platforms with 8+ years of experience, based in San Francisco Bay Area.</p>
              <p>Hiking, The Walking Dead and Speculoos cookie butter are just a few of my favorite things.</p>
              <p>I completed Certificate Programs in User Experience Design at General Assembly in San Francisco, and in Visual Design at UC Berkeley Extension. Besides, I have a Bachelor’s degree in Advertising and Marketing and a MBA in Creative Direction for Fashion, both in Brazil.</p>
              <br/>
              <nav className="level">
                <div className="level-item has-text-centered">
                  <a href="/pdf/resume-cintia-romero.pdf" target="_blank" rel="noopener noreferrer" className="button is-medium is-link">
                    <span className="icon">
                      <i className="fas fa-file-alt"></i>
                    </span>
                    <span>DOWNLOAD MY RESUME</span>
                  </a>
                </div>
                <div className="level-item has-text-centered">
                  <a href="https://www.linkedin.com/in/cintiaromero" target="_blank" rel="noopener noreferrer" className="button is-medium is-link">
                    <span className="icon">
                      <i className="fab fa-linkedin"></i>
                    </span>
                    <span>SEE MORE ON LINKEDIN</span>
                  </a>
                </div>
              </nav>                          
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;