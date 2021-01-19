import React from 'react';
import Jumbotron from '../../Jumbotron';
import ContainerKursus from '../../Container/Kursus';
import { homeObjJumbotron, homeObjKelas } from './Data';
import KelasSection from './Section/Kelas';

const Home = () => {
  return (
    <>
      <Jumbotron {...homeObjJumbotron} />
      <KelasSection {...homeObjKelas}/>
      <ContainerKursus />
    </>
  )
};

export default Home;