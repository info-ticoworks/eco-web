'use client';

import { HEADER_IMAGES } from '@/data/home';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

export default function HomeHeaderSwiper() {
  return (
    <Swiper
      className='relative h-full lg:h-screen landscape:max-h-full portrait:max-h-[900px] min-h-screen portrait:md:min-h-[800px]'
      slidesPerView={1}
      draggable={false}
      loop
      autoplay
      modules={[Autoplay]}
      allowTouchMove={false}
    >
      {
        HEADER_IMAGES.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              className='object-cover object-center w-full h-full lg:h-screen landscape:max-h-full  min-h-screen portrait:md:min-h-[800px]  portrait:max-h-[900px]'
              width={1920}
              height={1080}
              src={image}
              quality={100}
              priority
              alt='Ecokhemia'
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}