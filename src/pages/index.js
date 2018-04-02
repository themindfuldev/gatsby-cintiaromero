import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import FullBanner from '../components/full-banner/FullBanner';
import About from '../components/about/About';
import Stuff from '../components/stuff/Stuff';

export default class IndexPage extends React.Component {  
  render() {
    return (
      <div>
        <FullBanner />
        <About />
        <Stuff />
      </div>
    );
  }
}