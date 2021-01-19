import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardTestimoni from '../../../../Card/Testimoni';
import './style.css';

const TestimoniSection = (data) => {
	return (
		<div className="container-testimonials">
			<Grid container spacing={4}>
				{data.testimoni.map((item) => {

					return (
						<Grid key={item.id} item xs={12} md={12} lg={4}>
							<CardTestimoni
								image={item.image}
								alt={item.name}
								comment={item.comment}
								profession={item.profession}
							/>
						</Grid>
					)
				})}
			</Grid>
		</div>
	)
};

export default TestimoniSection;