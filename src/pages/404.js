import React from 'react';
import Banner from '../components/banner/Banner';
import Link from 'gatsby-link';

const NotFoundPage = () => (
  <div>
    <Banner title="Oops!" subtitle="We weren't able to find this page." color="is-danger" />
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <article className="message">
              <div className="message-body">
                <p>However, feel free to browse around to see my work, checking out the links below in the footer.</p>
                <p>You can also view my <a href="/pdf/resume-cintia-romero.pdf" target="_blank" rel="noopener noreferrer">Resume</a> and follow me on social networks.</p>
              </div>
            </article>            
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default NotFoundPage;
