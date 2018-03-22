import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import Hi from '../components/hi/Hi';
import About from '../components/about/About';
import Stuff from '../components/stuff/Stuff';

export default class IndexPage extends React.Component {  
  render() {
    return (
      <div>
        <Hi />
        <About />
        <Stuff />
      </div>
    );
  }
}