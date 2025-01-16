/* eslint-disable react/jsx-curly-brace-presence */
import Link from 'next/link';
import IconLinkedin from '../svg/IconLinkedin';
import IconFacebook from '../svg/IconFacebook';
import IconInstagram from '../svg/IconInstagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import OfertaLaboralButton from '../modals/OfertaLaboralButton';
import DynamicSvg from '@/components/svg/DynamicSvg';

const Footer = () => {
  return (
    <footer className="pt-12 pb-16 mt-auto text-white bg-eco-blue--dark" id='footer'>
      {/* upper side */}
      <div className="container grid justify-center grid-cols-1 gap-4 px-4 md:grid-cols-2 xl:grid-cols-3 auto-rows-auto">
        {/* logo */}
        <div className="flex items-center justify-center order-1 md:justify-start">
          <Link href='/' className='cursor-pointer w-fit'>
            <DynamicSvg
              svgName='logo-full'
              className='w-[240px]'
            />
          </Link>
        </div>
        {/* logo */}
        {/* ------- */}
        {/* social media */}
        <div className="flex items-center justify-center order-2 md:justify-end xl:order-3 text-[#ECECEC]">
          <a className="px-2 py-2 hover:text-eco-green" href="https://www.linkedin.com/company/ecokhemia-s-a-" target="_blank" rel="noopener noreferrer" title='Visitanos en LinkedIn'>
            <IconLinkedin />
          </a>
          <a className="px-2 py-2 hover:text-eco-green" href="https://www.facebook.com/Ecokhemia" target="_blank" rel="noopener noreferrer" title='Visitanos en Facebook'>
            <IconFacebook />
          </a>
          <a className="px-2 py-2 hover:text-eco-green" href="https://www.instagram.com/ecokhemia_s.a" target="_blank" rel="noopener noreferrer" title='Visitanos en Instagram'>
            <IconInstagram />
          </a>
        </div>
        {/* social media */}

        <div className="flex items-center justify-center order-3 md:col-span-2 xl:col-span-1 xl:order-2">
          <OfertaLaboralButton />
        </div>
      </div>
      {/* upper side */}

      {/* info side */}
      <div className="container flex flex-col items-center justify-center gap-4 px-4 py-8 text-xs font-medium md:gap-5 lg:gap-6 font md:text-base lg:text-lg">
        <div className="w-full leading-5 text-center">
          <a className='text-right transition-colors hover:text-eco-green' href="tel:+506 6205 9754">
            <FontAwesomeIcon icon={faPhone} className='rotate-[270deg]' /> <span className="pl-1">+506 6205 9754</span>
          </a>
        </div>
        <div className="w-full leading-5 text-center">
          <a className='transition-colors hover:text-eco-green' href="mailto:info@ecokhemia.com ">
            <FontAwesomeIcon icon={faEnvelope} /> <span className="pl-1">info@ecokhemia.com</span>
          </a>
        </div>
        <div className="w-full leading-5 text-center">
          <a className='text-right transition-colors hover:cursor-default' href="#contacto">
            <FontAwesomeIcon icon={faLocationPin} />
            <span className='pl-2'>San Antonio del Tejar</span>
            <span className='px-2'>{'//'}</span>
            <span>Contiguo a Lucema (Salsas Alfaro)<span className='px-2'>{'//'}</span> Alajuela, Costa Rica</span>
          </a>
        </div>
      </div>
      {/* info side */}
    </footer>
  );
};

export default Footer;
