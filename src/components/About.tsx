import { personalData } from '../data/personalData'

const About = () => {
  const { skills, aboutParagraphs } = personalData

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
          About Me
        </h2>
        <div className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto mb-12"></div>

        <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 mb-12 text-center">
          {aboutParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-lg leading-relaxed ${
                index < aboutParagraphs.length - 1 ? 'mb-6' : ''
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
            Skills & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map(skill => (
              <span
                key={skill}
                className="px-6 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full font-medium hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
