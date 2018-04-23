import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Script from "react-load-script";
import smoothscroll from 'smoothscroll-polyfill';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './all.sass';

const handleScriptLoad = () => {
  if (typeof window !== `undefined` && window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
  window.netlifyIdentity.init();
};

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Cintia Romero's portfolio">
      <script defer src="https://use.fontawesome.com/releases/v5.0.0/js/all.js"></script>
    </Helmet>
    <Header />
    {children()}
    <Footer />
    <Script
      url="https://identity.netlify.com/v1/netlify-identity-widget.js"
      onLoad={handleScriptLoad}
    />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

// kick off the polyfill!
if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
}

export default TemplateWrapper;
