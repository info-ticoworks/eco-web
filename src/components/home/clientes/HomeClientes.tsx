'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { CLIENTS } from '@/data/home';

import 'swiper/css';
import './home-clientes.css';

export default function HomeClientes() {
  const clients = CLIENTS;
  return (
    <div className="px-0 py-16 bg-gradient-gray-white clientes" id='clientes'>
      <h3 className="font-bold text-[32px] md:text-5xl leading-7 text-eco-green container px-4 text-left">
        Nuestros Clientes
      </h3>

      <Swiper
        className=' h-[144px] my-8  mix-blend-luminosity'
        slidesPerView="auto"
        loop
        autoplay
        allowTouchMove={false}
        draggable={false}
        modules={[Autoplay]}
      >
        {
          clients.map((client, index) => (
            <SwiperSlide
              className='h-[90px] px-4'
              style={{
                width: 'fit-content'
              }}
              key={index}
            >
              <Image
                className='object-contain h-full px-2 py-2 mx-4 mix-blend-luminosity'
                width={client.width}
                height={client.height}
                src={client.image}
                quality={100}
                loading='lazy'
                alt='Ecokhemia, nuestros clientes'
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}