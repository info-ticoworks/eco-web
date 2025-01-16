import HomeHeader from '@/components/home/header/HomeHeader';
import HomeNosotros from '@/components/home/nosotros/HomeNosotros';
import HomeServicios from '@/components/home/servicios/HomeServicios';
import HomeClientes from '@/components/home/clientes/HomeClientes';
import HomeInnovaciones from '@/components/home/innovaciones/HomeInnovaciones';
import HomeResponsabilidad from '@/components/home/responsabilidad/HomeResponsabilidad';
import Contact from '@/components/contact/Contact';

export default function Home() {
  return (
    <main className='relative flex flex-col'>
      <HomeHeader />
      <HomeServicios />
      <HomeNosotros />
      <HomeClientes />
      <HomeInnovaciones />
      <HomeResponsabilidad />

      <Contact />
    </main>
  );
}
