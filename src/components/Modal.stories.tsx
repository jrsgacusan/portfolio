import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Modal from './Modal'
import Button from './Button'

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: { control: false },
    onClose: { action: 'closed' },
  },
}
export default meta

type Story = StoryObj<typeof Modal>

type ModalWithTriggerProps = Omit<React.ComponentProps<typeof Modal>, 'isOpen' | 'onClose'>

const ModalWithTrigger = (props: ModalWithTriggerProps) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="primary" size="sm" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal
        {...props}
        isOpen={open}
        onClose={() => {
          setOpen(false)
        }}
      />
    </>
  )
}

export const Open: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: 'Example modal',
    children: (
      <p className="text-gray-600 dark:text-gray-300">Modal body content. Close with Escape or the button.</p>
    ),
  },
}

export const WithTrigger: Story = {
  render: () => (
    <ModalWithTrigger
      title="Example modal"
      children={
        <p className="text-gray-600 dark:text-gray-300">
          Click the button to open. Use Escape or the close button to close.
        </p>
      }
    />
  ),
}

export const WithFooter: Story = {
  render: () => (
    <ModalWithTrigger
      title="Modal with footer"
      footer={
        <>
          <Button variant="secondary" size="sm" onClick={() => {}}>
            Cancel
          </Button>
          <Button variant="primary" size="sm" onClick={() => {}}>
            Confirm
          </Button>
        </>
      }
    >
      <p className="text-gray-600 dark:text-gray-300">Content with action buttons in the footer.</p>
    </ModalWithTrigger>
  ),
}

export const WithoutTitle: Story = {
  render: () => (
    <ModalWithTrigger>
      <p className="text-gray-600 dark:text-gray-300">Modal without a title heading.</p>
    </ModalWithTrigger>
  ),
}
