import React from 'react';
import Header from '../header/Header';
import SocialIcons from '../social-icons/SocialIcons';
import './hi.sass';
import logo from './logo.png';
import { scrollDown } from '../../utils/scrolling';

const Banner = () => (
	<section className="hi-hero hero is-fullheight">
		<div className="hero-head">
			<Header />
		</div>
		<div className="hero-body">
			<div className="hi-banner container has-text-centered">
				<div className="has-text-centered">
					<img src={logo} alt="Logo" />
				</div>
				<h1 className="hi-title title is-spaced">
					Hi, I'm Cintia Romero.
				</h1>
				<h2 className="subtitle is-size-4">
					I design and develop experiences that make people's life simpler.
				</h2>
				<br/>
				<SocialIcons />
			</div>
		</div>
		<div className="hero-foot">
			<div className="section has-text-centered">
				<a href="#about" onClick={scrollDown}>
					<i className="fas fa-chevron-circle-down fa-3x"></i>
				</a>
			</div>
		</div>
	</section>
);

export default Banner;