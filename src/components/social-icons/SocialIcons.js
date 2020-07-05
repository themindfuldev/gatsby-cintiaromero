import React from 'react';
import './social-icons.sass';
import ExternalLink from '../ExternalLink'

const SocialIcons = () => (  
  <div>
    <ExternalLink href="https://www.pinterest.com/cintiaromero313" title="Pinterest">
      <span className="icon is-large">
        <i className="fab fa-pinterest-square fa-2x"></i>
        <span className="label">Pinterest</span>
      </span>
    </ExternalLink>

    <ExternalLink href="https://instagram.com/cintiaaaromero" title="Instagram">
      <span className="icon is-large">
        <i className="fab fa-instagram fa-2x"></i>
        <span className="label">Instagram</span>
      </span>
    </ExternalLink>

    <ExternalLink href="https://twitter.com/cintiaaa_romero" title="Twitter">
      <span className="icon is-large">
        <i className="fab fa-twitter-square fa-2x"></i>
        <span className="label">Twitter</span>
      </span>
    </ExternalLink>

    <ExternalLink href="https://www.linkedin.com/in/cintiaaaromero" title="LinkedIn">
      <span className="icon is-large">
        <i className="fab fa-linkedin fa-2x"></i>
        <span className="label">LinkedIn</span>
      </span>
    </ExternalLink>
  </div>
);

export default SocialIcons;