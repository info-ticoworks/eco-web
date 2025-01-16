import { ECOKHEMIA_SERVICES } from '@/data/services';
import HomeServiciosCard from './HomeServiciosCard';
import './home-servicios.css';

export default function HomeServicios() {
  const services = ECOKHEMIA_SERVICES;

  return (
    <section className="px-0 pt-8 pb-8 2xl:pb-16" id='servicios'>
      <div className="container">
        <h2 className='pb-24 px-4 md:px-4  font-sans font-bold leading-7 text-[32px] md:text-5xl text-eco-blue--dark'>
          Servicios
        </h2>

        <div className="flex flex-wrap justify-center w-full gap-16 md:justify-center md:gap-8 md:px-4 xl:justify-between">
          {
            services.map((service) => (
              <HomeServiciosCard service={service} key={service.slug} />
            ))
          }
        </div>
      </div>
    </section>
  );
}