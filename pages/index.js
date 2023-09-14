import Image from "next/image";

import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

import {motion} from 'framer-motion';

import { fadeIn } from '../variants';

const Home = () => {
  return <div className='bg-primary/60 h-[85vh] xl:h-[90vh] m-4 rounded-3xl'>
    <ParticlesContainer />
    {/* {text} */}
    <div className='w-full h-full bg-gradient-t-r from-primary/10 via/black/30 to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
        {/* {title} */}
        <motion.h1 variants={fadeIn('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h1 uppercase text-slate-50	'>
          Titulo de impacto Com <br />{' '}
          <span className='uppercase font-bold text-black'>Destaque </span><span className='uppercase font-bold text-yellow-200'>Colorido</span> <br />
        </motion.h1>
        {/* {subtitulo} */}
        <motion.p variants={fadeIn('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
          Aqui pode ter uma descrição simples com muitos lorems imsado asda dasm  maomdwaida mdaowdmawd hu hdhua dhua ha huiwd a nadun au ndau au uaua  ndaiuwduyadm md aoimw
        </motion.p>
        {/* {btn} */}
        <div className='flex justify-center xl:hidden'>
          <ProjectsBtn />
        </div>
        <motion.div 
          variants={fadeIn('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden xl:flex'
        >
          <ProjectsBtn />
        </motion.div>
      </div>
      
    </div>

  </div>;
};

export default Home;
