'use client';

import Image from 'next/image';
import { ChangeEvent } from 'react';

interface Props {
  label: string;
  name: string;
  filename: string | undefined;
  setFilename: React.Dispatch<React.SetStateAction<any>>;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function OfertaLaboralInputFile(props: Props) {
  const { label, name, setFilename, handleInput, filename } = props;

  const selectFile = () => {
    const fileInput = document.getElementById(`ol-${name}`) as HTMLInputElement;
    fileInput?.click();
  };

  const clearFile = () => {
    const fileInput = document.getElementById(`ol-${name}`) as HTMLInputElement;

    fileInput.value = '';
    setFilename('Sin archivo');
  };

  return (
    <div className="w-full max-w-[288px] relative">
      <label htmlFor={`ol-${name}`} className='w-full'>
        <input
          type='file'
          name={`ol-${name}-name`}
          id={`ol-${name}`}
          className='hidden'
          onChange={(e) => handleInput(e)}
          required
        />
        <p className='pb-2 pl-2 text-xs font-semibold'>{label}</p>
        <button
          className='flex items-center justify-start w-full gap-2 px-2 py-2 text-sm font-semibold text-white bg-transparent border border-white rounded h-14 focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent'
          type='button'
          onClick={selectFile}
        >
          <span className='min-w-[20px]'>
            <Image
              width={16}
              height={24}
              src='/svg/attachment.svg'
              alt='icono de archivo'
            />
          </span>
          <span className="pr-10 overflow-x-hidden text-left line-clamp-1">
            {(filename !== undefined) ? filename : 'Sin Archivo'}</span>
          <span
            className='absolute z-50 flex items-center justify-center transition-transform bg-white border rounded cursor-pointer shadow-service-card border-eco-sky-blue text-eco-blue--light h-9 w-9 hover:scale-110 bottom-[10px] right-2'
            onClick={clearFile}
          >
            <Image
              width={16}
              height={16}
              src='/svg/trash.svg'
              alt='icono de eliminar archivo'
            />
          </span>
        </button>
      </label>
    </div>
  );
}
