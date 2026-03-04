import type { Meta, StoryObj } from '@storybook/react'
import Chip from './Chip'

const meta: Meta<typeof Chip> = {
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['neutral', 'primary'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Chip>

export const Neutral: Story = {
  args: {
    children: 'Neutral chip',
    variant: 'neutral',
  },
}

export const Primary: Story = {
  args: {
    children: 'Primary chip',
    variant: 'primary',
  },
}

export const Multiple: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip>React</Chip>
      <Chip variant="primary">TypeScript</Chip>
      <Chip>Tailwind</Chip>
      <Chip variant="primary">Vite</Chip>
    </div>
  ),
}
