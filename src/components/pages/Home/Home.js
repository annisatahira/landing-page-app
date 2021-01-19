import React from 'react';
import CardKursus from '../../Card/Kursus';
import Jumbotron from '../../Jumbotron';
import { homeObjJumbotron, homeObjKelas } from './Data';
import KelasSection from './Section/Kelas';

const Home = () => {
  return (
    <>
      <Jumbotron {...homeObjJumbotron} />
      <KelasSection {...homeObjKelas}/>
      <CardKursus />
    </>
  )
};

export default Home;