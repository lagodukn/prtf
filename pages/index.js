import Image from "next/image";

import ParticleContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

import {motion} from 'framer-motion';

import { fadeIn } from '../variants';

const Home = () => {
  return <div className='bg-primary/60 h-[85vh] xl:h-[90vh] m-4 rounded-3xl'>
    {/* {text} */}
    <div className='w-full h-full bg-gradient-t-r from-primary/10 via/black/30 to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
        {/* {title} */}
        <h1 className='h1'>
          Titulo de impacto <br /> Com{' '}
          <span className='text-yellow-200'>Destaque Colorido</span>
        </h1>
        {/* {subtitulo} */}
        <p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
          Aqui pode ter uma descrição simples com muitos lorems imsado asda dasm  maomdwaida mdaowdmawd hu hdhua dhua ha huiwd a nadun au ndau au uaua  ndaiuwduyadm md aoimw
        </p>
      </div>
    </div>

  </div>;
};

export default Home;
