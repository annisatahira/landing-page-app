import React from 'react';
import { Button } from '../../Button';
import { FaStar } from 'react-icons/fa';
import { BsPeopleCircle } from 'react-icons/bs';
import './style.css';

const CardKursus = () => {
  return (
    <div className="card card-kursus-wrapper">
      <div className="card-kursus-image-wrapper">
        <div className="card-kursus-image">
          <img src="/images/image1.png" alt="image1"/>
        </div>
      </div>
      <h1 className="card-kursus-title">Mahir Pajak Karyawan Perusahaan</h1>
      <div className="card-kursus-status">
        <div className="status-star">
          <FaStar className="star"/>
          <span className="rating">4.5</span>
        </div>
        <div className="status-peserta">
          <img className="people" src="/icons/people.png" alt=""/>
          2000
        </div>
      </div>
      <div className="card-kursus-teacher">
        <div className="teacher-image">
          <img src="/images/glints.png" alt="Pemasaran"/>
        </div>
        <h1 className="teacher-name">Glints</h1>
      </div>
      <div className="card-kursus-checkout">
        <div className="checkout-harga">
          <h1 className="harga-diskon">Rp 180.000</h1>
          <span className="harga-normal">Rp 500.000</span>
        </div>
        <Button buttonSize="btn--large">Ambil Kelas</Button>
      </div>
    </div>
  )
}

export default CardKursus;