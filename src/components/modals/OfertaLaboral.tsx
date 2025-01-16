'use client';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OfertaLaboralForm from './OfertaLaboralForm';
import useOfertaLaboral from '@/hooks/useOfertaLaboral';

export default function OfertaLaboral() {
  const { closeModal } = useOfertaLaboral();

  return (
    <div
      className="fixed top-0 left-0 z-50 items-center justify-center hidden w-full h-screen p-4 overflow-y-hidden bg-eco-blue--dark bg-opacity-80"
      id='ol'
    >
      <div className='relative px-4 pb-16 pt-2 overflow-y-auto text-white border border-white rounded-lg bg-gradient-ecokhemia max-h-[calc(100vh-32px)] my-auto w-full max-w-[692px]  lg:max-w-[1200px] mx-auto' id='ol-content'>
        <button
          className='sticky top-0 flex items-center justify-center w-8 h-8 p-2 mb-4 ml-auto transition-colors bg-white rounded text-eco-sky-blue shadow-service-card hover:bg-eco-sky-blue hover:text-white'
          onClick={() => closeModal()}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className="w-full max-w-[592px] xl:max-w-[864px] mx-auto">
          <div className="flex flex-col items-start justify-start gap-4 py-2 text-xs md:text-sm xl:text-xl">
            <h3 className='text-2xl font-bold'>TRABAJA CON NOSOTROS</h3>
            <ul className='px-8 list-disc'>
              <li className='py-1 list-item'>Excelencia en la seguridad y formación de nuestro personal personal.</li>
              <li className='py-1 list-item'>Capacitaciones certificadas y entrenamientos regulares en buenas prácticas, higiene, y atención al cliente.</li>
              <li className='py-1 list-item'>Garantías laborales y estándares del MTS.</li>
              <li className='py-1 list-item'>Bonificaciones por desempeño.</li>
              <li className='py-1 list-item'>Proveemos uniformes y Equipos de Protección Personal (EPP) según corresponda.</li>
            </ul>
          </div>

          <OfertaLaboralForm />
        </div>
      </div>
    </div>
  );
}