import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import Banner from '../components/banner/Banner';

export default class IndexPage extends React.Component {
  handleScriptLoad = () => {
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
  }

  render() {
    return (
      <div>
        <Banner />
        <section className="section">
          <Script
            url="https://identity.netlify.com/v1/netlify-identity-widget.js"
            onLoad={this.handleScriptLoad}
          />
        </section>
      </div>
    );
  }
}