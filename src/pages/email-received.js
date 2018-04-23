import React from 'react';
import Banner from '../components/banner/Banner';
import Link from 'gatsby-link';

const EmailReceivedPage = () => (
  <div>
    <Banner title="Thank you for contacting me!" subtitle="Your email has been received and will be given attention as soon as possible." color="is-success" />
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <article className="message">
              <div className="message-body">
                <p>In the meanwhile, feel free to browse around to see my work, checking out the links below in the footer.</p>
                <p>You can also view my <a href="/pdf/resume-cintia-romero.pdf" target="_blank" rel="noopener noreferrer" >Resume</a> and follow me on social networks.</p>
              </div>
            </article>            
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default EmailReceivedPage;
