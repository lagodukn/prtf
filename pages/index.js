
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';

import {motion} from 'framer-motion';

import { fadeIn } from '../variants';

const Home = () => {
  return <div className='bg-primary/60 h-[85vh] xl:h-[90vh] mx-4 rounded-3xl'> 
  <ParticlesContainer />
    {/* {text} */}
    <div className='w-full h-full bg-gradient-t-r from-primary/10 via/black/30 to-black/10'> 
      <div className='text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full container mx-auto'>
        
        {/* {title} */}
        <motion.h1 variants={fadeIn('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h1 uppercase text-slate-50	'>
          Thiago Lagares <br />{' '}
          <span className='uppercase font-extrabold text-black'>DEV </span><span className='uppercase text-accentyellow'>Full</span> <br />
        </motion.h1>
        {/* {subtitulo} */}
        <motion.p variants={fadeIn('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-4'>
          Minha jornada de evolução profissional, que me levou de um engenheiro mecânico a um desenvolvedor full stack, é uma narrativa que reflete minha paixão por desafios e minha sede de aprendizado.
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
