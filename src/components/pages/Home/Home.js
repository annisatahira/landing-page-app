import React from 'react';
import Jumbotron from '../../Jumbotron';
import { homeObjJumbotron, homeObjKelas } from './Data';
import KelasSection from './Section/Kelas';

const Home = () => {
  return (
    <>
      <Jumbotron {...homeObjJumbotron} />
      <KelasSection {...homeObjKelas}/>
    </>
  )
};

export default Home;