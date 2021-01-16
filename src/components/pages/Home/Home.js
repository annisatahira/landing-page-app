import React from 'react';
import CardInfo from '../../Card/Info';
import Jumbotron from '../../Jumbotron';
import {homeObjJumbotron} from './Data';

const Home = () => {
  return (
    <>
      <Jumbotron {...homeObjJumbotron} />
      <CardInfo />
    </>
  )
};

export default Home;