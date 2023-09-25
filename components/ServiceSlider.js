import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxCamera,
  RxRocket,
  RxRulerSquare,
  RxPieChart,
  RxArrowTopRight,
} from "react-icons/rx";
import {FreeMode, Pagination} from 'swiper';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Transformação de imagem em marcas poderosas.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design UI/UX',
    description: 'Capturando a essência e a visão de sua empresa, UI/UX.',
  },
  {
    icon: <RxDesktop />,
    title: 'FullStack',
    description: 'Do banco de dados, até controle dele, até a disposição em telas.',
  },
  {
    icon: <RxPieChart />,
    title: 'Análise De Dados',
    description: 'Manipulação matemática de dados à disposição em gráficos.',
  },
  {
    icon: <RxRulerSquare />,
    title: 'Projetos Mecânicos',
    description: 'De precisão para soluções que transformam realidades.',
  },
  {
    icon: <RxRocket />,
    title: 'Aerodinamiscista',
    description: 'Projetos CFD com foco no automobilismo amador e performance.',
  },
];

const ServiceSlider = () => {
  return ( 
  <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    }}
    freeMode={true}
    pagination={{
      clickable: true
    }}
    modules={[FreeMode, Pagination]}
    className='h-[240px] sm:h-[340px]'
  >
    {
    serviceData.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <div className='bg-white/10 h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-white/20'>
            <div className='text-4xl text-accentpink mb-4'>{item.icon}</div>
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
            </div>
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accentpink transition-all duration-300'/>
            </div>
          </div>
        </SwiperSlide>
      );
      })}
  </Swiper>
  );
};

export default ServiceSlider;
