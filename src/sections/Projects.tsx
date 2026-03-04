import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import mirari from '../assets/mirari.png'
import Chip from '../components/Chip'
import Modal from '../components/Modal'
import ProjectCard, { ProjectData } from '../components/ProjectCard'

const Projects = () => {
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null)

  const projects: ProjectData[] = [
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
      highlights: [
        'Improved audit readiness for ISO-aligned workflows',
        'Automated method validation tasks for lab teams',
      ],
      impact: 'Enterprise workflow automation',
      caseStudy: {
        problem:
          'Labs needed a reliable way to manage method validation and performance evaluations while staying ready for ISO audits.',
        approach: [
          'Designed a modular workflow for validation runs, evidence tracking, and approval steps.',
          'Integrated cloud infrastructure and secure data storage for consistent, audit-ready records.',
          'Built role-focused UX so analysts and supervisors can move from data entry to reporting quickly.',
        ],
        results: [
          'Reduced manual validation overhead through structured digital workflows.',
          'Improved confidence in accreditation readiness with centralized documentation.',
          'Enabled teams to track progress and compliance status in one platform.',
        ],
      },
      liveUrl: 'https://cualia.io',
      image:
        'https://assets.super.so/870ae751-e8f4-442f-9a6a-8bdbaca88e9b/uploads/favicon/29a5f6c4-7e05-4988-a026-2992a18584fa.png',
    },
    {
      id: '2',
      title: 'FitFlop',
      description:
        'Contributed to an already well-established, high-traffic international e-commerce storefront for a leading footwear brand. Focused on maintaining core customer journeys, shipping new features, and improving frontend performance for faster browsing and checkout.',
      technologies: [
        'React',
        'Groovy',
        'Grails',
        'SAP',
        'Javascript',
        'CMS',
        'A/B Tools',
      ],
      highlights: [
        'Maintained and enhanced responsive storefront experiences for global shoppers',
        'Shipped new conversion-focused features across key product collections',
      ],
      impact: 'Performance and feature improvements',
      caseStudy: {
        problem:
          'As an established high-traffic storefront, the platform needed continuous maintenance and iterative feature delivery without disrupting performance or reliability.',
        approach: [
          'Maintained existing storefront components and improved key product discovery and checkout flows.',
          'Built and rolled out new frontend features in collaboration with CMS, SAP, and experimentation tooling.',
          'Optimized page performance and responsive behavior across regions and devices.',
        ],
        results: [
          'Delivered stable releases while expanding functionality across key collections.',
          'Improved page load speed and overall browsing experience at high traffic volumes.',
          'Supported ongoing experimentation and optimization efforts tied to conversion.',
        ],
      },
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
      highlights: [
        'Connected browser cameras directly to thermal printing flow',
        'Converted SVG assets into ESC/POS printer command streams',
      ],
      impact: 'Creative hardware-enabled web app',
      caseStudy: {
        problem:
          'Users wanted a playful way to turn digital photos into physical receipt-style prints directly from the browser.',
        approach: [
          'Developed a PWA that captures images, processes layouts, and prepares print-ready payloads.',
          'Implemented SVG-to-ESC/POS conversion logic for thermal printer compatibility.',
          'Added Bluetooth communication to send print jobs from mobile and desktop contexts.',
        ],
        results: [
          'Delivered a novel web-to-hardware experience with minimal setup.',
          'Enabled fast, repeatable printing with a lightweight progressive app.',
          'Demonstrated reliable conversion and output for creative receipt formats.',
        ],
      },
      liveUrl: 'https://mirarireceipt.app/',
      image: mirari,
    },
  ]

  const modalFooter = activeProject ? (
    <>
      {activeProject.githubUrl ? (
        <a
          href={activeProject.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-gray-900 dark:bg-gray-100 px-4 py-2 text-white dark:text-gray-900 text-sm font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
        >
          <FaGithub aria-hidden="true" /> View Code
        </a>
      ) : null}
      {activeProject.liveUrl ? (
        <a
          href={activeProject.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-primary-700 px-4 py-2 text-white text-sm font-medium hover:bg-primary-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
        >
          <FaExternalLinkAlt aria-hidden="true" /> Visit Live Project
        </a>
      ) : null}
    </>
  ) : null

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 id="projects-heading" className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
          Featured Projects
        </h2>
        <div className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto mb-12" role="presentation" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewCaseStudy={setActiveProject}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
        title={activeProject?.title}
        footer={modalFooter}
      >
        {activeProject ? (
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 text-base font-semibold text-gray-900 dark:text-gray-100">
                Problem
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {activeProject.caseStudy.problem}
              </p>
            </div>

            <div>
              <h4 className="mb-2 text-base font-semibold text-gray-900 dark:text-gray-100">
                Approach
              </h4>
              <ul className="space-y-2 list-none pl-0">
                {activeProject.caseStudy.approach.map(step => (
                  <li
                    key={step}
                    className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" aria-hidden="true" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-base font-semibold text-gray-900 dark:text-gray-100">
                Results
              </h4>
              <ul className="space-y-2 list-none pl-0">
                {activeProject.caseStudy.results.map(result => (
                  <li
                    key={result}
                    className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-base font-semibold text-gray-900 dark:text-gray-100">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.map(tech => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  )
}

export default Projects
