import React from 'react';
import './about.sass';

const About = () => (
  <section id="about" className="hero is-light is-medium">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <figure className="image is-256x256">
              <img className="is-rounded" src="https://www.gravatar.com/avatar/2588358b0e7310498ff507b4266f460e?s=250" />
            </figure>
          </div>
          <div className="tile is-8">
            <div className="content is-size-5">
              <p>I am a UX and Visual Designer for multiple devices and platforms with 8+ years of experience, based in San Francisco Bay Area.</p>
              <p>Hiking, The Walking Dead and Speculoos cookie butter are just a few of my favorite things.</p>
              <p>I completed Certificate Programs in User Experience Design at General Assembly in San Francisco, and in Visual Design at UC Berkeley Extension. Besides, I have a Bachelor’s degree in Advertising and Marketing and a MBA in Creative Direction for Fashion, both in Brazil. Be welcome to contact me. Let’s share some ideas!</p>
              <button>DOWNLOAD MY RESUME</button>
              <button>SEE MORE ON LINKEDIN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;