import React from 'react';
import './style.css';

const CardKelas = ({id, img, title}) => {
  return (
    <div className="card card-kelas-wrapper">
      <div className="card-kelas-image-wrapper">
        <div className="card-kelas-image">
          <img src="/icons/pemasaran.png" alt="Pemasaran"/>
        </div>
      </div>
      <h1 className="card-kelas-title">Pemasaran</h1>
    </div>
  )
};

export default CardKelas;