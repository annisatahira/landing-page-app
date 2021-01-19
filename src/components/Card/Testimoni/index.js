import React from 'react';
import './style.css';

const CardTestimoni = () => {
  return (
    <div className="card-testimoni-wrapper">
    	<img className="card-testimoni-comment" src="/icons/comment.png" alt="" />
	    <div className="card-testimoni-content">
				Saya beruntung bergabung ke kursus di Arkademi. Metode penyampaian sangat jelas singkat dan memudahkan belajar. Ditambah lagi tampilan presentasi yang membuat kita tidak jenuh dalam belajar online.
	    </div>
	    <div className="card-testimoni-person">
	    	<img src="/images/testimoni1.png" alt=""/>
	    	<h1 className="person-name">Jules</h1>
	    	<p className="person-work">Database Manager</p>
	    </div>
	  </div>
  )
};

export default CardTestimoni;