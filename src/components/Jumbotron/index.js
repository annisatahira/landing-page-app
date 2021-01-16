import React from 'react';
import { jumbotron } from '../../utils/assets';
import { Button } from '../Button';
import './style.css';

const Jumbotron = ({
  img, alt, title, description, buttonText
}) => {
  return (
    <>
      <div className="jumbotron-container">
        <img className="jumbotron-image" src={img} alt={alt}/>
        <div className="jumbotron-content-wrapped">
          <h1 className="jumbotron-title">{title}</h1>
          <p className="jumbotron-description">
            {description}
          </p>
          <Button
            buttonStyle='btn--primary'
            buttonSize='btn--wide'
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </>
  )
};

export default Jumbotron;