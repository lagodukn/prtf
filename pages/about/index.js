import React, {useState} from "react";
import CountUp from "react-countup";
import ParticlesContainer from '../../components/ParticlesContainer';

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
        title: 'Top 10 FSAE - Time Apuama Racing UnB',
        stage: '2017 - 2018',
      },
      {
        title: 'Bot para match de produtos em corredores de mercados SMU',
        stage: '2019',
      },
      {
        title: 'Reformulação de gestão de projetos em time DEV - ICABANK',
        stage: '2020',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - HealthGo Technologies',
        stage: '2023',
      },
      {
        title: 'FullStack Dev - HealthGo Technologies',
        stage: '2023',
      },
      {
        title: 'Front-End E2E Dev - IcaBank',
        stage: '2021 - 2022',
      },
      {
        title: 'Front-End Dev - Coalah By: Thip - FRIDOM',
        stage: '2021',
      },
      {
        title: 'Front-End Dev - Perícia Predial',
        stage: '2021',
      },
      {
        title: 'Auxiliar Administrativo - Bayerische AutoWerk',
        stage: '2020 - 2021',
      },
      {
        title: 'Gerente de Vendas - SmokeHouse FortLauderdale - Flórida',
        stage: '2019 - 2020',
      },
      {
        title: 'Trainee Engenharia - Grupo Orion',
        stage: '2018',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Engenharia Mecânica - UnB, BSB, DF',
        stage: '2023',
      },
      {
        title: 'Agile, com SCRUM, XP, KanBan, Spotfy e Trello - Udemy',
        stage: '2023',
      },
      {
        title: 'Python para Data Science e Machine Learning - Udemy',
        stage: '2023',
      },
      {
        title: 'Python para Data Science e Machine Learning - Udemy',
        stage: '2023',
      },
      {
        title: 'Angular 15 + Projeto Financeiro - Udemy',
        stage: '2023',
      },
      {
        title: 'Angular 15 Básico ao Avançado - Udemy',
        stage: '2023',
      },
      {
        title: 'Gestão de Projetos - Udemy',
        stage: '2019',
      },
      {
        title: 'Telemetria e análise de dados PorscheCup - UnB, BSB, DF',
        stage: '2019',
      },
      {
        title: 'Projeto de Aerodinâmica em carros de corrida - SAE, SP, SP',
        stage: '2017',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return(
  <div className='bg-primary/60 h-[85vh] xl:h-[90vh] m-4 rounded-3xl text-center xl:text-left'>
    <ParticlesContainer />
    <div className="container mx-auto h-full w-full flex flex-col items-center xl:flex-row gap-x-6">
      {/* {text} */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className='h2'>Um pouco das<span className='text-accentyellow'> ferramentas</span> e conquistas.</h2>
        <p className='mx-2-[500px] mx-auto xl:max-0 mb-4 xl:mb-12 px-6 xl:px-0 text-sm xl:text-base'>Inicialmente, minha formação em Engenharia Mecânica me proporcionou uma base sólida em resolução de problemas, mas ao longo do tempo, percebi que a tecnologia desempenharia um papel crucial na resolução dos desafios complexos que eu enfrentava. Foi assim que comecei a me aventurar na programação, com o Python como minha ferramenta de escolha. À medida que mergulhava cada vez mais nesse mundo, descobri minha afinidade pelo desenvolvimento web, tornando-me um full stack developer experiente capaz de abordar uma ampla gama de tarefas, desde a criação de interfaces de usuário a estruturas de banco de dados complexas.
        </p>
        {/* {counters} */}
        <div className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
          <div className='flex flex-1 xl:gap-x-6'>
            {/* {experience} */}
            <div className='relative flex-1 bg-white/20 rounded-2xl px-2 py-2'>
              <div className='text-2xl xl:text-3xl font-extrabold text-accentyellow ml-2 mb-2'>
                <CountUp start={0} end={6} duration={5} /> + 
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ml-2'>Anos de experiência</div>
            </div>
            {/* {clients} */}
            <div className='relative flex-1 bg-white/20 rounded-2xl px-2 py-2'>
              <div className='text-2xl xl:text-2xl font-extrabold text-accentyellow mb-2 ml-2'>
                <CountUp start={0} end={250} duration={5} />k + 
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ml-2'>Linhas de Código</div>
            </div>
            {/* {projects} */}
            <div className='relative flex-1 bg-white/20 rounded-2xl px-2 py-2'>
              <div className='text-2xl xl:text-3xl font-extrabold text-accentyellow mb-2 ml-2'>
                <CountUp start={0} end={25} duration={7} /> + 
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ml-2'>Projetos Finalizados</div>
            </div>
            {/* {awards} */}
            <div className='relative flex-1 bg-white/20 rounded-2xl px-2 py-2'>
              <div className='text-2xl xl:text-3xl font-extrabold text-accentyellow mb-2 ml-2'>
                <CountUp start={0} end={10} duration={7} /> + 
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ml-2'>Empresas Beneficiadas</div>
            </div>
          </div>
        </div>
      </div>
      {/* {info} */}     
      <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className={`${index === itemIndex && 'text-white after:w-[100%] after:bg-white after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            )
          })}
        </div>
        <div className='bg-white/20 rounded-xl items-center xl:items-start py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 text-sm'>
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
