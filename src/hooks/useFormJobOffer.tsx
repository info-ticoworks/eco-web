import { useState, FormEvent, ChangeEvent } from 'react'

const useFormJobOffer = () => {
  const [loading, setLoading] = useState(false)
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [filename, setFilename] = useState<string | undefined>('Sin Archivo')

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('file triggered')
    const files = event.target.files
    let file: File

    if (files != null) {
      file = files[0]
      setFilename(file.name)
      setFile(file)
    } else {
      console.error('NO FILE FOUND')
      throw new Error()
    }
  }

  const handleForm = async (e: FormEvent) => {
    e.preventDefault()

    try {
      setLoading(true)

      console.log('file: ', file)

      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      if (file != null) {
        formData.append('file', file, file.name) // Append the file if present
      }

      // console.log('Datos: ', formData)

      const response = await fetch('/api/mail', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('No se pudo enviar el mensaje')
      }
      const result = await response.json()
      console.log('response: ', result)

      const form = document.getElementById('jo-form') as HTMLFormElement

      if (form != null) {
        setShowError(false)
        setShowSuccess(true)
        setFile(null)
        setName('')
        setEmail('')
        setFilename('Sin Archivo')
        form.reset()
      }
    } catch (error) {
      setShowError(true)
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    handleForm,
    handleInput,
    setName,
    setEmail,
    setFile,
    filename,
    setFilename,
    showError,
    setShowError,
    showSuccess,
    setShowSuccess,
    loading
  }
}

export default useFormJobOffer
