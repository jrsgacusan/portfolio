import { useEffect, useId } from 'react'
import { createPortal } from 'react-dom'
import { FaTimes } from 'react-icons/fa'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  footer?: React.ReactNode
  maxWidthClassName?: string
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  maxWidthClassName = 'max-w-2xl',
}: ModalProps) => {
  const titleId = useId()

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 bg-black/55 p-4"
      style={{ zIndex: 9999 }}
      onClick={onClose}
      role="presentation"
    >
      <div className="mx-auto flex min-h-full items-center justify-center">
        <div
          className={`w-full ${maxWidthClassName} max-h-[85vh] overflow-y-auto rounded-lg bg-white dark:bg-gray-900 shadow-xl`}
          onClick={event => event.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? titleId : undefined}
        >
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-5 py-4">
            <div>
              <p className="text-sm font-medium text-primary-700 dark:text-primary-300">
                Details
              </p>
              {title ? (
                <h3
                  id={titleId}
                  className="mt-1 text-xl font-semibold text-gray-900 dark:text-gray-100"
                >
                  {title}
                </h3>
              ) : null}
            </div>
            <button
              onClick={onClose}
              className="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close modal"
            >
              <FaTimes size={18} />
            </button>
          </div>

          <div className="px-5 py-5">{children}</div>

          {footer ? (
            <div className="flex flex-wrap gap-3 border-t border-gray-200 dark:border-gray-700 px-5 py-4">
              {footer}
            </div>
          ) : null}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Modal
