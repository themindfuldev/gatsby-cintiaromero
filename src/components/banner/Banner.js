import React from 'react';
import Header from '../header/Header';
import './banner.sass';

const Banner = () => (
	<section class="hero is-fullheight is-light is-bold">
		<div class="hero-head">
			<Header />
		</div>
		<div class="hero-body">
			<div class="main-banner container has-text-centered">
				<h1 class="title is-1 is-spaced">
					I'm Cintia Romero
				</h1>
				<h2 class="subtitle">
					I'm a San Francisco based <span>ux designer</span> and <span>visual designer</span> creating awesome and effective visual identities for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling</a> and learn more <a className="smoothscroll" href="#about">about me</a>.
				</h2>
				<div class="columns is-mobile is-multiline is-centered">
					<div class="column is-narrow">
						<a href="#">
							<i class="fab fa-facebook-square fa-2x"></i>
						</a>
					</div>
					<div class="column is-narrow">
						<a href="#">
							<i class="fab fa-twitter-square fa-2x"></i>
						</a>
					</div>
					<div class="column is-narrow">
						<a href="#">
							<i class="fab fa-instagram fa-2x"></i>
						</a>
					</div>
					<div class="column is-narrow">
						<a href="#">
							<i class="fab fa-linkedin fa-2x"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Banner;