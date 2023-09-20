import React, {useState} from "react";
import CountUp from "react-countup";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaPython,
  FaNodeJs,
  FaAngular
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAnsys,
  SiNumpy,
  SiSelenium,
  SiPandas,
  SiTypescript,
  SiSqlite,
  SiIonic
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'Competências',
    info: [
      {
        title: 'DEV FullStack',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <SiTypescript />,
          <FaAngular />,
          <FaReact />,
          <SiNextdotjs />,
          <FaNodeJs />,
          <SiSqlite />,
          <SiIonic />
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />],
      },
      {
        title: 'CFD - Computational Fluid Dynamics',
        icons: [<SiAnsys />, <FaPython />],
      },
      {
        title: 'Análise de Dados',
        icons: [<FaPython />, <SiNumpy />, <SiPandas />, <SiSelenium />]
      }
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return(
  <div className='bg-primary/60 h-[85vh] xl:h-[90vh] m-4 rounded-3xl text-center xl:text-left'>
    <div className="container mx-auto h-full w-full flex flex-col items-center xl:flex-row gap-x-6">
      {/* {text} */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className='h2'>Titulo de texto<span className='text-purple-500'> com destaque  </span>sacou?</h2>
        <p className='mx-2-[500px] mx-auto xl:max-0 mb-6 xl:mb-12 px-12 xl:px-0'>Aqui pode ter uma descrição simples com muitos lorems imsado asda dasm maomdwaida mdaowdmawd hu hdhua dhua ha huiwd a nadun au ndau au uaua ndaiuwduyadm md aoimw</p>
        {/* {counters} */}
        <div className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
          <div className='flex flex-1 xl:gap-x-6'>
            {/* {experience} */}
            <div className='relative flex-1 bg-white/20 rounded-2xl px-2 py-2'>
              <div className='text-2xl xl:text-4xl font-extrabold text-purple-500 ml-2 mb-2'>
                <CountUp start={0} end={10} duration={5} /> + 
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ml-2'>Anos de experiência</div>
            </div>
            {/* {clients} */}
            <div className='relative flex-1 bg-white/20 rounded-2xl px-2 py-2'>
              <div className='text-2xl xl:text-4xl font-extrabold text-purple-500 mb-2 ml-2'>
                <CountUp start={0} end={250} duration={5} /> + 
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ml-2'>Clientes Satisfeitos</div>
            </div>
            {/* {projects} */}
            <div className='relative flex-1 bg-white/20 rounded-2xl px-2 py-2'>
              <div className='text-2xl xl:text-4xl font-extrabold text-purple-500 mb-2 ml-2'>
                <CountUp start={0} end={50} duration={5} /> + 
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ml-2'>Projetos Finalizados</div>
            </div>
            {/* {awards} */}
            <div className='relative flex-1 bg-white/20 rounded-2xl px-2 py-2'>
              <div className='text-2xl xl:text-4xl font-extrabold text-purple-500 mb-2 ml-2'>
                <CountUp start={0} end={150} duration={5} /> + 
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ml-2'>Conquistas realizadas</div>
            </div>
          </div>
        </div>
      </div>
      {/* {info} */}     
      <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className={`${index === itemIndex && 'text-yellow-200 after:w-[100%] after:bg-yellow-200 after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            )
          })}
        </div>
        <div className='bg-white/20 rounded-xl items-center xl:items-start py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4'>
          {aboutData[index].info.map((item, itemIndex) => {
            return <div key={itemIndex} className='ml-2 flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/80'>
              <div className='font-light mb-2 md:mb-0'>{item.title}</div>
              <div className='hidden md:flex'>-</div>
              <div>{item.stage}</div>
              <div className='flex gap-x-4'>
                {item.icons?.map((icon, itemIndex) => {
                  return <div className='text-2xl text-white'>{icon}</div>
                })}
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;
