'use client';

import Image from 'next/image';

interface Props {
  showError: boolean;
  handleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormError = (props: Props) => {
  const { handleModal, showError } = props;

  return (
    <div
      style={{
        transform: showError ? 'scale(1)' : 'scale(0)',
        opacity: showError ? '100%' : '0',
        visibility: showError ? 'visible' : 'hidden',
      }}
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full px-8 py-4 transition-all bg-eco-blue--dark bg-opacity-80"
    >
      <div className="w-full max-w-[555px] mx-auto bg-white rounded-xl px-8 py-4 border-2 border-[#F44336] relative">
        <button
          type='button'
          className='absolute text-xl font-bold text-white transition-colors rotate-90 border rounded w-9 h-9 top-1 right-1 bg-eco-sky-blue border-eco-blue--light hover:bg-eco-blue--light'
          onClick={() => handleModal(false)}
        >
          X
        </button>

        <div className="flex flex-col items-center w-full gap-4 py-16 text-center">
          <Image
            src='/svg/error.svg'
            width={50}
            height={50}
            loading='lazy'
            alt='Ecokhemia, error'
          />
          <h4 className='text-xl font-bold text-center text-[#878787]'>
            Ocurrió un error al enviar tu mensaje
          </h4>
          <h2 className='text-2xl font-bold text-center uppercase text-eco-blue--light'>
            Por favor <br /> intentalo de nuevo
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FormError;