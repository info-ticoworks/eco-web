import DynamicSvg from '@/components/svg/DynamicSvg';
import { INNOVATIONS } from '@/data/home';
import Image from 'next/image';

export default function HomeInnovaciones() {
  const innovations = INNOVATIONS;

  return (
    <section className='relative px-0 py-16' id='innovaciones'>
      <Image
        className='absolute top-0 right-0 max-w-[228px] sm:max-w-[470px] object-contain object-right-top z-0'
        src="/images/innovation/bg.svg"
        width={654}
        height={461}
        alt='ecokhemia vector'
      />
      {/* floatin-resource */}

      <div className="container px-4">
        <h3 className='text-[32px] md:text-5xl font-bold text-eco-green pb-4 sm:pb-8'>
          Innovaciones
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-auto gap-x-8 gap-y-8">
          <div className="relative w-full h-fit p-1 min-w-[306px] min-h-[294px] max-w-[632px] 2xl:max-w-[833px] mx-auto order-1 lg:order-2">
            <Image
              className='object-cover object-center w-full h-auto rounded-xl'
              src='/images/innovation/innovaciones.webp'
              width={1660}
              height={1660}
              loading='lazy'
              quality={100}
              alt='Ecokhemia, Innovaciones'
            />
          </div>

          <div className="order-2 lg:order-1">
            <div className="flex flex-col items-start lg:h-full lg:justify-center gap-8 w-full max-w-[548px] lg:max-w-[100%] mx-auto">
              {
                innovations.map(innovation => (
                  <div key={innovation.slug} className='flex flex-col items-start gap-2'>
                    <div className="flex items-center justify-start gap-4">
                      <div className='w-16 h-16 p-1 min-w-16'>
                        <DynamicSvg
                          className='h-[56] w-[56] my-auto'
                          svgName={innovation.slug}
                        />
                      </div>

                      <div className="w-auto text-left">
                        <h4 className="text-xl italic font-bold leading-6 lg:leading-6 lg:text-xl md:text-2xl md:leading-9 xl:text-2xl xl:leading-9 text-eco-blue--dark">{innovation.name}</h4>
                      </div>
                    </div>
                    <div className='text-left'>
                      <p className='text-base leading-5 md:text-xl md:leading-7 lg:text-base lg:leading-5 xl:text-xl xl:leading-7 text-eco-gray'>{innovation.text}</p>
                    </div>
                  </div>

                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}