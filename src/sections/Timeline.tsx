interface TimelineItem {
  id: string
  title: string
  organization: string
  period: string
  description: string
  type: 'work' | 'education'
}

interface TimelineProps {
  data: TimelineItem[]
}

const Timeline = ({ data }: TimelineProps) => {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
      aria-labelledby="experience-heading"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 id="experience-heading" className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
          Experience & Education
        </h2>
        <div className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto mb-12" role="presentation" />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-300 dark:bg-primary-600 transform md:-translate-x-0.5" aria-hidden="true" />

          <ol className="space-y-12 list-none p-0 m-0" aria-label="Experience timeline">
            {data.map((item, index) => (
              <li
                key={item.id}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-800 transform md:-translate-x-1/2 z-10" aria-hidden="true" />

                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0
                      ? 'md:pr-12 md:text-right'
                      : 'md:pl-12 md:text-left'
                  }`}
                >
                  <article className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-gray-700/50 p-6 hover:shadow-lg dark:hover:shadow-gray-600/50 transition-shadow">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-800 dark:text-primary-200 bg-primary-100 dark:bg-primary-900 rounded-full mb-3">
                      {item.type === 'work' ? 'Work' : 'Education'}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      {item.organization}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                      {item.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </article>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Timeline
