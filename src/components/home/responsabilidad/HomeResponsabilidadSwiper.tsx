'use client';

import { RESPONSIBILITIES } from '@/data/home';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeResponsabilidadCard from './HomeResponsabilidadCard';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';



export default function HomeResponsabilidadSwiper() {
  const responsibilityCards = RESPONSIBILITIES;

  return (
    <div className='relative'>
      <Image
        className='absolute top-0 left-0 w-full h-auto'
        src='/images/responsibility/vector-bg.svg'
        width={1212}
        height={1624}
        loading='lazy'
        alt='Ecokhemia, Responsabilidad, SVG'
      />

      <Swiper
        className='container'
        slidesPerView={1}
        spaceBetween={0}
        loop
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {
          responsibilityCards.map((card, index) => (
            <SwiperSlide key={index}>
              <HomeResponsabilidadCard
                image={card.image}
                title={card.title}
                text={card.text}
                logos={card.logos}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}