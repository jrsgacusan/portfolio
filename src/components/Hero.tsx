import { getSocialLinks, personalData } from '../data/personalData'

const Hero = () => {
  const socialLinks = getSocialLinks()
  const focusAreas = [
    'Full Stack Product Development',
    'Performance-focused Frontends',
    'Scalable Cloud-ready Apps',
  ]

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-linear-to-br from-primary-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute -top-16 -left-20 h-64 w-64 rounded-full bg-primary-300/30 blur-3xl dark:bg-primary-700/30" />
      <div className="pointer-events-none absolute bottom-0 -right-20 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-900/40" />

      <div className="container relative mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-primary-700 shadow-sm backdrop-blur dark:border-primary-700 dark:bg-gray-800/80 dark:text-primary-300">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Available for freelance and full-time roles
        </div>

        <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-gray-900 dark:text-gray-100">
          Building digital products
          <span className="block text-primary-600 dark:text-primary-400">
            that feel fast and premium.
          </span>
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I&apos;m <span className="font-semibold">{personalData.name}</span>, a{' '}
          {personalData.title} based in {personalData.location}. I turn product
          ideas into clean, scalable web experiences.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {focusAreas.map(area => (
            <span
              key={area}
              className="rounded-full border border-primary-200/70 bg-primary-50/90 px-4 py-2 text-sm font-medium text-primary-700 dark:border-primary-700/60 dark:bg-primary-900/40 dark:text-primary-200"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary-700 px-8 py-3 font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:-translate-y-0.5 hover:bg-primary-800"
          >
            View Projects
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="rounded-xl border-2 border-primary-600 bg-white/90 px-8 py-3 font-semibold text-primary-700 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-primary-50 dark:border-primary-400 dark:bg-gray-800/90 dark:text-primary-300 dark:hover:bg-gray-700"
          >
            Let&apos;s Talk
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200/80 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-gray-700 dark:bg-gray-800/70">
            <p className="text-3xl font-bold text-primary-700 dark:text-primary-300">
              5+
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Years building web products
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200/80 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-gray-700 dark:bg-gray-800/70">
            <p className="text-3xl font-bold text-primary-700 dark:text-primary-300">
              Global
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Collaboration across teams
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400"
              aria-label={label}
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
