import { getSocialLinks, personalData } from '../data/personalData'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const socialLinks = getSocialLinks()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-white mb-2">
              {personalData.name}
            </p>
            <p className="text-sm">
              © {currentYear} {personalData.name}. All rights reserved.
            </p>
          </div>

          <ul className="flex space-x-6 list-none p-0 m-0" role="list">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  aria-label={label}
                >
                  <Icon size={24} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
