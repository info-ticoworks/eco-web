'use client';

interface Props {
  label: string;
  type: string;
  name: string;
  autocomplete: string;
  handleChange: React.Dispatch<React.SetStateAction<any>>;
}

export default function OfertaLaboralInput(props: Props) {
  const { label, name, type, autocomplete, handleChange } = props;

  return (
    <div className="w-full max-w-[288px]">

      <label htmlFor={`ol-${name}`} className='pb-2 pl-2 text-xs font-semibold'>{label}</label>
      <input
        type={type}
        name={`ol-${name}-input`}
        autoComplete={autocomplete}
        id={`ol-${name}`}
        className="w-full px-4 py-3 text-sm font-semibold text-white bg-transparent border border-white rounded h-14 focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent}"
        onChange={e => handleChange(e.target.value)}
        required
      />
    </div>
  );
}