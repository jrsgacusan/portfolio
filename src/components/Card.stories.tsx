import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    children: (
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Card title
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          This is the card content. Use it for any grouped content.
        </p>
      </div>
    ),
  },
}

export const WithCustomClass: Story = {
  args: {
    className: 'border-2 border-primary-300',
    children: (
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300">
          Card with custom border styling.
        </p>
      </div>
    ),
  },
}
