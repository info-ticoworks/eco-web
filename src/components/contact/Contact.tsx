'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import LogoMin from '@/components/svg/LogoMin';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section className='py-16 md:pb-32 2xl:pb-24' id="contacto">
      <div className="container">
        <h2 className="text-[32px] md:text-5xl text-eco-green font-semibold px-4 pb-8 md:pb-16">
          Contacto
        </h2>
        <div className="relative flex flex-col w-full gap-4 md:flex-row md:px-4 md:pb-28">
          <div className='flex items-start justify-center md:w-1/2'>
            <ContactForm />
          </div>

          <div className='items-start justify-center md:w-1/2'>
            <div className="w-full px-4 py-8 text-white rounded-lg h-fit md:h-full bg-eco-blue--dark max-w-[550px] ml-auto mr-0 3xl:mx-auto">
              <div className="w-full h-full max-w-[310px] mx-auto flex flex-col items-center justify-center gap-4">
                <LogoMin />

                <h3 className='text-[40px] text-center leading-[46px] font-semibold'>Solicitá tu cotización</h3>

                <div className="h-[1px] bg-white w-full mx-auto" />

                <div className="mx-auto">
                  <p className='py-0 text-xl font-medium'>
                    <a className='text-center transition-colors hover:text-eco-green' href="tel:+50640826062">
                      <FontAwesomeIcon className='rotate-[270deg]' icon={faPhone} />
                      <span className="pl-1">+506 4082 6062</span>
                    </a>
                  </p>
                  <p className='py-0 text-xl font-medium'>
                    <a className='text-center transition-colors hover:text-eco-green' href="https://wa.me/50687090676" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faWhatsapp} />
                      <span className="pl-1">
                        +506 8709 0676
                      </span>
                    </a>
                  </p>
                </div>

                <div className="mx-auto">
                  <p className='py-2 text-xl font-medium'>
                    <a className='text-center transition-colors hover:text-eco-green' href="mailto:ventas@ecokhemia.com" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span className="pl-1">ventas@ecokhemia.com</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}