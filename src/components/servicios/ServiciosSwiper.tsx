/* eslint-disable @next/next/no-img-element */
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

interface FormatImageFromAPI {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}
interface ImageFromAPI {
  id: number;
  attributes: {
    name: string;
    width: number;
    height: number;
    formats: {
      thumbnail: FormatImageFromAPI;
      large: FormatImageFromAPI;
      medium: FormatImageFromAPI;
      small: FormatImageFromAPI;
    };
    url: string;
  };
}
interface Props {
  images: ImageFromAPI[];
}

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://admin.ecokhemia.com';
const imagePath = (url: string) => `${API_URL}${url}`;

export default function ServiciosSwiper(props: Props) {
  const { images } = props;
  return (
    <Swiper
      className='z-0 h-full'
      autoHeight
      slidesPerView={1}
      draggable={false}
      loop
      autoplay
      navigation
      modules={[Autoplay, Navigation]}
      allowTouchMove={false}
    >
      {
        images.map((image, index) => (
          <SwiperSlide className='relative' key={index}>
            <img
              className='object-cover object-center w-full min-h-[500px] xl:min-h-[450px] h-full max-h-[500px] xl:max-h-[450px]'
              width={1920}
              height={1080}
              src={imagePath(image.attributes.url)}
              alt='Ecokhemia'
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}