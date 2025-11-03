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
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
          Experience & Education
        </h2>
        <div className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto mb-12"></div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-300 dark:bg-primary-600 transform md:-translate-x-0.5"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-800 transform md:-translate-x-1/2 z-10"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0
                      ? 'md:pr-12 md:text-right'
                      : 'md:pl-12 md:text-left'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-gray-700/50 p-6 hover:shadow-lg dark:hover:shadow-gray-600/50 transition-shadow">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
