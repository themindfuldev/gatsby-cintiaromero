import React from 'react';
import './social-icons.sass';

const SocialIcons = () => (  
  <div>
    <a href="https://www.pinterest.com/cintiaromero313" target="_blank" rel="noopener noreferrer" title="Pinterest">
      <span className="icon is-large">
        <i className="fab fa-pinterest-square fa-2x"></i>
        <span className="label">Pinterest</span>
      </span>
    </a>

    <a href="https://instagram.com/cintiaaaromero" target="_blank" rel="noopener noreferrer" title="Instagram">
      <span className="icon is-large">
        <i className="fab fa-instagram fa-2x"></i>
        <span className="label">Instagram</span>
      </span>
    </a>

    <a href="https://twitter.com/cintiaaa_romero" target="_blank" rel="noopener noreferrer" title="Twitter">
      <span className="icon is-large">
        <i className="fab fa-twitter-square fa-2x"></i>
        <span className="label">Twitter</span>
      </span>
    </a>

    <a href="https://www.linkedin.com/in/cintiaromero" target="_blank" rel="noopener noreferrer" title="LinkedIn">
      <span className="icon is-large">
        <i className="fab fa-linkedin fa-2x"></i>
        <span className="label">LinkedIn</span>
      </span>
    </a>
  </div>
);

export default SocialIcons;