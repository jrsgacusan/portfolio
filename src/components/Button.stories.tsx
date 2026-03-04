import { FaTimes, FaBars, FaChevronRight, FaGithub } from 'react-icons/fa'
import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'iconSm', 'icon', 'iconLg'],
    },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
}

export const Primary: Story = {
  args: {
    children: 'Primary action',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Ghost / text button',
    variant: 'ghost',
  },
}

export const Danger: Story = {
  args: {
    children: 'Delete',
    variant: 'danger',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const WithLeftIcon: Story = {
  args: {
    children: 'View code',
    leftIcon: <FaGithub size={18} />,
    variant: 'primary',
  },
}

export const WithRightIcon: Story = {
  args: {
    children: 'Continue',
    rightIcon: <FaChevronRight size={16} />,
    variant: 'primary',
  },
}

export const IconOnlySmall: Story = {
  args: {
    'aria-label': 'Close',
    size: 'iconSm',
    variant: 'ghost',
    children: <FaTimes size={18} />,
  },
}

export const IconOnly: Story = {
  args: {
    'aria-label': 'Toggle menu',
    size: 'icon',
    variant: 'ghost',
    children: <FaBars size={20} />,
  },
}

export const IconOnlyLarge: Story = {
  args: {
    'aria-label': 'Open chat',
    size: 'iconLg',
    variant: 'primary',
    children: <FaGithub size={24} />,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full width button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <div className="w-full max-w-xs">
        <Story />
      </div>
    ),
  ],
}

export const Submit: Story = {
  args: {
    type: 'submit',
    children: 'Send message',
    variant: 'primary',
    size: 'lg',
  },
}
