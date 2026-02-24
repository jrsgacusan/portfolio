import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Cualia.io',
      description:
        'Cualia.io is a cloud-based platform that helps labs do Method Validation and Performance Evaluations. Designed for ISO Certification and audit readiness, Cualia.io ensures labs stay on track with accreditation standards.',
      technologies: [
        'Sveltekit',
        'PostgreSQL',
        'Turborepo',
        'AWS',
        'Typescript',
        'Stripe',
        'AI',
      ],
      liveUrl: 'https://app.cualia.io',
      image:
        'https://assets.super.so/870ae751-e8f4-442f-9a6a-8bdbaca88e9b/uploads/favicon/29a5f6c4-7e05-4988-a026-2992a18584fa.png',
    },
    {
      id: '2',
      title: 'FitFlop',
      description:
        'International e-commerce storefront for a leading footwear brand, featuring comprehensive product catalogs, shopping cart functionality, and seamless checkout experiences. Built to serve global customers with a responsive design that showcases boots, sandals, sneakers, and more across multiple collections.',
      technologies: [
        'React',
        'Groovy',
        'Grails',
        'SAP',
        'Javascript',
        'CMS',
        'A/B Tools',
      ],
      liveUrl: 'https://www.fitflop.com/',
      image:
        'https://1000marcas.net/wp-content/uploads/2021/05/FitFlop-logo-1.png',
    },
    {
      id: '3',
      title: 'Receipt Photobooth PWA',
      description:
        'A progressive web application that transforms digital images into classic receipt-style prints. Features camera integration and Bluetooth connectivity to directly communicate with thermal printers. App converts SVG graphics to ESCPOS commands, enabling unique vintage-style printing experiences.',
      technologies: ['Svelte', 'TypeScript', 'Express', 'Turborepo', 'PWA'],
      liveUrl: 'https://mirarireceipt.app/',
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
          Featured Projects
        </h2>
        <div className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700/50 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-600/50 transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="h-48 bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-primary-600 text-6xl font-bold opacity-20">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
