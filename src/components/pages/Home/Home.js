import React from 'react';
import Jumbotron from '../../Jumbotron';
import {homeObjJumbotron} from './Data';

const Home = () => {
  return (
    <>
      <Jumbotron {...homeObjJumbotron} />
    </>
  )
};

export default Home;