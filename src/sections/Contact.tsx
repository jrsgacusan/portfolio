import { useState } from 'react'
import { getContactInfo, personalData } from '../data/personalData'
import { sendEmail } from '../utils/email'
import Button from '../components/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      })
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = getContactInfo()
  const statusId = 'contact-form-status'

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 id="contact-heading" className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
          Get In Touch
        </h2>
        <div className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto mb-12" role="presentation" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Let&apos;s Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.
            </p>

            <ul className="space-y-6 list-none p-0 m-0">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-start gap-4 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                  >
                    <Icon size={20} aria-hidden="true" className="mt-1 shrink-0" />
                    <span>
                      <span className="font-semibold text-gray-900 dark:text-gray-100 block">
                        {label}
                      </span>
                      <span className="dark:text-gray-300">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-labelledby="contact-heading"
              aria-describedby={submitStatus !== 'idle' ? statusId : undefined}
              noValidate
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 focus:border-transparent outline-none transition text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Your name"
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 focus:border-transparent outline-none transition text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="your.email@example.com"
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 focus:border-transparent outline-none transition text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Your message"
                  aria-required="true"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                aria-disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {submitStatus === 'success' ? (
                <div
                  id={statusId}
                  role="status"
                  className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300"
                  aria-live="polite"
                >
                  Thank you for your message! I will get back to you soon.
                </div>
              ) : null}

              {submitStatus === 'error' ? (
                <div
                  id={statusId}
                  role="alert"
                  className="mt-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300"
                  aria-live="assertive"
                >
                  Failed to send message. Please try again or contact me
                  directly at{' '}
                  <a
                    href={`mailto:${personalData.email}`}
                    className="underline font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
                  >
                    {personalData.email}
                  </a>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
