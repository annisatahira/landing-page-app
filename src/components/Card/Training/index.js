import React from 'react';
import { Button } from '../../Button';
import './style.css';

const CardTraining = ({image, alt, title, description, buttonTitle}) => {
    return (
      <div className="card card-training-wrapper">
        <div className="card-training-icon">
          <img src={image} alt={alt}/>
        </div>
        <h1 className="card-training-title">
          {title}
        </h1>
        <div className="card-training-description">
          {description}
        </div>
        <Button 
          buttonSize="btn--wide"
          buttonColor="grey"
          className="btn-pendaftaran"
        >
          {buttonTitle}
        </Button>
      </div>
    )
};

export default CardTraining;