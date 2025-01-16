
import useFormContact from '@/hooks/useFormContact';
import ContactInput from './ContactInput';
import ContactTextarea from './ContactTextarea';
import './contact.css';
import FormSuccess from '../modals/FormSuccess';
import FormError from '../modals/FormError';

export default function ContactForm() {
  const {
    setName,
    setPhone,
    setEmail,
    setLocation,
    setMessage,
    handleForm,
    showSuccess,
    setShowSuccess,
    showError,
    setShowError,
    loading
  } = useFormContact();



  return (
    <form
      id='contact-form'
      onSubmit={handleForm}
      className='flex flex-col items-center justify-start w-full gap-10 px-4 py-4 sm:px-0 md:py-0 3xl:max-w-[550px] mx-auto'
    >
      <ContactInput
        name='name'
        label='Nombre y Apellido'
        type='text'
        handleChange={setName}
      />
      <ContactInput
        name='phone'
        label='Teléfono'
        type='number'
        handleChange={setPhone}
      />
      <ContactInput
        name='email'
        label='Mail'
        type='email'
        handleChange={setEmail}
      />
      <ContactInput
        name='location'
        label='Ubicación donde se realizará el trabajo'
        type='text'
        handleChange={setLocation}
      />
      <ContactTextarea
        name='message'
        label='Dejanos tu consulta'
        handleChange={setMessage}
      />

      <button
        type='submit'
        disabled={loading}
        className='inset-0 top-auto mx-auto mt-4 mb-4 transition-colors md:mb-0 button-solid md:absolute -bottom-8 disabled:bg-eco-gray disabled:cursor-not-allowed disabled:border-eco-gray'
      >
        {
          loading ? 'Enviado...' : 'Consultar'
        }
      </button>

      <FormSuccess showSuccess={showSuccess} handleModal={setShowSuccess} />
      <FormError showError={showError} handleModal={setShowError} />
    </form>
  );
}