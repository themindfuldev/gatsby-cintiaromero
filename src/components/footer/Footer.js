import React from 'react';
import Link from 'gatsby-link';
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
            <a href="https://www.pinterest.com/cintiaromero313" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-pinterest-square fa-3x"></i>
            </a>
          </div>
          <div className="level-item">
            <a href="https://instagram.com/cintiaaaromero" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-3x"></i>
            </a>
          </div>
          <div className="level-item">
            <a href="https://twitter.com/cintiaaa_romero" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter-square fa-3x"></i>
            </a>
          </div>
          <div className="level-item">
            <a href="https://www.linkedin.com/in/cintiaromero" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;