import {} from 'react-icons/rx'
import ServiceSlider from '../../components/ServiceSlider'

const Services = () => {
  return <div className='bg-primary/60 h-[85vh] xl:h-[90vh] m-4 rounded-3xl'>
    <div className='container mx-auto h-full flex flex-col justify-center'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* {text} */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <h2 className='h2 xl:mt-8'>
            Meus Skill <span className='text-pink-500'>.</span>
          </h2>
          <p className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
            sadjio asjio iasdjio asjjias jiosad jiasjiod asdasd mioasdioasdmioasmiodasmiodmioamiod mioamio asd miasm amisdamiosd adipiscingasdasdd
            asdasdhuasdasduashuidashuidhuasdasd
            ahuisdhiasudhuiasdhui
            asmdasiodmasiod
            aiksmdaosdasmd
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
