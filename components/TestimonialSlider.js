// testimonial data
const testimonialData = [
  {
    image: '/t-avt-2.png',
    name: 'Adriano Possebon',
    position: 'Professor Doutor - UnB',
    message:
      'Muito dedicado, sempre buscando desafios maiores; entregou 25 simulações CFD no TCC onde uma só seria necessária! Trabalho nível de mestrado.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Thiago Rivero',
    position: 'CEO - Coalah',
    message:
      'Homem de jornada profissional marcada pela ótima capacidade de aprendizado, pela constante busca do aprimoramento, de indole é notavelmente benevolente, sempre pronto para ajudar e inspirar os outros.',
  },
  {
    image: '/t-avt-1.png',
    name: 'Raphael Matsunaga',
    position: 'CEO - HealthGo',
    message:
      'Profissional competente, transparente e muito dedicado à evolução pessoal e profissional.',
  },
];


import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { FaQuoteLeft } from 'react-icons/fa';
import { Navigation, Pagination} from 'swiper';
import Image from 'next/image';

const TestimonialSlider = () => {
  return ( 
  <Swiper
  navigation={true}
    pagination={{
      clickable: true
    }}
    modules={[ Navigation, Pagination]}
    className='h-[400px] max-w-[80vw] rounded-3xl bg-white/20'
  >
    {
    testimonialData.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
            {/* {avatar} */}
            <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
              <div className='flex flex-col justify-center text-center'>
                <div className='mb-2 mx-auto'>
                  {/* <Image src={item.image} width={100} height={100} alt='' /> */}
                </div>
                <div className='text-lg'>{item.name}</div>
                <div className='text-[12px] uppercase font-extralight'>{item.position}</div>
              </div>
            </div>
            <div className='flex-1 flex flex-col justify-center before:w-[2px] xl:before:bg-accentyellow xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
              <div className='mb-4'>
                <FaQuoteLeft className='text-4xl xl:text-6xl text-white/40 mx-auto md:mx-10'/>
              </div>
              <div className='xl:text-lg text-center md:text-left'>{item.message}</div>
            </div>
          </div>
        </SwiperSlide>
      );
      })}
  </Swiper>
  );
};

export default TestimonialSlider;
