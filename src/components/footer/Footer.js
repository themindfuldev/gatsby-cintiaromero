import React from 'react';
import Link from 'gatsby-link';
import SocialIcons from '../social-icons/SocialIcons';
import './footer.sass';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <div>
              <p className="is-size-4">CINTIA ROMERO</p>
              <ul className="footer-links is-size-5">
                <li><Link to="/tags/ux">UX design</Link></li>
                <li><Link to="/tags/visual-design">Visual design</Link></li>
                <li><Link to="/tags/illustrations">Illustrations</Link></li>
              </ul>
              <br/>
              <p>© 2018 Cintia Romero. Powered by <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a>.</p>
            </div>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;