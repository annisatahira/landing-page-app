import React from 'react';
import Jumbotron from '../../Jumbotron';
import ContainerKursus from '../../Container/Kursus';
import { homeObjJumbotron, homeObjKelas, homeObjKursus } from './Data';
import KelasSection from './Section/Kelas';

const Home = () => {
  return (
    <>
      <Jumbotron {...homeObjJumbotron} />
      <KelasSection {...homeObjKelas}/>
      <ContainerKursus 
      	containerStyle="list-kursus--spesial"
      	containerColor="blue-light"
      	title="Khusus Prakerja"
      	titlePosition="title-center"
      	titleColor="title-white"
      	enableButton={true}
      	buttonTitle="Semua Khusus Prakerja"
      	items={homeObjKursus}
      />
      <ContainerKursus 
      	title="Terbaru"
      	items={homeObjKursus}
      />
      <ContainerKursus 
      	title="Best Seller"
      	items={homeObjKursus}
      />
      <ContainerKursus 
      	title="Kursus Gratis"
      	items={homeObjKursus}
      	enableMore={true}
      />
      <ContainerKursus 
      	title="Kursus Bersertifikat"
      	items={homeObjKursus}
      	enableMore={true}
      />
      <ContainerKursus 
      	title="Kursus Keuangan"
      	items={homeObjKursus}
      	enableMore={true}
      />
    </>
  )
};

export default Home;