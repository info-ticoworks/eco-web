'use client';

import Image from 'next/image';

interface Props {
  showSuccess: boolean;
  handleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormSuccess = (props: Props) => {
  const { handleModal, showSuccess } = props;

  return (
    <div
      style={{
        transform: showSuccess ? 'scale(1)' : 'scale(0)',
        opacity: showSuccess ? '100%' : '0',
        visibility: showSuccess ? 'visible' : 'hidden',
      }}
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full px-8 py-4 transition-all bg-eco-green bg-opacity-80"
    >
      <div className="w-full max-w-[555px] mx-auto bg-white rounded-xl px-8 py-4 border-2 border-eco-blue--light relative">
        <button
          type='button'
          className='absolute text-xl font-bold text-white transition-colors rotate-90 border rounded w-9 h-9 top-1 right-1 bg-eco-sky-blue border-eco-blue--light hover:bg-eco-blue--light'
          onClick={() => handleModal(false)}
        >
          X
        </button>

        <div className="flex flex-col items-center w-full gap-4 py-16 text-center">
          <Image
            src='/svg/success.svg'
            width={75}
            height={60}
            loading='lazy'
            alt='Ecokhemia, exito'
          />
          <h4 className='text-xl font-bold text-center text-[#878787]'>Tu mensaje fue enviado</h4>
          <h2 className='text-2xl font-bold text-center uppercase text-eco-blue--light'>Gracias por comunicarte</h2>
        </div>
      </div>
    </div>
  );
};

export default FormSuccess;