import type { Meta, StoryObj } from '@storybook/react'
import Reveal from './Reveal'

const meta: Meta<typeof Reveal> = {
  component: Reveal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    delayMs: {
      control: { type: 'number', min: 0, max: 500, step: 50 },
    },
  },
}
export default meta

type Story = StoryObj<typeof Reveal>

export const Default: Story = {
  args: {
    children: (
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Reveal content
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          This block animates in when it enters the viewport (scroll in Storybook
          or resize the canvas to trigger).
        </p>
      </div>
    ),
  },
}

export const WithDelay: Story = {
  args: {
    delayMs: 150,
    children: (
      <div className="rounded-xl border border-primary-200 bg-primary-50/50 p-6 dark:border-primary-800 dark:bg-primary-900/30">
        <p className="text-primary-800 dark:text-primary-200">
          This reveal has a 150ms transition delay.
        </p>
      </div>
    ),
  },
}

export const Stacked: Story = {
  render: () => (
    <div className="space-y-4">
      <Reveal>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          First block
        </div>
      </Reveal>
      <Reveal delayMs={70}>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          Second block
        </div>
      </Reveal>
      <Reveal delayMs={140}>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          Third block
        </div>
      </Reveal>
    </div>
  ),
}
