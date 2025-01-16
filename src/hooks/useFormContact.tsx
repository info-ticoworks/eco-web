import { useState, FormEvent } from 'react';

const useFormContact = () => {
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const formData = {
        name,
        phone,
        email,
        location,
        message
      };
      console.log('prueba: ', formData);

      const response = await fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar el mensaje');
      }
      const result = await response.json();
      console.log('response: ', result);

      const form = document.getElementById('contact-form') as HTMLFormElement;
      if (form != null) {
        setShowError(false);
        setShowSuccess(true);
        form.reset();
      }
    } catch (error) {
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleForm,
    setName,
    setPhone,
    setEmail,
    setLocation,
    setMessage,
    showError,
    setShowError,
    showSuccess,
    setShowSuccess,
    loading,
  };
};

export default useFormContact;