import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import Card from './Card'
import Chip from './Chip'
import Button from './Button'

export interface ProjectCaseStudy {
  problem: string
  approach: string[]
  results: string[]
}

export interface ProjectData {
  id: string
  title: string
  description: string
  technologies: string[]
  highlights: string[]
  impact: string
  caseStudy: ProjectCaseStudy
  githubUrl?: string
  liveUrl?: string
  image?: string
}

interface ProjectCardProps {
  project: ProjectData
  onViewCaseStudy: (project: ProjectData) => void
}

const ProjectCard = ({ project, onViewCaseStudy }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-gray-600/50">
      <div className="relative h-48 flex items-center justify-center overflow-hidden bg-white dark:bg-gray-800">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="text-6xl font-bold text-primary-600 opacity-20">
            {project.title.charAt(0)}
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/15 to-transparent" />
        <Chip
          variant="primary"
          className="absolute right-4 top-4 bg-white/90 text-primary-700 dark:bg-gray-900/80 dark:text-primary-300"
        >
          {project.impact}
        </Chip>
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">
          {project.title}
        </h3>
        <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        <ul className="mb-4 space-y-2">
          {project.highlights.map(highlight => (
            <li
              key={highlight}
              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>

        <div className="flex gap-4">
          <Button
            type="button"
            variant="ghost"
            size="md"
            onClick={() => onViewCaseStudy(project)}
            className="font-semibold text-primary-700 hover:text-primary-800 dark:text-primary-300 dark:hover:text-primary-200"
          >
            View Case Study
          </Button>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 rounded"
            >
              <FaGithub aria-hidden="true" /> Code
            </a>
          ) : null}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 rounded"
            >
              <FaExternalLinkAlt aria-hidden="true" /> Live
            </a>
          ) : null}
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard
