import React, { useState } from 'react';
import CardKursus from '../../Card/Kursus';
import { Button } from '../../Button';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";

const STYLES = ['list-kursus--primary', 'list-kursus--special'];

const COLORS = ['primary-kursus', 'blue-light'];

const TITLE_COLORS = ['title-white', 'primary-title'];

const TITLE_POSITION = ['title-center', 'title-left'];


const ContainerKursus =  ({
  children,
  containerStyle,
  containerColor,
  titlePosition,
  titleColor,
  className
}) => {

  const checkContainerStyle = STYLES.includes(containerStyle) ? containerStyle : STYLES[0];

  const checkContainerColor = COLORS.includes(containerColor) ? containerColor : COLORS[0];

  const checkTitleColor = TITLE_COLORS.includes(titleColor) ? titleColor : TITLE_COLORS[0];

  const checkTitlePosition = TITLE_POSITION.includes(titlePosition) ? titlePosition : TITLE_POSITION[0];

  const checkClassName = className ? className : '';

  const responsive = {
	  superLargeDesktop: {
	    breakpoint: { max: 4000, min: 3000 },
	    items: 5
	  },
	  desktop: {
	    breakpoint: { max: 3000, min: 1800 },
	    items: 4
	  },
	  tablet: {
	    breakpoint: { max: 1024, min: 464 },
	    items: 2
	  },
	  mobile: {
	    breakpoint: { max: 464, min: 0 },
	    items: 1
	  }
	};

	return (
		<div 
			className={`container-kursus 
        ${checkContainerStyle} 
        ${checkContainerColor}
        ${checkClassName}`}
		>
			<div className="card-kursus-list">
				<h1 className={`card-list-title
					${checkTitleColor}
					${checkTitlePosition}
	        ${checkClassName}`}
				>
					Khusus Prakerja
				</h1>
				<Carousel 
					responsive={responsive} 
					deviceType="desktop"
				>
					<CardKursus />
					<CardKursus />
					<CardKursus />
					<CardKursus />
					<CardKursus />
				</Carousel>
				<div className="card-kursus-list-button">
					<Button
						buttonSize="btn--wide"
						buttonColor="transparent"
						className="button-kursus"
					>
						Semua Kursus Prakerja
					</Button>
				</div>
			</div>
		</div>
	)
};


export default ContainerKursus;