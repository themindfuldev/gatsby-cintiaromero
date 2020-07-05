import React from "react";
import ReactModal from "react-modal";
import Link from "gatsby-link";
import Script from "react-load-script";
import FullBanner from '../components/full-banner/FullBanner';
import About from '../components/about/About';
import Stuff from '../components/stuff/Stuff';

ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.75)';
ReactModal.setAppElement('#___gatsby');    

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