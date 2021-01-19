import React from 'react';
import './style.css';

const CardTestimoni = ({image, alt, comment, name, profession}) => {
  return (
    <div className="card-testimoni-wrapper">
    	<img className="card-testimoni-comment" src="/icons/comment.png" alt="" />
	    <div className="card-testimoni-content">
			{comment}
	    </div>
	    <div className="card-testimoni-person">
	    	<img src={image} alt={name}/>
	    	<h1 className="person-name">{name}</h1>
	    	<p className="person-work">{profession}</p>
	    </div>
	  </div>
  )
};

export default CardTestimoni;