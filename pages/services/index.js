import {} from 'react-icons/rx'
import ServiceSlider from '../../components/ServiceSlider'
import ParticlesContainer from '../../components/ParticlesContainer';

const Services = () => {
  return <div className='bg-primary/60 h-[85vh] xl:h-[90vh] m-4 rounded-3xl'>
    <ParticlesContainer />
    <div className='container mx-auto h-full flex flex-col justify-center'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* {text} */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <h2 className='h2 xl:mt-8'>
            Aptidões oferecidas <span className='text-accentpink'>.</span>
          </h2>
          <p className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
          Sinta-se a vontade para obter suas soluções personalizadas em engenharia, desenvolvimento web/desktop/app, data science e design, unindo expertises em múltiplas áreas.
          </p>
        </div>
        <div className='h-full xl:max-w-[65%]'>
          {/* {slide} */}
          <ServiceSlider />
        </div>
      </div>
    </div>
  </div>
};

export default Services;
