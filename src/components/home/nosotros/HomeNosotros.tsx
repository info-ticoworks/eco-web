import { GUARANTEES } from '@/data/home';
import Image from 'next/image';
import HomeNosotrosNumeros from './HomeNosotrosNumeros';
import DynamicSvg from '@/components/svg/DynamicSvg';

export default function HomeNosotros() {
  const guarantees = GUARANTEES;

  return (
    <div className="pt-16 text-white bg-eco-blue--dark" id='nosotros'>
      <div className="container flex flex-col flex-wrap items-center justify-center w-full gap-8 px-4 xl:gap-0 xl:flex-row">
        {/* image-block */}
        <Image
          className='object-contain w-full h-full max-w-[554px] xl:max-w-[744px] xl:w-1/2 xl:pr-8'
          src='/images/about-us/about-us.webp'
          width={1480}
          height={1480}
          alt='Nosotros'
        />
        {/* image-block */}

        {/* text-block */}
        <div className="flex flex-col items-start justify-between w-full h-full max-w-[554px] mx-auto xl:mx-auto xl:max-w-[50%] xl:w-1/2 font-sans">
          <h3 className='pb-4 text-4xl font-semibold text-eco-green md:text-5xl'>Nosotros</h3>

          <p className='py-2 md:py-4 text-[14px] md:text-xl md:leading-7 leading-5 font-medium'>
            En Ecokhemia creemos en el poder de la ciencia para crear un futuro más saludable y sostenible.
          </p>
          <p className='py-2 md:py-4 text-[14px] md:text-xl md:leading-7 leading-5 font-medium'>
            Somos una empresa de limpieza industrial que utiliza diversas tecnologías para ofrecer soluciones eficientes, seguras y responsables con el medio ambiente. Nuestro objetivo es la limpieza consciente, por lo que brindamos un servicio excepcional con innovaciones y productos biodegradables, minimizando el impacto ambiental y protegiendo al planeta para las generaciones futuras.
          </p>
          <p className='py-2 md:py-4 text-[14px] md:text-xl md:leading-7 leading-5 font-medium'>
            Creemos que la limpieza no debe ser a expensas del planeta y, en las manos correctas, la ciencia se convierte en soluciones.
          </p>

          <h4 className="w-full pt-8 pb-4 text-xl italic font-bold md:text-4xl md:text-center text-eco-green xl:text-left">
            Somos la limpieza del futuro
          </h4>
        </div>
        {/* text-block */}
      </div>

      <div className="container w-full px-4 my-8">
        <div className="h-[3px] w-full  bg-gradient-ecokhemia" />
      </div>

      <div className="container flex flex-col flex-wrap items-center justify-center w-full gap-8 px-4 xl:gap-0 xl:flex-row">
        {/* guarantees-block */}
        <h4 className="w-full pb-8 text-xl font-bold text-left sm:text-center xl:w-1/4 md:text-3xl xl:pb-0 xl:text-left xl:leading-10 md:px-0 3xl:max-w-[340px]">
          Garantizamos a nuestros clientes
        </h4>

        <div className="flex flex-wrap justify-center gap-4 md:gap-2 md:justify-between w-full max-w-[420px] md:max-w-[800px] xl:w-3/4">
          {
            guarantees.map(guarantee => (
              <div key={guarantee.slug} className="flex flex-col items-center justify-start w-[140px] sm:w-[120px] py-2 px-0">
                <DynamicSvg
                  className='w-auto mb-2 h-14'
                  svgName={guarantee.slug}
                />

                <p className='py-2 text-[14px] leading-5 text-center uppercase mb-0 pb-0'>
                  {guarantee.name}
                </p>
              </div>
            ))
          }
        </div>
        {/* guarantees-block */}
      </div>
      <div className="container w-full px-4 my-8">
        <div className="h-[3px] w-full bg-gradient-ecokhemia" />
      </div>

      <HomeNosotrosNumeros />
    </div>
  );
}