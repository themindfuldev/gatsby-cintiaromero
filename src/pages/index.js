import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import Banner from '../components/banner/Banner';
import About from '../components/about/About';
import Footer from '../components/footer/Footer';

export default class IndexPage extends React.Component {  
  render() {
    return (
      <div>
        <Banner />
        <About />
        <Footer />
      </div>
    );
  }
}