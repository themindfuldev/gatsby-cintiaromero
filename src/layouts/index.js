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

const title = 'Cintia Romero';
const description = `I design and develop experiences that make people's life simpler.`;
const avatar = 'https://www.gravatar.com/avatar/2588358b0e7310498ff507b4266f460e?s=1200';
const url = 'https://cintiaromero.com/';
const twitterHandle = '@cintiaaa_romero';
const pinterest = 'https://www.pinterest.com/cintiaromero313';
const instagram = 'https://instagram.com/cintiaaaromero';
const twitter = 'https://twitter.com/cintiaaa_romero';
const linkedin = 'https://www.linkedin.com/in/cintiaromero';
const facebookAppId = '322496608523485';

const jsonLd = {
  "@context": "http://schema.org/",
  "@type": "Person",
  "name": title,
  "jobTitle": description,
  "url": url,
  "sameAs": [pinterest, instagram, twitter, linkedin]
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <script defer src="https://use.fontawesome.com/releases/v5.0.0/js/all.js"></script>
      <html lang="en"/>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={avatar} />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={avatar} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:image:src" content={avatar} />
      <meta property="fb:app_id" content={facebookAppId} />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#dddddd" />
    </Helmet>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <Header />
    <div role="main">
    {children()}
    </div>
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
