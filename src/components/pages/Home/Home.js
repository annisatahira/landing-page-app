import React from 'react';
import CardKelas from '../../Card/Kelas';
import Jumbotron from '../../Jumbotron';
import {homeObjJumbotron} from './Data';

const Home = () => {
  return (
    <>
      <Jumbotron {...homeObjJumbotron} />
      <CardKelas />
    </>
  )
};

export default Home;