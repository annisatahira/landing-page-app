import React from 'react';
import Jumbotron from '../../Jumbotron';
import ContainerKursus from '../../Container/Kursus';
import { 
	homeObjJumbotron, 
	homeObjKelas, 
	homeObjKursus,
	homeObjOption,
      homeObjTraining
} from './Data';
import KelasSection from './Section/Kelas';
import OptionSection from './Section/Option';
import PendaftaranSection from './Section/Pendaftaran';
import FeaturedSection from './Section/Featured';

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
      <OptionSection {...homeObjOption}/>
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
      <PendaftaranSection {...homeObjTraining} />
      <FeaturedSection />
    </>
  )
};

export default Home;