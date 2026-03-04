import type { Meta, StoryObj } from '@storybook/react'
import ProjectCard, { type ProjectData } from './ProjectCard'

const mockProject: ProjectData = {
  id: 'story-1',
  title: 'Example Project',
  description:
    'A short description of the project and what it does. Highlights key outcomes and technologies.',
  technologies: ['React', 'TypeScript', 'Tailwind'],
  highlights: [
    'First highlight or outcome',
    'Second highlight or outcome',
  ],
  impact: 'Impact label',
  caseStudy: {
    problem: 'The problem this project solved.',
    approach: ['Step one.', 'Step two.', 'Step three.'],
    results: ['Result one.', 'Result two.'],
  },
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com/example/repo',
}

const meta: Meta<typeof ProjectCard> = {
  component: ProjectCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onViewCaseStudy: { action: 'viewCaseStudy' },
  },
}
export default meta

type Story = StoryObj<typeof ProjectCard>

export const Default: Story = {
  args: {
    project: mockProject,
    onViewCaseStudy: () => {},
  },
}

export const WithoutImage: Story = {
  args: {
    project: {
      ...mockProject,
      id: 'story-2',
      title: 'No image project',
      image: undefined,
    },
    onViewCaseStudy: () => {},
  },
}

export const LiveOnly: Story = {
  args: {
    project: {
      ...mockProject,
      id: 'story-3',
      title: 'Live link only',
      githubUrl: undefined,
    },
    onViewCaseStudy: () => {},
  },
}
