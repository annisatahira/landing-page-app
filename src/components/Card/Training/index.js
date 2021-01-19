import React from 'react';
import { Button } from '../../Button';
import './style.css';

const CardTraining = () => {
    return (
      <div className="card card-training-wrapper">
        <div className="card-training-icon">
          <img src="/icons/training1.png" alt=""/>
        </div>
        <h1 className="card-training-title">
          Daftar Menjadi Pengajar
        </h1>
        <div className="card-training-description">
          Mengajar ke siswa dari seluruh Indonesia tanpa batas dengan mengajar secara online di Arkademi. Biaya Rp0.
        </div>
        <Button 
          buttonSize="btn--wide"
          buttonColor="grey"
        >
          Mulai Mengajar
        </Button>
      </div>
    )
};

export default CardTraining;