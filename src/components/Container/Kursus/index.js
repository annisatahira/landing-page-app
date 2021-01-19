import React, { useState } from 'react';
import CardKursus from '../../Card/Kursus';
import { Button } from '../../Button';
import Carousel from "react-multi-carousel";
import { GrFormNext } from "react-icons/gr";
import "react-multi-carousel/lib/styles.css";
import "./style.css";

const STYLES = ['list-kursus--primary', 'list-kursus--special'];

const COLORS = ['primary-kursus', 'blue-light'];

const TITLE_COLORS = ['primary-title', 'title-white'];

const TITLE_POSITION = ['title-left','title-center'];


const ContainerKursus =  ({
  children,
  containerStyle,
  containerColor,
  title,
  titlePosition,
  titleColor,
  enableMore,
  enableButton,
  buttonTitle,
  className,
  items
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
				<div className={`card-list-title-wrapper
					${checkTitlePosition === 'title-center' ? 'card-list-title-center' : 'card-list-title-left'}`}
					>
					<h1 className={`card-list-title
						${checkTitleColor}
						${checkTitlePosition}
		        ${checkClassName}`}
					>
						{title}
					</h1>
					{
						enableMore && (
						<div className="card-list-more">
							Lihat Semua
							<GrFormNext className="gr-next-icon"/>
						</div>
						)
					}
				</div>
				<Carousel 
					responsive={responsive} 
					deviceType="desktop"
				>
					{(items ? items.kursus : []).map((item) => {
						return (
							<CardKursus 
								key={item.id}
								banner={item.banner}
								bannerAlt={item.bannerAlt}
								title={item.title}
								rating={item.rating}
								jumlahPeserta={item.jumlahPeserta}
								teacherImage={item.teacherImage}
								teacherName={item.teacherName}
							/>
						)
					})}
				</Carousel>
				{
					enableButton && (
						<div className="card-kursus-list-button">
							<Button
								buttonSize="btn--wide"
								buttonColor="transparent"
								className="button-kursus"
							>
								{buttonTitle}
							</Button>
						</div>
					)
				}
			</div>
		</div>
	)
};


export default ContainerKursus;