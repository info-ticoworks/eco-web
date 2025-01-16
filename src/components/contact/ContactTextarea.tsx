import React from 'react';

interface InputProps {
  name: string;
  label: string;
  hasError?: boolean;
  handleChange: React.Dispatch<React.SetStateAction<any>>;
}

export default function ContactTextarea(props: InputProps) {
  const { name, label, hasError, handleChange } = props;
  return (
    <div className="relative flex flex-col w-full mb-8 md:mb-0">
      <label className='pb-1 pl-2 text-xs text-eco-gray' htmlFor={`c-${name}`}>
        {label}
      </label>

      <textarea
        className='w-full px-2 py-2 mb-0 text-xs transition-all border rounded-lg focus:outline-eco-blue--light border-eco-green'
        name={`c-${name}-input`}
        id={`c-${name}`}
        required
        rows={5}
        onChange={e => handleChange(e.target.value)}
      />
      <p className='absolute right-0 w-full pr-2 text-xs italic text-right text-red-600 -bottom-5'>
        {(hasError ?? false) ? '*Este campo es obligatorio' : ''}
      </p>
    </div>
  );
}