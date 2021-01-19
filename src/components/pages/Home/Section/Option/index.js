import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardOption from '../../../../Card/Option';
import './style.css';

const OptionSection = (data) => {
	return (
		<div className="container-section">
			<Grid container>
				{data.options.map((item) => {

					return (
						<Grid key={item.id} md={12} item lg={4}>
							<CardOption
								image={item.image}
								title={item.title}
								description={item.description}
							/>
						</Grid>
					)
				})}
			</Grid>
		</div>
	)
};

export default OptionSection;