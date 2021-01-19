import React from 'react';
import Grid from '@material-ui/core/Grid';
import './style.css';

const FeaturedSection = () => {
	return (
		<div className="container-featured">
			<Grid container>
				<Grid item sm={12}>
					<img src="/images/featured-corporate.png" alt=""/>
				</Grid>
			</Grid>
		</div>
	)
};

export default FeaturedSection;