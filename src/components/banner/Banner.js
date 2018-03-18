import React from 'react';
import Header from '../header/Header';
import './banner.sass';
import logo from './logo.png';
import { scrollDown } from '../../utils/scrolling';

const Banner = () => (
	<section className="main-hero hero is-fullheight">
		<div className="hero-head">
			<Header />
		</div>
		<div className="hero-body">
			<div className="main-banner container has-text-centered">
				<div className="has-text-centered">
					<img src={logo} alt="Logo" />
				</div>
				<h1 className="title is-1 is-spaced">
					Hi, I'm Cintia Romero.
				</h1>
				<h2 className="subtitle">
					I design and develop experiences that make people's life simpler.
				</h2>
				<br/>
				<br />
				<div className="main-social-icons columns is-mobile is-multiline is-centered">
					<div className="column is-narrow">
						<a href="https://www.pinterest.com/cintiaromero313" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-pinterest-square fa-2x"></i>
						</a>
					</div>
					<div className="column is-narrow">
						<a href="https://instagram.com/cintiaaaromero" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-instagram fa-2x"></i>
						</a>
					</div>
					<div className="column is-narrow">
						<a href="https://twitter.com/cintiaaa_romero" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-twitter-square fa-2x"></i>
						</a>
					</div>
					<div className="column is-narrow">
						<a href="https://www.linkedin.com/in/cintiaromero" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-linkedin fa-2x"></i>
						</a>
					</div>
				</div>
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