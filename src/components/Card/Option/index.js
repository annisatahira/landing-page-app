import React from 'react';
import './style.css';

const Option = ({
	image, alt, title, description
}) => {
	return (
		<div className="card-option-wrapper">
			<img src={image} alt={alt} />
			<h1 className="card-option-title">{title}</h1>
			<p className="card-option-description">
				{description}
			</p>
		</div>
	)
};

export default Option;