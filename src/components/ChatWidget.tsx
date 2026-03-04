import { useState } from 'react'
import { FaComment, FaTimes } from 'react-icons/fa'
import Button from './Button'

const CHAT_HINT =
  'Chat to learn more about Juel, share opportunities, or connect.'

interface ChatWidgetProps {
  /** URL of the chat iframe (e.g. Hugging Face Space). */
  src: string
  /** Iframe width. Default 850. Responsive on small screens. */
  width?: number
  /** Iframe height. Default 450. Responsive on small screens. */
  height?: number
  /** Accessible label for the open/close button. */
  buttonLabel?: string
  /** Accessible label for the chat panel. */
  panelLabel?: string
}

const ChatWidget = ({
  src,
  width = 850,
  height = 450,
  buttonLabel = 'Open chat',
  panelLabel = 'Chat',
}: ChatWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasBeenOpened, setHasBeenOpened] = useState(false)

  const open = () => {
    setHasBeenOpened(true)
    setIsOpen(true)
  }

  const close = () => {
    ;(document.activeElement as HTMLElement)?.blur()
    setIsOpen(false)
  }

  const isPanelOpen = isOpen

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 sm:flex-row-reverse sm:items-center">
          <div
            className="pointer-events-none max-w-[200px] rounded-lg bg-gray-900 px-3 py-2 text-right text-xs text-white shadow-lg dark:bg-gray-100 dark:text-gray-900 sm:max-w-[240px] sm:text-left"
            role="status"
            aria-live="polite"
          >
            {CHAT_HINT}
          </div>
          <Button
            type="button"
            variant="primary"
            size="iconLg"
            onClick={open}
            aria-label={buttonLabel}
            aria-expanded={isOpen}
            aria-controls="chat-widget-panel"
            title={CHAT_HINT}
            className="shadow-lg transition-all duration-300 hover:scale-105"
          >
            <FaComment size={24} aria-hidden="true" className="sm:h-7 sm:w-7" />
          </Button>
        </div>
      )}

      {hasBeenOpened && (
        <>
          <div
            id="chat-widget-panel"
            role="region"
            aria-label={panelLabel}
            aria-hidden={!isPanelOpen}
            className={`fixed z-50 flex flex-col overflow-hidden rounded-t-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900 sm:bottom-6 sm:right-6 sm:rounded-2xl sm:origin-bottom-right ${
              isPanelOpen
                ? 'bottom-0 right-0 left-0 translate-y-0 scale-100 opacity-100 sm:left-auto'
                : 'pointer-events-none bottom-0 right-0 left-0 -translate-y-full scale-95 opacity-0 sm:translate-y-4'
            }`}
            style={{
              height: '85vh',
              maxHeight: height + 56,
              maxWidth: width,
              width: '100%',
              transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
              visibility: isPanelOpen ? 'visible' : 'hidden',
            }}
          >
            <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {panelLabel}
              </span>
              <Button
                type="button"
                variant="ghost"
                size="iconSm"
                onClick={close}
                aria-label="Close chat"
                className="rounded-full"
              >
                <FaTimes size={18} aria-hidden="true" />
              </Button>
            </div>
            <div className="min-h-0 flex-1 bg-gray-50 dark:bg-gray-800">
              <iframe
                title={panelLabel}
                src={isPanelOpen ? src : 'about:blank'}
                width="100%"
                height="100%"
                className="h-full w-full border-0"
              />
            </div>
          </div>

          <button
            type="button"
            aria-label="Close chat"
            onClick={close}
            className={`fixed inset-0 z-[45] cursor-default bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 focus:outline-none focus:ring-0 ${
              isPanelOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
            }`}
          />
        </>
      )}
    </>
  )
}

export default ChatWidget
