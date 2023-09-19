import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { Pagination} from 'swiper';
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image';


// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.png',
        },
        {
          title: 'title',
          path: '/thumb2.png',
        },
        {
          title: 'title',
          path: '/thumb3.png',
        },
        {
          title: 'title',
          path: '/thumb4.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.png',
        },
        {
          title: 'title',
          path: '/thumb2.png',
        },
        {
          title: 'title',
          path: '/thumb3.png',
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
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, index) => {
              return ( 
              <div className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                <div className='flex items-center justify-center relative overflow-hidden'>
                  <Image src={image.path} width={500} height={300} alt=''/>
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
