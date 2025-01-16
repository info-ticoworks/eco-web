/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Contact from '@/components/contact/Contact';
import ServiciosNavigation from '@/components/servicios/ServiciosNavigation';
import { ECOKHEMIA_SERVICES } from '@/data/services';

import '@/app/servicios/servicios.css';
import { Service } from '@/interfaces/services';
import ServiciosSwiper from '@/components/servicios/ServiciosSwiper';
import { getServiceCarousel } from '@/actions/Servicios.action';
import Image from 'next/image';

interface PageProps {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const services = ECOKHEMIA_SERVICES;
  const { slug } = params;

  const service: Service | undefined = services.find((service) => service.slug === slug);
  const serviceImagesCarousel = await getServiceCarousel({ slug });
  const imagesExist = !!(
    serviceImagesCarousel?.data?.data?.attributes?.images?.data
  );


  if (service == null) {
    // Handle the case when service is undefined
    return (
      <div className='px-8 services'>
        <ServiciosNavigation services={services} slug={slug} />
        <div className="container px-4 py-4">
          <h1 className='text-xl leading-8 text-center text-eco-blue--dark'>
            No se encontró la página
          </h1>
        </div>
        <Contact />
      </div>
    ); // or any other appropriate action
  }

  return (
    <div className='px-8 services'>
      <ServiciosNavigation services={services} slug={slug} />

      <div className="container px-4 py-4">
        <h1 className='pb-6 text-xl md:text-[32px] font-bold leading-8 text-eco-blue--dark'>
          {service.name}
        </h1>

        <div className="flex flex-col gap-4 xl:flex-row">
          {/* description */}
          <div
            className="text-left text-eco-gray text-[13px] md:text-xl leading-[18px] flex flex-col gap-4 xl:w-1/2  xl:max-w-[455px] mx-auto items-start"
            dangerouslySetInnerHTML={{ __html: service.description }} />
          {/* description */}

          {/* carousel */}
          {
            serviceImagesCarousel.error ? (
              <div className="w-full pt-4 mx-auto xl:mx-0 xl:pt-0 xl:w-1/2">
                <Image
                  src={service.cover}
                  width={1024}
                  height={768}
                  alt='Ecokhemia - Servicios'
                />
              </div>
            ) : (
              <div className="w-full pt-4 mx-auto xl:mx-0 xl:pt-0 xl:w-1/2">
                {
                  imagesExist
                    ? (
                      <ServiciosSwiper images={serviceImagesCarousel.data.data.attributes.images.data} />
                    )
                    : (
                      <Image
                        src={service.cover}
                        width={1024}
                        height={768}
                        alt='Ecokhemia - Servicios'
                      />
                    )
                }
              </div>
            )
          }
          {/* carousel */}
        </div>
      </div>



      <Contact />
    </div>
  );
};

export default Page;