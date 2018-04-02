import React from 'react';
import './banner.sass';

const Banner = ({ title, subtitle, color}) => (
	<section className={`banner-hero hero is-medium is-bold ${color}`}>
		<div className="hero-body">
			<div className="banner-banner container has-text-centered">
				<h1 className="banner-title title is-spaced">
					{title}
				</h1>
				{subtitle && 
					<h2 className="subtitle is-size-4">
						{subtitle}
					</h2>
				}
				<br/>
			</div>
		</div>		
	</section>
);

export default Banner;