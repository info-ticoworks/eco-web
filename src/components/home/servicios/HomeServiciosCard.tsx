'use client';

import DynamicSvg from '@/components/svg/DynamicSvg';
import { Service } from '@/interfaces/services';
import Image from 'next/image';
import Link from 'next/link';

const HomeServiciosCard = ({ service }: { service: Service; }) => {
  const goToPage = (page: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = `/servicios/${page}`;
    }
  };

  return (
    <Link
      className="home-service-card shadow-service-card cursor-pointer flex flex-col w-full max-w-[360px] relative rounded-bl-2xl transition-all rounded-br-2xl md:rounded-tl-2xl md:rounded-tr-2xl md:my-6"
      href={`/servicios/${service.slug}`}
    >
      {/* icon */}
      <div className="absolute top-[-44px] left-1 rounded-full w-[88px] h-[88px] flex items-center justify-center bg-eco-green shadow-circle p-2 md:z-10 text-white">
        <DynamicSvg
          svgName={service.slug}
          className='object-contain object-center w-full h-full'
        />
      </div>
      {/* icon */}

      {/* cover-only shown in >= tablet */}
      <Image
        className='hidden object-cover object-center w-full h-[255px] md:block md:rounded-2xl'
        src={service.cover}
        loading='lazy'
        width={800}
        height={500}
        quality={90}
        alt={`Portada ${service.name} - Ecokhemia`}
      />
      {/* cover-only shown in >= tablet */}

      <div className="flex text-white bg-eco-sky-blue items-center justify-end w-full h-full gap-2 px-2 py-2 rounded-bl-2xl rounded-br-2xl md:h-[72px] md:absolute md:left-0 md:bottom-0 md:justify-between">
        <h4 className='w-[194px] ml-[84px] text-xl italic font-bold leading-7 md:w-auto md:ml-0 md:pl-4'>
          {service.name}
        </h4>

        <button
          className='max-w-[48px] min-w-[48px] h-[48px] flex items-center justify-center bg-white text-eco-sky-blue rounded-full mx-0 shadow-circle-2 hover:text-eco-green transition-colors'
          title='Ver más'
          onClick={() => goToPage(service.slug)}
        >
          <span className='text-4xl font-bold'>+</span>
        </button>
      </div>
    </Link>
  );
};

export default HomeServiciosCard;