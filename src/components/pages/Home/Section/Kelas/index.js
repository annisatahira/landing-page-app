import React from 'react';
import CardKelas from '../../../../Card/Kelas';
import './style.css';

const KelasSection = (data) => {

  return(
		<div className="kelas-container">
			{data.kelas.map((item) => {
				const {id, img, title} = item;

				return (
					<CardKelas
						key={id}
						id={id}
						img={img}
						title={title}
					/>
				)
			})}
		</div>
	)
};

export default KelasSection;