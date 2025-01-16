import HomeResponsabilidadSwiper from './HomeResponsabilidadSwiper';
import './responsibility.css';

export default function HomeResponsabilidad() {
  return (
    <section className="relative px-0 py-16 responsibility bg-gradient-ecokhemia" id='responsabilidad'>
      <h3 className='text-[32px] md:text-5xl font-bold text-white pb-4 sm:pb-8 px-4 container'>
        Responsabilidad
      </h3>

      <HomeResponsabilidadSwiper />
    </section>
  );
}