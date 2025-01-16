import { Responsibility } from '@/interfaces/home';
import Image from 'next/image';

export default function HomeResponsabilidadCard(responsibility: Responsibility) {
  return (
    <div className='relative grid w-full h-full grid-cols-1 px-2 pt-2 pb-6 mx-auto bg-white rounded-lg auto-rows-auto lg:grid-cols-2 lg:pb-2 lg:gap-4'>
      <div className="responsibility-card--borders" />
      <Image
        className='order-1 object-cover w-full h-auto rounded-lg lg:order-2'
        src={responsibility.image}
        width={1600}
        height={1550}
        alt={`Ecokhemia, ${responsibility.title}`}
        loading='lazy'
      />
      <div className="flex flex-col items-stretch justify-start sm:max-w-[540px] sm:mx-auto w-full order-2 lg:order-1 lg:pt-8 xl:pt-0 lg:pl-4 xl:pl-0">
        <h1 className='w-full pt-8 pb-2 text-base italic font-bold uppercase text-eco-green sm:text-2xl lg:pt-0 lg:text-base xl:text-2xl 2xl:pt-8 2xl:pb-4 3xl:pb-8 3xl:pt-16'>
          {responsibility.title}
        </h1>

        <div
          className='flex flex-col w-full gap-4 text-[13px] leading-[18px] text-eco-gray sm:text-xl lg:text-[13px] sm:leading-7 xl:text-xl xl:leading-7 lg:leading-[18px] lg:pr-4'
          dangerouslySetInnerHTML={{ __html: responsibility.text }}
        />

        <div className="flex items-center justify-around w-full gap-4 pt-4 pb-2 mt-auto xl:pb-0">
          {
            responsibility.logos.map((logo, index) => (
              <Image
                key={index}
                className='object-contain object-center w-[80px] sm:w-[120px] 2xl:w-[144px]'
                src={logo}
                width={300}
                height={300}
                quality={100}
                alt='Responsabilidades, ECOKHEMIA'
                placeholder='blur'
                blurDataURL={logo}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}