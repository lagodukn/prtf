import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { Pagination} from 'swiper';
import Image from 'next/image';


// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          description: 'description',
          path: '/thumb1.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          description: 'description',
          path: '/thumb2.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          description: 'description',
          path: '/thumb3.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          description: 'description',
          path: '/thumb4.png',
        },
      ],
    },
  ],
};



const WorkSlider = () => {
  return ( 
  <Swiper
    spaceBetween={10}
    pagination={{
      clickable: true
    }}
    modules={[ Pagination]}
    className='h-[280px] sm:h-[380px]'
  >
    {
    workSlider.slides.map((slide, index) => {
      return (
        <SwiperSlide key={index}>
          <div className='cursor-pointer'>
            {slide.images.map((image, index) => {
              return ( 
              <div className='relative rounded-3xl overflow-hidden flex items-center justify-center group'>
                <div className='flex items-center justify-center relative overflow-hidden'>
                  <Image src={image.path} width={600} height={300} alt=''/>
                  <div className='absolute inset-0 bg-gradient-to-l from-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                  <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl-translate-y-20 transition-all duration-300'>
                    <div className='flex items-center justify-center flex-col gap-x-2 text-[13px] tracking-[0.2em]'>
                      <div className='delay-100 uppercase font-extrabold'>{image.title} do trem</div>
                      <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>{image.description}</div>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </SwiperSlide>
      );
      })}
  </Swiper>
  );
};

export default WorkSlider;
