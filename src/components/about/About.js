import React from 'react';
import './about.sass';
import ExternalLink from '../ExternalLink'

const About = () => (
  <section id="about" className="about-hero hero is-light">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <figure className="about-avatar image is-256x256">
              <img className="is-rounded" src="https://www.gravatar.com/avatar/2588358b0e7310498ff507b4266f460e?s=250" alt="Cintia Romero" />
            </figure>
          </div>
          <div className="column">
            <div className="content is-size-5">
              <p>UX & Visual Designer for multiple devices and platforms with over 9+ years of experience building products, experiences, and teams.</p>
              <p>Currently working at <ExternalLink href="https://www.deltadentalins.com" className="text">Delta Dental</ExternalLink>, as a core UX Designer at Emerald (Delta Dental's Design System).</p>
              <p>Latina from Brazil, vegan, design thinker, fond of spreading good practices related to accessibility, diversity, and inclusion.</p>
              <p>Music, hiking with my dog and playing Capoeira with my husband <ExternalLink href="https://tiagorg.com" className="text">Tiago Romero Garcia</ExternalLink> are just a few of my favorite things!</p>
              <p>I believe that Black Lives Matter and Love is Love.</p>
              <br/>
              <nav className="level">
                <div className="level-item has-text-centered">
                  <ExternalLink href="/pdf/resume-cintia-romero.pdf" className="button is-medium is-link">
                    <span className="icon">
                      <i className="fas fa-file-alt"></i>
                    </span>
                    <span>DOWNLOAD MY RESUME</span>
                  </ExternalLink>
                </div>
                <div className="level-item has-text-centered">
                  <ExternalLink href="https://www.linkedin.com/in/cintiaaaromero" className="button is-medium is-link">
                    <span className="icon">
                      <i className="fab fa-linkedin"></i>
                    </span>
                    <span>SEE MORE ON LINKEDIN</span>
                  </ExternalLink>
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