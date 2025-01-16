import useFormJobOffer from '@/hooks/useFormJobOffer';
import OfertaLaboralInput from './OfertaLaboralInput';
import OfertaLaboralInputFile from './OfertaLaboralInputFile';
import FormSuccess from './FormSuccess';
import FormError from './FormError';

export default function OfertaLaboralForm() {
  const {
    filename,
    handleForm,
    handleInput,
    setName,
    setEmail,
    setFilename,
    loading,
    showError,
    setShowError,
    showSuccess,
    setShowSuccess
  } = useFormJobOffer();

  return (
    <form id='jo-form' className="flex flex-col pt-4" onSubmit={handleForm}>
      <div className="flex flex-wrap justify-center gap-4 xl:flex-nowrap">
        <OfertaLaboralInput
          label='Nombre'
          type='text'
          name='nombre'
          autocomplete='name'
          handleChange={setName}
        />
        <OfertaLaboralInput
          label='Mail'
          type='email'
          name='mail'
          autocomplete='email'
          handleChange={setEmail}
        />
        <OfertaLaboralInputFile
          label='CV'
          name='archivo'
          filename={filename}
          handleInput={handleInput}
          setFilename={setFilename}
        />
      </div>

      <button
        className='mx-auto mt-8 button-outline disabled:border-eco-gray disabled:text-eco-gray disabled:cursor-not-allowed'
        disabled={loading}
      >
        {loading ? 'ENVIANDO...' : 'ENVIAR'}
      </button>

      <FormSuccess showSuccess={showSuccess} handleModal={setShowSuccess} />
      <FormError showError={showError} handleModal={setShowError} />
    </form>
  );
}