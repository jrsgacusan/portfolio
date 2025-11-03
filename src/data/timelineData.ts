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
    period: 'June 2024 - Present',
    description:
      'Spearheaded and oversaw the entire application stack, including frontend, backend, infrastructure, automations, and deployments.',
    type: 'work',
  },
  {
    id: '2',
    title: 'Software Developer',
    organization: 'Cualia Ltd.',
    period: '2022 - 2022',
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
      'Assigned to the FitFlop e-commerce project as the sole frontend engineer, learning from experienced senior developers.',
    type: 'work',
  },
  {
    id: '4',
    title: 'Frontend Engineer Internship',
    organization: 'Goodfrontend.dev',
    period: 'October 2021 - November 2021',
    description:
      'Promoted to full-time after one month due to strong commitment and dedication to learning.',
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
    title: 'Frontend Developer Intern',
    organization: 'IOL Inc.',
    period: 'May 2021 - September 2021',
    description:
      'First real-world React project experience, building local applications for clients before graduation.',
    type: 'work',
  },
]
