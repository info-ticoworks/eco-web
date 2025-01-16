import React from 'react';

interface InputProps {
  name: string;
  label: string;
  type: string;
  hasError?: boolean;
  handleChange: React.Dispatch<React.SetStateAction<any>>;
}

export default function ContactInput(props: InputProps) {
  const { name, label, type, hasError, handleChange } = props;
  return (
    <div className="relative flex flex-col w-full pt-0">
      <label className='absolute left-0 pb-1 pl-2 text-xs text-eco-gray -top-5' htmlFor={`c-${name}`}>
        {label}
      </label>

      <div className="relative w-full h-fit p-[1px] bg-gradient-ecokhemia rounded-lg my-1">
        <input
          className='w-full px-2 py-4 text-xs transition-all rounded-lg focus:outline-eco-blue--light'
          type={type}
          name={`c-${name}-input`}
          id={`c-${name}`}
          autoComplete={name}
          onChange={e => handleChange(e.target.value)}
          required
        />
      </div>
      <p className='absolute right-0 w-full pr-2 text-xs italic text-right text-red-600 -bottom-5'>
        {(hasError ?? false) ? '*Este campo es obligatorio' : ''}
      </p>
    </div>
  );
}