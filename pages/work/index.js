import {} from 'react-icons/rx'
import WorkSlider from '../../components/WorkSlider'
import ParticlesContainer from '../../components/ParticlesContainer';

const Work = () => {
  return <div className='bg-primary/60 h-[85vh] xl:h-[90vh] m-4 rounded-3xl'>
    <ParticlesContainer />
    <div className='container mx-auto h-full flex flex-col justify-center'>
      <div className='flex flex-col xl:flex-row gap-x-8 p-32 lg:p-40'>
        {/* {text} */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <h2 className='h2'>
             Experiência Transformadora<span className='text-accentpurple'>.</span>
          </h2>
          <p className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
          Os trabalhos apresentados são exemplos vívidos da capacidade deste talentoso profissional em conceber e executar projetos inovadores, que transcendem expectativas e definem padrões de excelência.
          </p>
        </div>
        <div className='h-full xl:max-w-[70%]'>
          {/* {slide} */}
          <WorkSlider />
        </div>
      </div>
    </div>
  </div>
};

export default Work;
