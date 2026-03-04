import type { Meta, StoryObj } from '@storybook/react'
import ChatWidget from './ChatWidget'

const meta: Meta<typeof ChatWidget> = {
  component: ChatWidget,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta

type Story = StoryObj<typeof ChatWidget>

export const Default: Story = {
  args: {
    src: 'https://jrsgacusan-portfolio-chat.hf.space',
    width: 850,
    height: 450,
    buttonLabel: 'Open chat',
    panelLabel: 'Chat',
  },
}
