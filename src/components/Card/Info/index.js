import React from 'react';
import './style.css';

const CardInfo = ({img, captio}) => {
  return (
    <div className="card card-info-wrapper">
      <div className="card-info-image-wrapper">
        <div className="card-info-image">
          <img src="/icons/pemasaran.png" alt="Pemasaran"/>
        </div>
      </div>
      <h1 className="card-info-title">Pemasaran</h1>
    </div>
  )
};

export default CardInfo;