import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Cintia Romero's portfolio">
      <script defer src="https://use.fontawesome.com/releases/v5.0.0/js/all.js"></script>
    </Helmet>
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
