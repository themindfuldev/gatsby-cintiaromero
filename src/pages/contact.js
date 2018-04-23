import React from 'react';
import graphql from 'graphql';
import Banner from '../components/banner/Banner';
import Content, { HTMLContent } from '../components/content/Content';
import './contact.sass'

const ContactPage = () => (
  <div>
    <Banner title="Contact" subtitle="Be welcome to contact me!" color="is-success" />
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <article className="message">
              <div className="message-body">
                <ul>
                  <li>Let’s get in touch!</li>
                  <li>Drop me a line and I'll get back to you ASAP.</li>
                </ul>
              </div>
            </article>            
            <div className="section">
              <form className="contact-form" action="https://formspree.io/cintiapub+contact@gmail.com" method="POST">
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input className="input" name="name" type="text" placeholder="Your name" required />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" name="email" type="email" placeholder="me@domain.com" required />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea className="textarea" name="message" placeholder="I would love to know more about..." required rows="15"></textarea>
                  </div>
                </div>
                <div className="field">
                  <input type="text" name="_gotcha" style={{display: 'none'}} />
                  <input type="hidden" name="_subject" value="Message received from cintiaromero.com" />
                  <input type="hidden" name="_next" value="http://cintiaromero.com/email-received" />
                  <button className="submit button is-medium is-link is-pulled-right" type="submit" value="SEND">
                    <span className="icon">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span>SEND</span>
                  </button>
                </div>                  
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ContactPage;