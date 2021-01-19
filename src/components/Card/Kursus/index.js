import React from 'react';
import { Button } from '../../Button';
import { FaStar } from 'react-icons/fa';
import { BsPeopleCircle } from 'react-icons/bs';
import './style.css';

const CardKursus = ({
  banner, bannerAlt, title, rating, 
  jumlahPeserta, teacherImage, teacherName
}) => {
  return (
    <div className="card card-kursus-wrapper">
      <div className="card-kursus-image-wrapper">
        <div className="card-kursus-image">
          <img src={banner} alt={bannerAlt}/>
        </div>
      </div>
      <h1 className="card-kursus-title">{title}</h1>
      <div className="card-kursus-status">
        <div className="status-star">
          <FaStar className="star"/>
          <span className="rating">{rating}</span>
        </div>
        <div className="status-peserta">
          <img className="people" src="/icons/people.png" alt=""/>
          {jumlahPeserta}
        </div>
      </div>
      <div className="card-kursus-teacher">
        <div className="teacher-image">
          <img src={teacherImage} alt={teacherName}/>
        </div>
        <h1 className="teacher-name">{teacherName}</h1>
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