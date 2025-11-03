import emailjs from '@emailjs/browser'

export interface EmailParams {
  from_name: string
  from_email: string
  message: string
}

export const sendEmail = async (params: EmailParams): Promise<void> => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      'EmailJS configuration is missing. Please check your environment variables.'
    )
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      ...params,
      to_email: import.meta.env.VITE_CONTACT_EMAIL || 'your-email@example.com',
    },
    publicKey
  )
}
