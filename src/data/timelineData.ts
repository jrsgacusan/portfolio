export interface TimelineItem {
  id: string
  title: string
  organization: string
  period: string
  description: string
  type: 'work' | 'education'
}

export const timelineData: TimelineItem[] = [
  {
    id: '1',
    title: 'Lead Full-Stack Developer',
    organization: 'Cualia Ltd.',
    period: 'June 2024 - February 2026',
    description:
      'Led full-stack development at a growing medical SaaS startup serving laboratory and pharmaceutical validation teams, acting as the primary technical owner responsible for system architecture, multi-tenant database design, and overall platform scalability and security.',
    type: 'work',
  },
  {
    id: '2',
    title: 'Frontend Engineer',
    organization: 'Cualia Ltd.',
    period: 'June 2022 - June 2024',
    description:
      'Focused on building the application while learning development practices and the medical domain in a startup environment.',
    type: 'work',
  },
  {
    id: '3',
    title: 'Frontend Engineer',
    organization: 'Goodfrontend.dev',
    period: 'November 2021 - November 2022',
    description:
      'Contributed as a Frontend Engineer for the FitFlop project at Goodfrontend.dev, a large international footwear brand, working within a 12-member development team to support and enhance its global e-commerce platform. Focused primarily on frontend implementation, ensuring responsive, high-performance user interfaces aligned with the brand’s standards and large-scale production requirements.',
    type: 'work',
  },
  {
    id: '4',
    title: 'Frontend Engineer Internship',
    organization: 'Goodfrontend.dev',
    period: 'October 2021 - November 2021',
    description:
      'Spent my time learning frontend technologies through online resources and mini projects.',
    type: 'work',
  },

  {
    id: '5',
    title: 'Bachelor of Science in Information Technology',
    organization: 'University of the Cordilleras',
    period: '2018 - 2021',
    description: 'Graduated with a degree in Information Technology.',
    type: 'education',
  },
  {
    id: '6',
    title: 'Frontend Engineer Internship',
    organization: 'IOL Inc.',
    period: 'May 2021 - September 2021',
    description:
      'First real-world React project experience, building local applications for clients before graduation.',
    type: 'work',
  },
]
